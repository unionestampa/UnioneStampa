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

Inserisci in alto i dati editoriali tra i trattini e poi scrivi il testo normalmente in Markdown. Perché ricerca e filtri dell’archivio funzionino bene, indica anche il tipo di contenuto (`relazioni`, `articoli` oppure `libri`) e i temi pertinenti.

Esempio di frontmatter:

```yaml
---
title: "Titolo della pubblicazione"
category: "Editoriale"
kind: "articoli"
themes: ["società", "editoria"]
excerpt: "Descrizione breve, utile nei risultati di ricerca."
publishedAt: 2026-10-21T09:00:00+02:00
readTime: "3 min"
featured: false
issue: "01 / 2026"
---
```

Temi ammessi: `politica`, `società`, `giovani`, `editoria`, `scuola`, `lavoro`, `arte`. Se una pubblicazione è una relazione, usa `kind: "relazioni"`; per un libro, `kind: "libri"`.

La data `publishedAt` decide quando l'articolo diventa visibile: gli articoli con una data futura vengono esclusi automaticamente dalla homepage e dalle pagine pubbliche.

Questo permette alla redazione di preparare in anticipo un'intera uscita e fare il push senza dover modificare manualmente la grafica del sito.
