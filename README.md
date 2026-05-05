# Phoenix — Fixed Star Comics

A Vite + React ecommerce storefront for Fixed Star Comics and the Phoenix Rebirth universe.

## Pages

- Home
- Shop
- Product detail pages
- Collections
- Universe
- About
- Contact
- Cart
- Account placeholder

## Local setup

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Tests

```bash
npm test
```

## Required public assets

Upload these files into the `/public` folder before final production deployment:

```txt
public/background.png
public/fsclogo.png
```

The React app is already configured to use:

```js
/background.png
/fsclogo.png
```

## Deploying to Vercel

1. Go to Vercel.
2. Import the GitHub repo: `am225723/phoenix`.
3. Framework preset: `Vite`.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

The included `vercel.json` rewrites all routes back to `index.html`, so direct links like `/shop`, `/collections`, and `/product/phoenix-tarot-major-arcana` work correctly.

## Ecommerce integration notes

The checkout button is currently a placeholder. Connect it to one of these when ready:

- Shopify Buy Button / Storefront API
- Stripe Checkout
- Gumroad
- Lemon Squeezy
- WooCommerce API

Product data currently lives in `src/data.js`.
