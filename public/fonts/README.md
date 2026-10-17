# Font del sito — Unione Stampa

Questa cartella raccoglie i font del progetto, divisi per funzione. Al momento il sito carica Bebas Neue, Lato e Playfair Display da Google Fonts: **non sono presenti file font locali**. Le sottocartelle sono predisposte per aggiungerli in futuro.

## Cartelle
- `titoli-display/` — Bebas Neue: titoli grandi e testate.
- `testi-editoriali/` — Playfair Display: titoli di articoli, citazioni e schede editoriali.
- `testi-interfaccia/` — Lato: paragrafi, navigazione e controlli.

## Come aggiungere un font
1. Verificare la licenza e usare file web `.woff2` ove disponibili.
2. Inserire i file nella cartella corrispondente; aggiungere una sottocartella con nome descrittivo se serve un nuovo ruolo.
3. Definire il font con `@font-face` in `src/styles/global.css`.
4. Applicarlo tramite `font-family` alle regole necessarie.
5. Se il font è locale, rimuovere il relativo caricamento esterno da `src/layouts/Layout.astro` quando non serve più e aggiornare la Content Security Policy in quella stessa pagina.

Non inserire font installati solo sul computer: per essere visibili a tutti i visitatori devono essere inclusi nel progetto o caricati da un servizio esterno.
