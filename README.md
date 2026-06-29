# Maison Zarabi — Site

Landing page React/Vite pour Maison Zarabi (tapis berbères artisanaux).

## Lancer en local

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:5173`.

## Déployer sur GitHub Pages

Ce projet est déjà configuré pour se déployer automatiquement via **GitHub Actions** à chaque `push` sur la branche `main`.

### Étapes

1. **Créer le repo sur GitHub**
   - Va sur https://github.com/new
   - Nom du repo : `maison-zarabi`
   - Laisse-le public, ne coche aucune option (pas de README/gitignore), puis "Create repository"

2. **Pousser ce code vers le repo**

   Depuis ce dossier, dans un terminal :

   ```bash
   git init
   git add .
   git commit -m "Premier déploiement Maison Zarabi"
   git branch -M main
   git remote add origin https://github.com/TON-USERNAME/maison-zarabi.git
   git push -u origin main
   ```

   Remplace `TON-USERNAME` par ton nom d'utilisateur GitHub.

3. **Activer GitHub Pages**
   - Va dans le repo sur GitHub → **Settings** → **Pages**
   - Sous "Build and deployment" → Source, choisis **GitHub Actions**

4. **Attendre le déploiement**
   - Va dans l'onglet **Actions** du repo, le workflow "Deploy to GitHub Pages" va se lancer automatiquement
   - Une fois terminé (coche verte), ton site sera en ligne à :

   ```
   https://TON-USERNAME.github.io/maison-zarabi/
   ```

### Si tu changes le nom du repo

Le fichier `vite.config.js` contient cette ligne :

```js
base: "/maison-zarabi/",
```

Si ton repo s'appelle différemment, remplace `maison-zarabi` par le nom exact de ton repo, sinon les images/styles ne se chargeront pas correctement.

## Structure

- `src/MaisonZarabi.jsx` — le composant principal (toute la page)
- `src/main.jsx` — point d'entrée React
- `.github/workflows/deploy.yml` — déploiement automatique vers GitHub Pages
