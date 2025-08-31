# 🛒 3D Product Shop

A modern **3D Product Shop** built with **Next.js, Three.js, Tailwind CSS, and Redux Toolkit**.
This project allows users to explore products in **3D view**, add them to the cart, and leave reviews with ratings.

## ⚡ Installation & Setup

Follow these steps to set up and run the 3D Product Shop locally on your machine.

### 1. Clone the Repository

```bash
# Clone this repository
$ git clone https://github.com/rasel739/product-viewer-3d.git

# Go into the repository
$ cd product-viewer-3d

# Install dependencies
$ yarn install

# Run the app
$ yarn dev
```

## 🚀 Features

- 🌐 **Next.js 15+ App Router** with TypeScript
- 🎨 **Tailwind CSS** for styling (Dark/Light mode ready)
- 🛍️ **3D Product Viewer** using **Three.js**
- ⚡ **Redux Toolkit** for global state management
- ⭐ **Product Reviews & Ratings**
- 📦 **Cart Management**
- 🖼️ **Beautiful Loading & Not Found Pages**
- 🔄 Fully responsive & mobile friendly

---

## 📂 Project Structure

```
3D-Product-Shop/
├── app/ # Next.js App Router pages
│ ├── layout.tsx # Main layout component
│ ├── page.tsx # Home page (3D product shop)
│ ├── loading.tsx # Custom loading spinner page
│ ├── not-found.tsx # 404 Not Found page
│
├── components/ # Reusable React components
│ ├── main/ # Main page components
│ │ ├── Canvas3D.tsx # Main 3D canvas component
│ │ ├── ProductViewer.tsx # Dynamically loads GLB models
│ │ ├── ProductNavigation.tsx # Prev/Next navigation with dots
│ │ ├── ProductInfo.tsx # Product info card
│ │ ├── QuantitySelector.tsx # Quantity selector
│ │ └── ColorPicker.tsx # Color selection for products
│ │
│ └── sub/ # Subcomponents & smaller widgets
│ ├── ActionButtons.tsx # Cart/Wishlist buttons
│ ├── SearchQuery.tsx # Product search input with results
│ └── UserRating.tsx # Star ratings component
│
├── constants/ # Static data
│ └── products.ts # Product data array with colors, prices, reviews
│
├── lib/ # Helper libraries & utilities
│ └── modelCache.ts # Preload & cache 3D GLB models
│
├── redux/ # Redux Toolkit slices
│ ├── store.ts # Redux store setup
│ ├── productSlice.ts # Active product, selected color
│ └── reviewSlice.ts # Product reviews and ratings
│
├── public/ # Publicly accessible assets
│ ├── models/ # GLB 3D models
│ │ ├── car.glb
│ │ ├── laptop.glb
│ │ └── ...other models
│ ├── images/ # Static images for products or UI
│ └── screenshots/ # Screenshots or GIFs for README/demo
│
├── styles/ # Global styles if needed
│ └── globals.css
│
├── next.config.js # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
├── package.json # NPM dependencies & scripts
└── README.md # Project documentation
```

### 💡 Notes

1. **3D Models**

   - All `.glb` files are placed under `/public/models`.
   - Preloaded using `modelCache.ts` to improve performance.

2. **State Management**

   - `productSlice.ts` → Tracks active product index, selected color.
   - `reviewSlice.ts` → Tracks product reviews & calculates average rating.
   - `cartSlice.ts` (optional) → Tracks cart items.

3. **Components**

   - `main/` → Components directly used in the main 3D shop page.
   - `sub/` → Smaller reusable components like search, rating stars, buttons.

4. **Pages**
   - `page.tsx` → Home page with product gallery, 3D viewer, and product info.
   - `loading.tsx` → Custom animated loader while 3D models are preloading.
   - `not-found.tsx` → Beautiful 404 page.

---

This structure is **scalable and modular**, making it easy to add new features like checkout, authentication, or multi-language support.

## License

MIT
