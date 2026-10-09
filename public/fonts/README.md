FONT DEL SITO — UNIONE STAMPA

I font sono caricati tramite Google Fonts nel <head> di src/layouts/Layout.astro.
La cartella public/fonts è predisposta per ospitare in futuro le versioni locali .woff2, così da non dipendere da un servizio esterno.

Uso attuale:
- Lato: testo corrente, paragrafi, navigazione e controlli.
- Bebas Neue: titoli principali e titoloni.
- Playfair Display: titoli editoriali, notizie e dettagli dal tono più letterario.

Per passare ai font locali, scaricare i file WOFF2 con licenza OFL dai repository ufficiali Google Fonts, inserirli qui e sostituire il link Google Fonts con dichiarazioni CSS @font-face in src/styles/global.css.

Nota: i font installati sul computer dell'autore non vengono automaticamente caricati sul sito per gli altri visitatori; devono essere inclusi nel progetto oppure forniti da un servizio web.
