🛍️ 3D Product Shop

A modern 3D Product Shop built with Next.js, Tailwind CSS, Three.js, and Redux Toolkit.
Users can explore products in interactive 3D views, search through items, view ratings & reviews, and manage their cart.

🚀 Features

🌐 Next.js – App Router with optimized routing

🎨 Tailwind CSS – Modern responsive design

🌀 Framer Motion – Smooth animations

🛠 Redux Toolkit – State management for products, reviews & cart

🔍 Smart Search – Real-time product search with suggestions

⭐ Reviews & Ratings – Product ratings with review management

🎮 Three.js – 3D product visualization (interactive models)

📱 Responsive – Mobile-friendly UI

📂 Project Structure
├── app/
│ ├── layout.tsx # Root layout
│ ├── page.tsx # Homepage
│ ├── not-found.tsx # Custom 404 page
│
├── components/
│ ├── SearchQuery.tsx # Search bar with dropdown
│ ├── ProductCard.tsx # Product display card
│ ├── Rating.tsx # Average rating component
│ └── Loader.tsx # Loading screen
│
├── redux/
│ ├── store.ts # Redux store
│ ├── slices/
│ │ ├── productSlice.ts
│ │ ├── reviewSlice.ts
│ │ └── cartSlice.ts
│
├── constants/
│ ├── products.ts # Dummy product data
│
├── public/
│ └── models/ # 3D product models
│
├── styles/
│ └── globals.css # Tailwind global styles
│
└── README.md

⚡ Tech Stack

Next.js – React Framework

Tailwind CSS – Styling

Framer Motion – Animations

Redux Toolkit – State Management

Three.js – 3D Rendering

🛠 Installation & Setup

# 1️⃣ Clone repo

git clone https://github.com/rasel739/product-viewer-3d.git

# 2️⃣ Go to project

cd product-viewer-3d

# 3️⃣ Install dependencies

yarn install

# 4️⃣ Run development server

yarn dev

# Visit: http://localhost:3000

🧩 Usage

Browse available products

Search products using the search bar

View products in 3D interactive view

Add ratings & reviews

Manage products with Redux state

📝 License

This project is licensed under the MIT License.
Feel free to use & modify for your own projects
