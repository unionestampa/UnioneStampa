# Unione Stampa

Sito editoriale statico realizzato con Astro e pubblicato tramite GitHub Pages.

**Versione:** 9.4.1  
**Sito:** https://unionestampa.github.io/UnioneStampa/

## Struttura del progetto

- `src/pages/index.astro` — homepage e sezioni principali.
- `src/pages/articoli/[slug].astro` — pagine dei singoli articoli e presentazione della relazione stampata.
- `src/pages/articoli/index.astro` — archivio completo degli articoli pubblicati.
- `src/pages/manifesti.astro` — archivio dei manifesti.
- `src/content/articoli/` — contenuti editoriali in Markdown.
- `src/data/site.ts` — contatti, social e dati della prossima uscita.
- `src/utils/paths.ts` — generazione coerente dei permalink degli articoli.
- `src/styles/global.css` — identità grafica, composizione e adattamento mobile, incluso l’archivio verticale dei manifesti e i filtri di ricerca.
- `public/images/` — loghi, illustrazioni e mockup.
- `.github/workflows/deploy.yml` — build e pubblicazione su GitHub Pages.
- `docs/modello-editoriale.md` — modello interno per preparare nuovi articoli, non pubblicato sul sito.
- `CHANGELOG.md` — registro unico delle modifiche.
- `Archivio versioni/` — note delle versioni precedenti e anteprime archiviate.

## Materiali PDF interni

I PDF originali usati per trascrivere e preparare i contenuti sono materiali di lavorazione privati: non vanno inseriti nel repository né in `public/`. Il progetto li esclude tramite `.gitignore`; conserva gli originali fuori dalla cartella del sito e pubblica soltanto il testo Markdown approvato. Se i PDF sono già stati caricati in un repository pubblico, cancellarli dalla versione corrente non elimina le copie nei vecchi commit: per rimuoverli anche dalla cronologia occorre riscrivere la storia Git (ad esempio con `git filter-repo`) e forzare il push del repository ripulito.

## Pubblicare un articolo

Crea un file `.md` in `src/content/articoli/` con un frontmatter simile al seguente:

```md
---
title: "Titolo"
category: "Politica"
kind: "articoli"
themes: ["politica", "società"]
excerpt: "Breve descrizione."
publishedAt: 2026-10-21T09:00:00+02:00
readTime: "3 min"
featured: false
issue: "01 / 2026"
---

Testo dell'articolo.
```

Un `publishedAt` futuro nasconde l'articolo dalle liste fino alla data indicata, ma la generazione della pagina diretta non viene bloccata. Per classificare un contenuto nell’archivio, si possono usare `kind: "relazioni" | "articoli" | "libri"` e `themes: ["politica", "società", "giovani", "editoria", "scuola", "lavoro", "arte"]`. `category` resta l’etichetta editoriale visualizzata.

## Pubblicazione su GitHub Pages

In GitHub, aprire **Settings → Pages → Build and deployment** e verificare che la sorgente sia **GitHub Actions**. Dopo aver caricato le modifiche nel branch `main`, attendere che il workflow di deployment termini correttamente prima di considerare aggiornato il sito pubblico.

## Cronologia e versioni

Aggiungere tutte le nuove note al file radice `CHANGELOG.md`. Non creare nuovi `CHANGELOG-vX.md` nella radice: i file storici già esistenti sono conservati in `Archivio versioni/`.


## Aggiornamento v9.0
Nuovo archivio Manifesti con riquadro principale e schede orizzontali a scorrimento verticale, ricerca e filtri tematici; aggiunti l’anteprima bloccata dell’Archivio visivo e il nuovo articolo sui principi di gratuità editoriale. Per i dettagli, vedere `CHANGELOG.md`.


## Aggiornamento v9.1

- Ripristinata la forma a capsula dei pulsanti principali; uniformata la curvatura morbida dei riquadri editoriali.
- Nell’archivio Manifesti restano soltanto la relazione e La Piuma: “Il giornale che sta in una mano” rimane un articolo e non viene duplicato tra i manifesti.
- Ridotte le dimensioni delle schede d’archivio e aumentato lo spazio fra loro.
- Trasformati i controlli del rail verticale in sovrapposizioni trasparenti a tutta larghezza, con frecce bianche e sfumatura scura soltanto al passaggio del mouse/focus. Le schede occupano ora tutta l’altezza del riquadro principale.
- Aggiunto un lieve effetto di sfocatura allo sfondo delle schede Manifesti al passaggio del mouse, mantenendo il testo nitido.
- Impostato Playfair Display per entrambi i titoli “Tutti i manifesti”.
- Reso visibile nella sezione Articoli l’articolo sulla scelta editoriale gratuita, spostando la data di pubblicazione alla data precedente così da non restare programmato per più tardi.
- Sostituito il logo Instagram colorato con il solo simbolo nero trasparente, visualizzato una sola volta accanto all’etichetta Social.

## Aggiornamento v9.2

- Su telefono le due pubblicazioni in evidenza diventano un carosello orizzontale, con swipe, frecce sovrapposte e indicatori di posizione; su desktop resta il rail verticale.
- Nell’archivio, ricerca tramite lente/Invio e filtri multipli per tipo e tema applicati soltanto al submit; il riepilogo mostra la query tra virgolette e le categorie scelte.
- Le schede dell’archivio mostrano il badge «NOVITÀ» e replicano il leggero effetto di sfocatura al passaggio del mouse; su telefono rimangono due schede per riga.
- Il footer usa il simbolo della piuma disponibile nel progetto al posto del logo testuale. Per usare il file specifico `brand-simbolo-piuma-illustrazione.png`, aggiungerlo a `public/images/brand/` e aggiornare il riferimento, perché non era incluso nello ZIP ricevuto.

