# Changelog

## v9.4.1 — Correzioni Piuma e archivio articoli

- Corretti i collegamenti dall’indice Piuma: gli articoli usano i permalink `.md/` generati dalle pagine statiche; aggiunti anche percorsi puliti alternativi per evitare 404 su link già diffusi.
- Ridotta a tre schede l’anteprima Articoli in homepage e aggiunto il collegamento all’archivio completo.
- Creata la pagina `/articoli/` con tutti gli articoli pubblicati (escludendo le pubblicazioni archiviate nei Manifesti) e aggiornati i collegamenti interni con un generatore URL condiviso.
- Rimossi tutti i PDF dalla cartella pubblica, dai frontmatter e dallo schema; eliminato il pulsante di download dalle pagine articolo. Aggiunta un’esclusione globale `*.pdf` per impedire future aggiunte accidentali.
- Sostituito il simbolo Piuma nella testata del numero con il logo rosso fornito, disposto a sinistra del marchio testuale; sostituito il simbolo nelle pagine articolo con il logo nero fornito.
- Centrate le voci dell’indice Piuma e isolati gli effetti hover alla singola voce, senza ingrandimenti che interferiscano con le righe vicine.
- Sostituiti i riquadri personalizzati del podio fotografico con gli stessi segnaposto vuoti dell’archivio Manifesti.
- Aggiornati versione del pacchetto e documentazione a 9.4.1.


## v9.4.0 — Piuma OTT26: archivio digitale del primo numero

- Inserito il manifesto Piuma OTT26 in prima posizione nell’archivio Manifesti, con badge NOVITÀ; la relazione *Come scrivere il futuro essendo presenti* segue in seconda posizione.
- Creata la pagina d’ingresso del numero di ottobre 2026 con indice dei sei contenuti.
- Create pagine dedicate per *Una cosa commune*, *Testudo populi*, Fotografie del mese, *Sistema Nervoso*, *Cultura e teoria* e Agenda.
- Aggiunti i quattro PDF approvati come versioni consultabili/scaricabili dalle rispettive pagine; l’Agenda resta una versione web di lavoro in attesa del suo PDF.
- Inseriti i sei contenuti nell’archivio Articoli con contrassegno grafico della Piuma OTT26 e ricerca indicizzabile.
- Aggiunta la pagina Fotografie del mese con tre spazi segnaposto e podio 2–1–3.
- Aggiunti i crediti redazionali, di ricerca, stampa e design a Luca Barretta Lalić e i copyright delle due organizzazioni.
- Mantenuti i caratteri, i colori e i componenti già in uso nel sito; nessuna modifica alle altre sezioni.


- Sostituiti i tag sempre visibili nell’archivio con i pulsanti «Tipo di pubblicazione» e «Temi», che aprono menu a comparsa con selezione multipla.
- I menu si chiudono cliccando fuori o premendo Esc; i contatori mostrano quanti tag sono selezionati e Reset li azzera.
- Il badge NOVITÀ nell’archivio usa dimensioni, forma, simbolo e spaziatura coerenti con quello della home.
- Il footer usa `brand-simbolo-piuma-illustrazione.png`, presente nella cartella brand del progetto ricevuto.

# Changelog Unione Stampa

## 9.2 — Carosello mobile e ricerca archivio

- Il simbolo della piuma sostituisce il logo testuale nel footer; il file illustrato indicato dall'utente non era presente nello ZIP 9.1, quindi è stato riutilizzato il simbolo della piuma già disponibile nel progetto.
- I badge della home sono scritti «NOVITÀ» e allineati in alto a destra.
- Corretto il livello di interazione delle frecce verticali: quando disattivate non intercettano più click destinati alle schede sottostanti.
- Su telefono le due pubblicazioni sono un carosello orizzontale singolo, scorribile con il dito, con frecce laterali sovrapposte e indicatori di posizione; i segnaposto non sono mostrati nel carosello mobile.
- Le schede della pagina Manifesti usano la stessa sfocatura/velo in hover della home e mostrano il badge «NOVITÀ».
- La ricerca archivio si applica solo tramite il pulsante con la lente (o Invio); filtri multipli per tipologia e tema sono selezionabili in combinazione e la descrizione sotto la barra riassume query, tipi e temi scelti.
- La lente è stata spostata a destra, i filtri adottano pulsanti scuri coerenti con «In evidenza» e l'archivio mobile mantiene due schede per riga anche sugli schermi stretti.

## 9.1 — Correzioni UI e archivio Manifesti

- Ripristinata la forma a capsula dei pulsanti principali; curvatura più morbida e uniforme per i riquadri editoriali.
- Nell’archivio Manifesti vengono mostrate soltanto le due pubblicazioni approvate: la relazione e La Piuma. “Il giornale che sta in una mano” resta un articolo e non viene aggiunto come manifesto.
- Ridotte le dimensioni delle schede dell’archivio e aumentata la spaziatura tra le schede.
- Le frecce della colonna verticale sono ora sovrapposizioni trasparenti, non righe di pulsanti separate: area di controllo estesa, sfumatura al passaggio del mouse/focus e schede estese per tutta l’altezza della card principale.
- Aggiunta una sfocatura lieve e separata del livello immagine al passaggio del mouse; i testi restano nitidi.
- I titoli “Tutti i manifesti” usano Playfair Display.
- L’articolo sulla scelta editoriale gratuita è visibile nella sezione Articoli; la sua data era futura rispetto all’orario di consultazione, quindi è stata spostata al 17 ottobre 2026.
- Il logo Instagram è ora un simbolo nero su sfondo trasparente, mostrato una sola volta accanto al titolo Social.
- Mantenute le immagini aggiornate, la scansione dei segreti e le altre protezioni del progetto.

## 9.0 — Nuovo archivio Manifesti e revisione editoriale

- Ridisegnata la sezione Manifesti della home: la sparviera che legge resta nel riquadro principale «Tutti i manifesti»; a destra compaiono schede orizzontali della relazione e de La Piuma, seguite da spazi vuoti incassati.
- Sostituito lo scorrimento orizzontale con un rail verticale azionabile tramite frecce e scorrimento touch; rimossa la precedente illuminazione rossa. L'interazione usa soltanto un lieve velo scuro hover e un ingrandimento discreto.
- Rifatta la pagina dell'archivio: schede verticali, ricerca testuale e filtri combinabili per relazioni, articoli, libri e temi (politica, società, giovani, editoria, scuola, lavoro, arte).
- Aggiunto l'articolo «Un'editoria accessibile: gratuita, senza abbonamenti» al posto del precedente blocco promozionale in homepage.
- Aggiunta l'anteprima «Archivio visivo», indicata chiaramente come bloccata e in arrivo, con descrizione di backstage, fotografie, video e materiali artistici dell'Unione Sparvieri.
- Semplificata la sezione Social: logo Instagram, distinzione tramite linea sottile fra «Editoria» e «Organizzazione», icona email generica per le collaborazioni.
- Uniformato il raggio degli angoli per i principali pulsanti e riquadri; migliorato l'allineamento della comparazione La Piuma / giornale classico.
- Sostituito il trattino lungo nel titolo della homepage con un punto mediano. Aggiunta prevenzione del trascinamento involontario di link e immagini, senza disattivare i click.
- Conservate le protezioni statiche esistenti, i controlli di dipendenze e la scansione locale dei segreti. La versione rimane un sito statico: i filtri funzionano nel browser senza un backend.


## 8.20 — Organizzazione delle risorse e nomi coerenti

- Riordinate tutte le immagini attive in `public/images/`, suddivise per funzione: `brand`, `illustrazioni`, `manifesti`, `pubblicazioni` e `simboli`.
- Rinominati tutti gli 11 file immagine con nomi brevi, descrittivi, coerenti e univoci; aggiornati i riferimenti nel codice, nei contenuti e nei fogli di stile.
- Aggiunto un catalogo `public/images/README.md` con la funzione di ogni immagine e regole per sostituire i file con versioni compresse mantenendo i riferimenti.
- Organizzata `public/fonts/` per ruolo: `titoli-display`, `testi-editoriali` e `testi-interfaccia`, con istruzioni per aggiungere font in futuro. I font attuali restano caricati da Google Fonts: non erano presenti file font locali da spostare.
- Conservati layout, animazioni e contenuti del sito; questa versione organizza i percorsi ma non comprime le immagini, perché le versioni compresse saranno fornite dall'utente.

## 8.19 — Alone rosso diffuso e uniforme

- Rifinita la luce delle schede prendendo come riferimento l’esempio fornito: rosso morbido e diffuso lungo tutto il perimetro, con una fascia sfumata di spessore uniforme su tutti e quattro i lati.
- Separato l’effetto in uno strato grafico dietro ai contenuti: titoli, descrizioni, badge e inviti all’azione restano nitidi e non vengono coperti dalla sfumatura.
- Mantenuta la stessa attivazione contemporanea sui quattro lati e la stessa curva temporale dell’animazione; applicazione uniforme a «Tutti i manifesti», alla relazione e a La Piuma.

## 8.18 — Luce interna, frecce laterali e badge allineati

- Trasformata la cornice rossa delle schede del carosello in una luce interna sfumata dello stesso rosso, mantenendo l'accensione simultanea sui quattro lati. La luce è resa come ombra interna sullo sfondo, sotto al testo.
- Spostati i controlli ai bordi opposti delle schede: frecce bianche semplici, aree cliccabili estese in altezza e sfumatura nera leggera al passaggio del mouse, come nel pannello «In evidenza».
- Uniformate forma, curvatura, altezza e dimensioni dell'etichetta «IN EVIDENZA» a quelle dei badge numerici «01 / 02».
- Allineate alla stessa altezza superiore le etichette dell'archivio editoriale e delle schede singole, su desktop e mobile.

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
