export interface Review {
  user: string;
  rating: number; // 1–5
  comment: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  modelPath: string;
  colors?: string[];
  reviews?: Review[];
}

export const products: Product[] = [
  {
    id: 1,
    title: 'Toyota Axio 2018',
    description: 'জ্বালানি সাশ্রয়ী, আরামদায়ক ও পরিবারের জন্য উপযুক্ত একটি গাড়ি।',
    price: '৳1,850,000',
    modelPath: '/models/car.glb',
    colors: ['#ffffff', '#000000', '#2d3436'],
    reviews: [
      { user: 'Rahim', rating: 5, comment: 'চালাতে খুবই আরামদায়ক এবং ফুয়েল এফিসিয়েন্ট।' },
      { user: 'Tania', rating: 4, comment: 'ভালো মানের গাড়ি, তবে পার্টস একটু দামী।' },
    ],
  },
  {
    id: 2,
    title: 'Walton Laptop WX-21',
    description: 'বাংলাদেশে তৈরি উচ্চ মানের ল্যাপটপ, স্টুডেন্ট ও অফিস কাজের জন্য পারফেক্ট।',
    price: '৳65,000',
    modelPath: '/models/laptop.glb',
    colors: ['#ffffff', '#000000', '#34495e'],
    reviews: [
      { user: 'Sabbir', rating: 5, comment: 'গেমিং বাদে সব কাজের জন্য দুর্দান্ত।' },
      { user: 'Mitu', rating: 4, comment: 'ব্যাটারি ব্যাকআপ আরও ভালো হলে ভালো হতো।' },
    ],
  },
  {
    id: 3,
    title: 'iPhone 17 Pro Max',
    description: 'সর্বাধুনিক ফিচার সহ একটি প্রিমিয়াম স্মার্টফোন।',
    price: '৳220,000',
    modelPath: '/models/iphone.glb',
    colors: ['#ffffff', '#000000', '#c0c0c0'],
    reviews: [
      { user: 'Shakil', rating: 5, comment: 'ক্যামেরা ও পারফরম্যান্স অসাধারণ।' },
      { user: 'Farhana', rating: 4, comment: 'খুব ভালো ফোন, তবে দাম একটু বেশি।' },
    ],
  },
  {
    id: 4,
    title: 'Aarong Premium Jacket',
    description: 'শীতকালে আরামদায়ক এবং স্টাইলিশ জ্যাকেট।',
    price: '৳4,500',
    modelPath: '/models/jacket.glb',
    colors: ['#000000', '#7f8c8d', '#b2bec3'],
    reviews: [
      { user: 'Rafi', rating: 5, comment: 'একদম পারফেক্ট সাইজ, অনেক গরম রাখে।' },
      { user: 'Nabila', rating: 4, comment: 'ক্লথ কোয়ালিটি ভালো, তবে দাম একটু বেশি।' },
    ],
  },
  {
    id: 5,
    title: 'Hatil Wooden Chair',
    description: 'টেকসই কাঠের তৈরি আধুনিক ডিজাইনের চেয়ার।',
    price: '৳8,200',
    modelPath: '/models/chair.glb',
    colors: ['#8d6e63', '#3e2723', '#ffffff'],
    reviews: [
      { user: 'Imran', rating: 5, comment: 'কাঠের মান অনেক ভালো। লং লাস্টিং হবে।' },
      { user: 'Joya', rating: 4, comment: 'ডিজাইন সুন্দর কিন্তু একটু ভারী।' },
    ],
  },
];
