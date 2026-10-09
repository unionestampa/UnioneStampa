# L'Unione Stampa

Sito editoriale statico Astro per GitHub Pages, configurato per:

`https://unionestampa.github.io/UnioneStampa/`

## Struttura editoriale

- `src/pages/index.astro` — homepage e sezioni principali.
- `src/components/PiumaDemo.astro` — demo interattiva dell'apertura della Piuma.
- `src/pages/aggiornamenti.astro` — area tecnica per update e nuove funzionalità.
- `src/content/articoli/` — articoli in Markdown.
- `src/data/site.ts` — contatti, social e testo della prossima uscita.
- `src/styles/global.css` — identità grafica e composizione desktop/mobile.
- `public/assets/` — loghi e immagini.
- `.github/workflows/deploy.yml` — build e pubblicazione automatica su GitHub Pages.

## Pubblicare un articolo

Crea un file `.md` in `src/content/articoli/` con:

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

Un `publishedAt` futuro nasconde automaticamente l'articolo fino alla data indicata.

Per far apparire un pezzo nel **Manifesto**, usare `category: "Manifesto"`.

## Prossima uscita, social e contatti

Modifica `src/data/site.ts` per cambiare lo stato della prossima uscita, l'email o gli account Instagram.

Il pulsante **Avvisami** nella homepage è volutamente bloccato finché non viene collegato a un servizio di notifiche.

## GitHub Pages

In GitHub: **Settings → Pages → Source → GitHub Actions**.

## Novità in evidenza e prima relazione stampata

Il riquadro fisso **In evidenza** ruota automaticamente tra la prima relazione stampata, la Piuma e la pagina Aggiornamenti. Su desktop resta sul lato destro; su schermi più piccoli si sposta in basso per adattarsi al formato verticale. Il passaggio automatico si ferma quando si passa con il mouse o si porta il focus sul riquadro.

La pagina della relazione si trova in `src/content/articoli/come-scrivere-il-futuro-essendo-presenti.md`. La copertina originale è in `public/assets/copertina-come-scrivere-il-futuro.png`. Il campo `cover` nel frontmatter attiva il mockup del volume, rappresentato in formato A5 di circa 80 pagine.
