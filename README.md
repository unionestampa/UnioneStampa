# L'Unione Stampa

Sito editoriale statico Astro per GitHub Pages.

## Struttura

- `src/content/articoli/` — articoli in Markdown.
- `src/data/site.ts` — dati editoriali, inclusa la prossima uscita.
- `src/styles/global.css` — identità grafica e responsive design.
- `public/assets/` — loghi e immagini statiche.
- `.github/workflows/deploy.yml` — build e pubblicazione automatica su GitHub Pages.

## Pubblicare un articolo

Crea un file `.md` in `src/content/articoli/` con questo schema:

```md
---
title: "Titolo"
category: "Politica"
excerpt: "Breve descrizione."
publishedAt: 2026-10-21T09:00:00+02:00
readTime: "3 min"
featured: false
issue: "01 / 2026"
---

Testo dell'articolo.
```

Se `publishedAt` è nel futuro, l'articolo non viene mostrato finché non arriva la data.

## Cambiare la prossima uscita

Modifica `src/data/site.ts`:

```ts
nextIssue: {
  number: '02 / 2026',
  at: '2026-11-05T18:00:00+01:00',
  format: 'Formato tascabile · digitale + stampa',
}
```

## GitHub Pages

Il progetto è configurato per `https://unionestampa.github.io/UnioneStampa/`.

In GitHub: **Settings → Pages → Source → GitHub Actions**.
