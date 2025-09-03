# PARALLEL .stock — PWA v6.6.2

App statique (HTML/JS/CSS) prête pour **HTTPS** + **PWA** (installable, offline).

## Déploiement — GitHub Pages (recommandé si tu veux des intégrations GitHub)

1. Crée un dépôt sur GitHub (ex: `parallel-stock`).
2. Ajoute **tous les fichiers** de ce dossier à la racine (`index.html`, `manifest.webmanifest`, `service-worker.js`, `icons/`, `.nojekyll`).
3. *Settings → Pages* : **Source = Deploy from a branch**, sélectionne **main / root**.
4. Attends 1–2 min, puis ouvre : `https://<ton-user>.github.io/<repo>/`
5. Sur iPhone, ouvre dans **Safari** puis **Partager → Ajouter à l’écran d’accueil**.

> HTTPS est automatique sur GitHub Pages → la caméra fonctionne.

## Déploiement — Netlify (super simple)

- Va sur https://app.netlify.com/drop et glisse **le dossier complet**.
- Ou connecte ton repo GitHub → déploiement auto à chaque _push_.

## Notes

- Le **Service Worker** met l’app en **offline-first** après la première visite.
- Le scan caméra fonctionne en **HTTPS** (ou `localhost`). 
- Les données sont stockées **localement** dans le navigateur.

