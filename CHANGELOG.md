# Changelog Unione Stampa

## 8.17 — Cornice rossa simultanea e barra libera

- Sostituita la cornice tratteggiata con un bordo rosso pieno e spesso, arrotondato come nel riferimento fornito.
- All'attivazione (hover, focus da tastiera o pressione), il bordo si espande simultaneamente da tutti e quattro i lati verso l'interno, senza ritardi sequenziali.
- Eliminati i punti di aggancio del carosello: trascinando o cliccando la barra, il carosello raggiunge direttamente la posizione scelta senza animazioni concorrenti o ritorni automatici.
- Semplificato anche lo scorrimento tramite rotella quando si trova sulla barra; lo scorrimento touch nativo sulle schede è mantenuto.


## 8.16.0 — 15 ottobre 2026
- Sostituita la sottile cornice attiva con un bordo rosso tratteggiato che si disegna in sequenza lungo i quattro lati al passaggio del mouse, al focus da tastiera e durante la pressione.
- Aggiornati metadati, titolo, descrizione e invito all'azione della scheda La Piuma per allinearli al testo del manifesto pubblicato.
- Rimossa completamente la sfumatura bianca sul lato destro del carosello.
- Reso più naturale lo scorrimento touch con snap di prossimità e senza punti di aggancio forzati quando si usa la barra di avanzamento.

## 8.15 — Finitura grafica del carosello Manifesti

- Rimossa la sfumatura laterale dalla scheda principale «Tutti i manifesti»; allargata la scheda a 786 px per rispettare le proporzioni dell'immagine originale mantenendo 570 px di altezza.
- La sfumatura sul bordo destro del carosello è ora più lunga e graduale, e compare soltanto quando la scheda archivio non si trova più sotto quel bordo.
- Eliminata l'ombra esterna al passaggio del mouse; sostituita con un bordo interno rosso discreto.
- Cambiata in ocra/giallo l'etichetta «IN EVIDENZA».
- Aumentato lo spessore della barra di avanzamento e trasformato il cursore in una pillola arrotondata.
- Reso progressivo lo scorrimento comandato dalla barra, evitando salti durante il trascinamento.

## 8.14 — Rifiniture carosello Manifesti e avanzamento interattivo

- Uniformata l'altezza del riquadro «Tutti i manifesti» a quella delle copertine verticali, mantenendolo più largo e orizzontale.
- Aggiunta una sfumatura beige sul lato destro della scheda archivio e al bordo del viewport, per integrare meglio il taglio dell'immagine e accompagnare visivamente lo scorrimento.
- Aggiunta una barra di avanzamento interattiva, trascinabile e cliccabile, con percentuale visibile e riempimento sincronizzato anche durante lo scorrimento tramite frecce.
- Limitata la conversione della rotella in scorrimento orizzontale alla sola barra di avanzamento.
- Aumentato lo spazio verticale interno del carosello per evitare che le ombre delle schede vengano tagliate; l'ombra hover ora usa il rosso del sito.
- Aggiunta l'etichetta «IN EVIDENZA» alle sole schede della relazione e de La Piuma, accanto alla numerazione.

## 8.13 — Dimensioni coerenti, freccia indietro e scorrimento con rotella

- Adeguate le schede verticali della home al formato dell'archivio `/manifesti/` (circa 320–370 px di larghezza e 570 px di altezza, in base allo schermo).
- Trasformato il riquadro «Tutti i manifesti» in una card orizzontale più larga e più bassa, separata visivamente dalle copertine verticali.
- Aggiunta la freccia per tornare alle pubblicazioni precedenti e mantenute entrambe le frecce disattivate ai rispettivi limiti del carosello.
- Rimossi i simboli «+» dagli spazi riservati alle prossime uscite, mantenendo il leggero rilievo incassato.
- Aggiunta la navigazione orizzontale tramite rotella del mouse quando il puntatore si trova sul carosello; ai limiti lo scorrimento della pagina continua normalmente.
- Conservati lo scorrimento touch, lo snap tra schede, l'accessibilità da tastiera e il rispetto della preferenza di movimento ridotto.

## 8.12 — Carosello orizzontale dei manifesti

- Sostituito l'effetto delle carte sovrapposte con un carosello orizzontale semplice, con riquadri verticali e scorrimento laterale.
- Mantenuto a sinistra il riquadro principale dell'archivio, con la sparviera che legge, e affiancate le schede della relazione e de La Piuma.
- Usata la nuova immagine caricata per la scheda de La Piuma; aggiunta una sfumatura scura leggera su tutte le copertine per garantire la leggibilità del testo.
- Aggiunti due spazi vuoti con effetto incassato per future pubblicazioni e una freccia funzionante per avanzare nel carosello.
- Il carosello è utilizzabile con mouse, tastiera e scorrimento touch; rispetta la preferenza di movimento ridotto.
- Spostate le anteprime temporanee nella sottocartella `Archivio versioni/anteprime/`, mantenendo un solo changelog nella radice.

## 8.11 — Carte dritte e sfogliatura più evidente

- Le copertine della relazione e della Piuma partono dritte e più nascoste dietro al riquadro principale, lasciando visibili soltanto le strisce laterali.
- Al passaggio del mouse o con il focus da tastiera, le carte escono sensibilmente dal mazzo e si inclinano, senza superare il riquadro con la lettrice.
- Il velo scuro è separato dall'immagine e sfuma fino a scomparire quando una carta viene selezionata, lasciando vedere la copertina senza oscuramento aggiuntivo.
- Su tablet e mobile le copertine restano intere e accessibili, senza dipendere dall'hover.

Le versioni seguono la numerazione decimale: gli aggiornamenti correttivi e incrementali mantengono il numero principale (per esempio 8.8, 8.9, 8.10); un cambiamento strutturale importante può aprire la versione 9.0.

## 8.10 — Carte Manifesti ridisegnate

- Le schede della homepage usano ora formato verticale, gerarchia visiva, numerazione e impaginazione coerenti con le copertine presenti nell'archivio `/manifesti/`.
- Conservati soltanto i collegamenti alla relazione *Come scrivere il futuro essendo presenti* e al manifesto *La Piuma*; rimossa dalla pila la scheda «Luoghi di rilascio».
- Corretto il livello dell'animazione: le copertine possono sfalsarsi e inclinarsi al passaggio del mouse o con il focus da tastiera, ma rimangono sempre dietro al grande riquadro con la lettrice.
- Su tablet e mobile le due copertine sono visibili in una griglia normale, senza dipendere dall'hover.
- Mantenuto un solo `CHANGELOG.md` nella radice e conservato l'archivio storico in `Archivio versioni/`.

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
