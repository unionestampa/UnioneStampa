import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const ignoredDirectories = new Set(['.git', 'node_modules', 'dist', '.astro']);
const textualExtensions = new Set([
  '.astro', '.ts', '.js', '.mjs', '.cjs', '.json', '.md', '.css', '.html',
  '.yml', '.yaml', '.txt', '.toml', '.ini', '.sh', '.conf', '.example'
]);
const patterns = [
  ['private key', /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/i],
  ['GitHub token', /\b(?:gh[pousr]_[A-Za-z0-9_]{30,}|github_pat_[A-Za-z0-9_]{30,})\b/],
  ['AWS access key ID', /\bAKIA[0-9A-Z]{16}\b/],
  ['Google API key', /\bAIza[0-9A-Za-z_-]{35}\b/],
  ['probable credential assignment', /\b(?:api[_-]?key|client[_-]?secret|access[_-]?token|password)\b\s*[:=]\s*["']?(?!your[_ -]?|example|placeholder|changeme|<)[A-Za-z0-9_./+=-]{24,}/i],
];

const files = [];
function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (full === path.join(root, 'scripts', 'check-secrets.mjs')) continue;
    const ext = path.extname(entry.name).toLowerCase();
    if (textualExtensions.has(ext) || ['.gitignore', '.npmrc', '.env'].includes(entry.name) || entry.name.startsWith('.env.')) files.push(full);
  }
}

walk(root);
const findings = [];
for (const file of files) {
  let content;
  try {
    content = fs.readFileSync(file, 'utf8');
  } catch {
    continue;
  }
  for (const [label, pattern] of patterns) {
    const match = pattern.exec(content);
    if (match) {
      const line = content.slice(0, match.index).split('\n').length;
      findings.push(`${path.relative(root, file)}:${line}: possible ${label}`);
    }
  }
}

if (findings.length) {
  console.error('Security check failed: possible secret-like values found. Review these lines and revoke any exposed credential.');
  for (const finding of findings) console.error(`- ${finding}`);
  process.exitCode = 1;
} else {
  console.log(`Security check passed: no common secret patterns found in ${files.length} text files.`);
}
