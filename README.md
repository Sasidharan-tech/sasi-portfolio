# Sasidharan M — 3D Artist Portfolio

A cinematic, responsive React portfolio for showcasing 3D modelling and VFX work. The project gallery currently features Sasidharan's coffee cup, wooden table, and dragon sculpt renders. The showreel panel remains a replaceable placeholder until a video is available.

## Run locally

```bash
npm install
npm run dev
```

For a production check:

```bash
npm run build
npm run preview
```

## Deploy free with GitHub Pages

1. Create a new GitHub repository (for example `sasi-portfolio`). Keep it public if you want the simplest Pages setup.
2. In this folder, initialize Git and push the source:

   ```bash
   git init
   git add .
   git commit -m "Create portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-GITHUB-USERNAME/YOUR-REPOSITORY-NAME.git
   git push -u origin main
   ```

3. `vite.config.js` automatically uses the repository name from `GITHUB_REPOSITORY` during the GitHub Actions build. If you build with another CI system, set `GITHUB_REPOSITORY=YOUR-GITHUB-USERNAME/YOUR-REPOSITORY-NAME`, or replace the fallback repository name in that file.
4. In GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.
5. The workflow at `.github/workflows/deploy.yml` installs dependencies, builds `dist`, and deploys it. Wait for the green workflow run under the **Actions** tab.
6. Your site will be available at `https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY-NAME/`.

Every push to `main` redeploys the site automatically. GitHub Pages hosting is free and does not require a credit card.

## Updating the portfolio

- Replace the project images in `public/images/` with optimized JPG/WebP files and update the matching paths in `src/data/projects.js`.
- Add or edit project title, category, year, description, and software in `src/data/projects.js`.
- Replace `public/resume.pdf` with your current PDF using the same filename.
- Replace `public/images/showreel-placeholder.svg` and the showreel placeholder in `src/App.jsx` when you are ready to link your YouTube or Vimeo video.
- Update the contact links in `src/App.jsx` when you supply professional profile URLs.

The contact area uses a normal `mailto:` link because GitHub Pages has no backend for a form. No fake form submission is included.
