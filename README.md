# Dasunika Kumarawansha — Portfolio

A one-page, scrollable portfolio built with React + Vite, Tailwind CSS and Framer Motion.
The left sidebar is a scroll-spy nav — click any item and it smooth-scrolls to that section
and highlights automatically as you scroll.

## Project structure

```
portfolio/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── data.js              ← all your CV content lives here
│   └── components/
│       ├── Sidebar.jsx
│       ├── Hero.jsx
│       ├── SectionHeading.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── Education.jsx
│       ├── Activities.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
```

## 1. Install Node.js

You need Node.js 18 or newer. Check with:

```bash
node -v
```

If you don't have it, download it from https://nodejs.org.

## 2. Install dependencies

Unzip the project, open a terminal inside the `portfolio` folder, then run:

```bash
npm install
```

## 3. Run it locally

```bash
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`) in your browser.

## 4. Edit your content

Everything text-based — your name, roles, projects, skills, education, contact info — is in
**`src/data.js`**. You don't need to touch any component file to update your details; just
edit the arrays/objects in that one file.

To change colors or fonts, edit `tailwind.config.js` (see the `colors` and `fontFamily` keys).

## 5. Build for production

```bash
npm run build
```

This creates a `dist/` folder with the final static site.

## 6. Deploy it for free

**Vercel (easiest):**
1. Push this project to a GitHub repository.
2. Go to https://vercel.com, sign in with GitHub, click "New Project", and import the repo.
3. Vercel auto-detects Vite — click Deploy. Done, you get a live URL.

**Netlify:**
1. Push to GitHub.
2. Go to https://netlify.com → "Add new site" → "Import an existing project".
3. Build command: `npm run build`, publish directory: `dist`.

**GitHub Pages:**
1. `npm install --save-dev gh-pages`
2. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
3. Add `base: '/your-repo-name/'` to `vite.config.js`.
4. Run `npm run build && npm run deploy`.

## Notes

- The sidebar becomes a hamburger menu on mobile (below the `lg` breakpoint).
- Reduced-motion preferences are respected automatically.
- Update the resume-style project descriptions in `data.js` any time you finish a new project.
