# DigiTools

A modern, responsive digital tools marketplace built with **React**,
**Vite**, **Tailwind CSS**, and **DaisyUI**.

The project presents a premium digital-tools landing page where users
can explore products, view pricing and features, and add products to a
shopping cart.

## Features

-   Responsive modern landing page
-   Hero section with promotional content
-   Animated/gradient visual elements
-   Premium Digital Tools product section
-   Dynamic product cards rendered from JSON data
-   Product badges such as **Best Seller**, **Popular**, and **New**
-   Product pricing with monthly and one-time billing options
-   Feature lists for each product
-   Add-to-cart functionality
-   Cart section displaying selected products
-   Remove items from the cart
-   Dynamic cart total
-   Reusable React components
-   Tailwind CSS utility-based styling
-   DaisyUI theme and semantic color tokens
-   Responsive layout for desktop and mobile screens

## Tech Stack

-   **React** --- UI development and component-based architecture
-   **Vite** --- Development server and build tooling
-   **Tailwind CSS** --- Utility-first styling
-   **DaisyUI** --- UI components and theme utilities
-   **JavaScript** --- Application logic
-   **JSON** --- Product data source

## Project Structure

``` text
src/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Stats/
│   ├── Products/
│   ├── ProductCard/
│   ├── Cart/
│   ├── Pricing/
│   └── Footer/
├── App.jsx
├── main.jsx
└── index.css

public/
└── products.json
```

> The exact component/folder names may vary depending on the final
> implementation.

## Product Data

The product cards are designed to be data-driven rather than hardcoded.

Each product can contain information such as:

``` json
{
  "id": 1,
  "title": "AI Writing Pro",
  "description": "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
  "price": 29,
  "billing": "Mo",
  "badge": "Best Seller",
  "features": [
    "Unlimited AI generations",
    "50+ writing templates",
    "Grammar checker"
  ],
  "buttonText": "Buy Now"
}
```

This makes it easy to add, remove, or update products without changing
the card component.

## Installation

Clone the repository:

``` bash
git clone <your-repository-url>
```

Move into the project directory:

``` bash
cd <project-folder>
```

Install dependencies:

``` bash
npm install
```

Start the development server:

``` bash
npm run dev
```

Open the local development URL shown by Vite in your browser.

## Build for Production

Create a production build:

``` bash
npm run build
```

Preview the production build locally:

``` bash
npm run preview
```

The production files are generated in the `dist` directory.

## Design

The interface follows a clean SaaS/marketplace visual style with:

-   Purple-to-violet gradient branding
-   Soft background colors
-   Rounded cards and buttons
-   Large, clear typography
-   Semantic DaisyUI theme colors
-   Consistent spacing and responsive layouts
-   Minimal, premium visual hierarchy

The primary brand gradient is:

``` css
linear-gradient(89.15deg, #4f39f6 -31.72%, #9514fa 99.89%)
```

## Cart Flow

The basic user flow is:

1.  Browse available digital tools.
2.  Select a product.
3.  Add the product to the cart.
4.  Review selected products.
5.  Remove products when needed.
6.  View the updated total.

The cart UI is designed so that the product data and cart state can be
extended later for checkout, authentication, payments, or persistent
storage.

## Future Improvements

Possible future enhancements include:

-   LocalStorage cart persistence
-   Product search and filtering
-   Product detail pages
-   Checkout integration
-   Stripe payment integration
-   User authentication
-   Order history
-   Product categories
-   Backend/API integration
-   Database integration
-   Dark mode
-   Product animations and micro-interactions

## License

This project is for learning and development purposes. Add your
preferred license here if the project will be distributed publicly.
