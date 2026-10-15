# CHANGELOG — Unione Stampa

Le versioni seguono la numerazione decimale: gli aggiornamenti correttivi e incrementali mantengono il numero principale (per esempio 8.8, 8.9); un cambiamento strutturale importante può aprire la versione 9.0.

## 8.9 — Manifesti in una pila di carte interattive

- Riorganizzata la sezione Manifesti della homepage: il riquadro con la sparviera che legge resta in primo piano, mentre le altre schede spuntano da dietro sul lato destro.
- Al passaggio del mouse o con la navigazione da tastiera, la scheda scelta scorre verso l'esterno e si inclina leggermente, rendendo più visibili contenuti e collegamento.
- Su schermi piccoli, le schede tornano in una colonna normale, così ogni collegamento resta chiaro e utilizzabile anche senza hover.
- Aggiornato il numero di versione del progetto e mantenuto un unico `CHANGELOG.md` nella radice; le note storiche restano in `Archivio versioni/`.

## 8.8 — Mockup della relazione e ordine dell'archivio

- Sostituita nella pagina *Come scrivere il futuro essendo presenti* la copertina piatta con il mockup tridimensionale fornito, mantenendo lo sfondo trasparente e ritagliando i margini vuoti.
- Riorganizzato il riquadro della pubblicazione per usare meglio lo spazio, con un leggero ingrandimento al passaggio del mouse e layout adattivo su schermi piccoli.
- Aggiunta una nota sulla distribuzione gestita direttamente, con collegamento alla sezione Contatti per informazioni e richieste di copia.
- Sostituita la frase in evidenza con «Come si scrive il futuro, se non si possiede nemmeno il presente?».
- Consolidato il registro delle versioni in questo `CHANGELOG.md`; le note storiche separate sono conservate in `Archivio versioni/`.

## 8.7 — Rimozione completa dell’articolo modello

- Escluso l’articolo `modello` dalle liste della homepage, dai suggerimenti di ricerca e dalla pagina di ricerca completa.
- Aggiunta un’esclusione basata su ID, slug e titolo esatto «Come pubblicare un nuovo articolo».

## 8.6 — Esclusione della pagina modello

- Escluso esplicitamente lo slug `modello` dalla generazione delle pagine articolo.

## 8.5 — Correzione della relazione e pulizia editoriale

- La pagina della relazione è raggiungibile anche quando la data di pubblicazione è futura; la data continua a regolare la visibilità nelle liste.
- Il modello editoriale è conservato in `docs/modello-editoriale.md` e non viene pubblicato come articolo.

## 8.4 — Sicurezza e pulizia editoriale

- Aggiunta una Content Security Policy tramite meta tag, con origini consentite limitate alle risorse necessarie.
- Ridotti i permessi del workflow GitHub Actions: sola lettura nel job di build e permessi di pubblicazione solo nel job di deploy.
- Aggiunti controllo leggero dei segreti, aggiornamento di `.gitignore`, `SECURITY.md` e controlli di sicurezza per le immagini.

## 8.3 — Aggiornamenti grafici della homepage

- Aggiornata la card principale Manifesti con l'immagine della sparviera che legge sul prato.
- Sostituita l'illustrazione della sezione «Guarda cosa succede» con l'immagine aggiornata della mano con La Piuma.

## 8.2 — Perfezionamenti della Piuma e distribuzione

- Aggiornata l'anteprima statica della Piuma e il confronto editoriale; rimossi il badge VS e i tre riquadri sintetici.
- Aggiunta una mappa Google Maps di sfondo nella sezione «Luoghi di rilascio», con interazione bloccata e avviso di funzione inattiva.

## 8.1 — Miglioramenti UX

- Migliorata la ricerca mobile e resa disponibile una pagina dedicata ai risultati completi.
- Affinate navigazione, pannello In evidenza, frecce e comportamento responsive.
- Aggiornate illustrazioni e confronto editoriale della Piuma.

## 8.0 — Aggiornamenti UX

- Sostituito il marchio nell'intestazione con il logo completo fornito.
- Migliorato il pannello In evidenza, con controlli per cambiare suggerimento.
- Perfezionata la ricerca, che considera titoli, descrizioni e testo degli articoli.

## 7.0 — In evidenza a tendina

- Trasformata la sezione In evidenza in un pannello apribile e richiudibile, con contatore, carosello e supporto per tastiera, mobile e preferenze di movimento ridotto.

## 6.0 — Manifesti, ricerca e navigazione

- Aggiunta la pagina archivio Manifesti e aggiornati i collegamenti editoriali.
- Aggiunta la ricerca predittiva e migliorata la navigazione.
- Separata la dichiarazione sulla gratuità dalle schede della homepage.

## Archivio storico

Le note complete delle versioni precedenti sono conservate in `Archivio versioni/`. Da questa versione in poi, ogni aggiornamento si aggiunge a questo file, senza creare un nuovo changelog nella radice.
