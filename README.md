# Unione Stampa

Sito editoriale statico realizzato con Astro e pubblicato tramite GitHub Pages.

**Versione:** 8.11  
**Sito:** https://unionestampa.github.io/UnioneStampa/

## Struttura del progetto

- `src/pages/index.astro` — homepage e sezioni principali.
- `src/pages/articoli/[slug].astro` — pagine dei singoli articoli e presentazione della relazione stampata.
- `src/pages/manifesti.astro` — archivio dei manifesti.
- `src/content/articoli/` — contenuti editoriali in Markdown.
- `src/data/site.ts` — contatti, social e dati della prossima uscita.
- `src/styles/global.css` — identità grafica, composizione e adattamento mobile.
- `public/assets/` — loghi, illustrazioni e mockup.
- `.github/workflows/deploy.yml` — build e pubblicazione su GitHub Pages.
- `docs/modello-editoriale.md` — modello interno per preparare nuovi articoli, non pubblicato sul sito.
- `CHANGELOG.md` — registro unico delle modifiche.
- `Archivio versioni/` — note delle versioni precedenti.

## Pubblicare un articolo

Crea un file `.md` in `src/content/articoli/` con un frontmatter simile al seguente:

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

Un `publishedAt` futuro nasconde l'articolo dalle liste fino alla data indicata, ma la generazione della pagina diretta non viene bloccata. Per mostrare un contenuto nell'archivio Manifesti, usare `category: "Manifesto"`.

## Pubblicazione su GitHub Pages

In GitHub, aprire **Settings → Pages → Build and deployment** e verificare che la sorgente sia **GitHub Actions**. Dopo aver caricato le modifiche nel branch `main`, attendere che il workflow di deployment termini correttamente prima di considerare aggiornato il sito pubblico.

## Cronologia e versioni

Aggiungere tutte le nuove note al file radice `CHANGELOG.md`. Non creare nuovi `CHANGELOG-vX.md` nella radice: i file storici già esistenti sono conservati in `Archivio versioni/`.
