# Fit klub Kobeřice

Statický web (HTML, CSS, JS) bez build kroku.

## Struktura
- `index.html` – celá stránka
- `css/style.css` – styly
- `js/main.js` – slideshow, galerie, menu
- `images/` – fotky

## Nahrání na GitHub
```bash
git init
git add .
git commit -m "První verze webu"
git branch -M main
git remote add origin https://github.com/UZIVATEL/NAZEV-REPOZITARE.git
git push -u origin main
```

## Zapnutí GitHub Pages (až bude potřeba)
Repozitář → Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`.

## Úpravy
- Fotky ve hlavní slideshow: sekce `.hero-slides` v `index.html`
- Ceny a kontakty: přímo v `index.html`
- Barvy: proměnné na začátku `css/style.css`
