---
title: "Come pubblicare un nuovo articolo"
category: "Redazione"
excerpt: "Il modello editoriale minimo per aggiungere una nuova uscita senza toccare il codice della homepage."
publishedAt: 2026-10-03T09:00:00+02:00
readTime: "1 min"
featured: false
issue: "01 / 2026"
---

Per pubblicare una nuova storia, crea un nuovo file `.md` nella cartella `src/content/articoli/`.

Inserisci in alto i dati editoriali tra i trattini e poi scrivi il testo normalmente in Markdown.

La data `publishedAt` decide quando l'articolo diventa visibile: gli articoli con una data futura vengono esclusi automaticamente dalla homepage e dalle pagine pubbliche.

Questo permette alla redazione di preparare in anticipo un'intera uscita e fare il push senza dover modificare manualmente la grafica del sito.
