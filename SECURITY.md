# Security policy — L'Unione Stampa

## Scope

This project is a static Astro website published on GitHub Pages. It currently has no first-party login, database, or server endpoint that accepts and stores user submissions.

## Reporting a concern

Send a concise report to `unionestampa@proton.me`. Include the affected page or file, the steps to reproduce the issue, and screenshots or logs when safe to share. Do not publish tokens, personal data, or exploit details publicly.

## Maintainer checklist

- Never commit API keys, personal access tokens, passwords, private keys, `.env` files, or service-account credentials.
- If a secret has been committed, revoke/rotate it immediately. Deleting it in a later commit is not enough because it may remain in Git history.
- Keep GitHub account two-factor authentication enabled and grant collaborators only the permissions they need.
- Review GitHub dependency/security alerts and failed secret checks.
- Review every new external script, iframe, form, or third-party integration before adding it.
- Treat browser-side protection of images as a deterrent only: anything delivered publicly can be retrieved by a determined visitor.
