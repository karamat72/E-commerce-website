# React Store — Premium Storefront

A responsive frontend-only e-commerce demo built with React, Vite, Tailwind CSS, React Router, and Lucide icons.

## Included pages
- Home: hero, featured products, category highlights, brand story, service highlights
- Shop: search, category filters, sorting by price/name
- Product details: image, description, quantity selector, add to cart
- Cart: update quantity, remove products, subtotal
- Checkout: validated customer/delivery form, order summary, demo order confirmation
- About, Contact (validated frontend-only form), and 404 page

## Run locally
1. Install Node.js (LTS) if it is not already installed.
2. Extract this ZIP.
3. Open the extracted `react-store-premium` folder in VS Code.
4. Open Terminal → New Terminal and run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the exact `Local:` URL shown in the terminal (usually `http://localhost:5173/`).

## Notes
- Product data is in `src/data/products.js`.
- Cart state persists with `localStorage`.
- Demo order details are held in `sessionStorage` for the confirmation screen.
- No real payment is processed and no real order or contact message is sent.
- Product photography loads from Unsplash URLs, so internet access is needed for the images.
- Contact email and phone are placeholders; replace them with your own details if desired.
