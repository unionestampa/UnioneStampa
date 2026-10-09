# Versione 7 — In evidenza a tendina

- Trasformata la sezione In evidenza in un pannello apribile e richiudibile.
- Da chiuso rimane una linguetta compatta nell’angolo inferiore destro, con contatore dei tre suggerimenti e impulso visivo discreto.
- Da aperto si allarga per lasciare più spazio a titoli, descrizioni e carosello.
- Aggiunte etichette accessibili, apertura da tastiera, adattamento agli schermi piccoli e rispetto delle preferenze di movimento ridotto.
- Il carosello si ferma durante l’interazione con il pannello e riparte quando il pannello è espanso e non è in uso.

## Verifiche

- Superato il controllo sintattico Node.js dello script di interazione.
- Verificati staticamente i riferimenti al pulsante, al pannello, agli attributi ARIA, ai tre comandi del carosello e alle immagini utilizzate.
- La build Astro non è stata eseguita in questo ambiente perché le dipendenze non sono installate e l’accesso al registro npm non era disponibile.
