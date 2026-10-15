# Versione 6 — Manifesti, ricerca e navigazione

- La voce principale passa da «Manifesto» a «Manifesti» e apre la pagina archivio `/manifesti/`.
- La pagina archivio raccoglie automaticamente gli articoli pubblicati con categoria `Manifesto`, mostrando riquadri verticali con copertine, titoli e descrizioni.
- La relazione e La Piuma nella Home sono schede cliccabili; la copertina della relazione è usata come immagine di sfondo.
- Intestazione: icona Home, pulsante Manifesti con icona documenti, icona dei luoghi di rilascio, ricerca predittiva, Social e Contatti più discreti.
- La ricerca offre suggerimenti per le sezioni e per gli articoli, anche con parole parziali e accenti ignorati.
- Gli aggiornamenti sono raggiungibili dal piè di pagina. È presente un avviso discreto sullo stato di sviluppo.
- La dichiarazione «Gratis. Senza abbonamento. Senza vendita.» è separata dalle schede e accompagnata dall'immagine della spada fornita.
- I collegamenti agli articoli vengono generati a partire dagli ID reali della raccolta Astro, per mantenere allineate le destinazioni e le pagine generate.

## Verifica

Controlli statici eseguiti su CSS, JavaScript del layout, riferimenti agli asset e collegamenti interni dichiarati. La build Astro completa non è stata eseguibile in questo ambiente perché il registry npm non era raggiungibile (`EAI_AGAIN registry.npmjs.org`).
