# SreytouchLang.github.io

This repository now serves the live portfolio at `https://sreytouchlang.github.io/`.

## Structure

- `index.html` and `assets/`: production build deployed by GitHub Pages
- `404.html`: fallback copy for direct page loads
- `portfolio-source/`: editable Vite/React source for the current portfolio

## Update workflow

1. Make changes in `portfolio-source/`
2. Run `npm install` if needed
3. Run `npm run build`
4. Copy the new `portfolio-source/dist/` output into the repository root before pushing
