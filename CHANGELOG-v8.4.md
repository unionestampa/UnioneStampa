# Versione 8.4 — sicurezza e pulizia editoriale

- Rimosso dalla raccolta editoriale pubblica l'articolo “Come pubblicare un nuovo articolo”. La guida di redazione è conservata nel repository in `docs/modello-editoriale.md`, fuori dalle pagine generate dal sito.
- Aggiunta una Content Security Policy tramite meta tag, limitando gli script inline alle esigenze attuali e restringendo le origini consentite per stili, font, immagini, connessioni e iframe.
- Impostata una politica referrer esplicita.
- Ridotti i permessi del token GitHub Actions: sola lettura per il job di build e permessi Pages/OIDC nel solo job di pubblicazione.
- Aggiunto un controllo automatico per alcuni pattern comuni di credenziali nei file testuali prima della build.
- Aggiornato `.gitignore` per evitare di aggiungere accidentalmente file di ambiente e credenziali locali.
- Aggiunto `SECURITY.md` con pratiche di manutenzione e segnalazione.
- Disabilitati il menu contestuale sulle immagini/opere e il trascinamento diretto delle immagini, senza bloccare il menu contestuale del testo normale.
- Nota: le protezioni del browser non impediscono a un visitatore determinato di recuperare asset pubblici o fare screenshot. GitHub Pages non consente di configurare liberamente tutte le intestazioni HTTP di sicurezza; la CSP via meta è un livello aggiuntivo, non un sostituto completo degli header server-side.
