// src/pages/Men.jsx
import React from "react";

// ✅ Product Card Component
function ProductCard({ image, title, description, linkText }) {
  return (
    <div className="flex flex-col items-start p-4">
      <div className="overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-[350px] transform transition duration-300 hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <a
          href="#"
          className="mt-2 inline-block text-sm font-semibold underline underline-offset-4 hover:text-black"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
}

// ✅ Sign Up Banner
function SignUpBanner() {
  return (
    <div className="bg-green-700 text-white py-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-0">
        JOIN ADIDAS AND GET 10% OFF
      </h2>
      <button className="bg-white text-black px-6 py-3 font-semibold rounded-md shadow hover:bg-gray-200 transition">
        SIGN UP FOR FREE →
      </button>
    </div>
  );
}

// ✅ Footer
function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-sm">
        {/* PRODUCTS */}
        <div>
          <h3 className="font-bold mb-3">PRODUCTS</h3>
          <ul className="space-y-2">
            <li>Footwear</li>
            <li>Clothing</li>
            <li>Accessories</li>
            <li>Outlet-Sale</li>
            <li>New Arrivals</li>
            <li>Flat 50% Off!</li>
          </ul>
        </div>

        {/* SPORTS */}
        <div>
          <h3 className="font-bold mb-3">Sports</h3>
          <ul className="space-y-2">
            <li>Cricket</li>
            <li>Running</li>
            <li>Football</li>
            <li>Gym/Training</li>
            <li>Tennis</li>
            <li>Hiking & Outdoor</li>
            <li>Basketball</li>
            <li>Swimming</li>
            <li>Skateboarding</li>
          </ul>
        </div>

        {/* COLLECTIONS */}
        <div>
          <h3 className="font-bold mb-3">COLLECTIONS</h3>
          <ul className="space-y-2">
            <li>Ultraboost</li>
            <li>Superstar</li>
            <li>NMD</li>
            <li>Stan Smith</li>
            <li>Sustainability</li>
            <li>Predator</li>
            <li>Parley</li>
            <li>Adicolor</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="font-bold mb-3">SUPPORT</h3>
          <ul className="space-y-2">
            <li>Help</li>
            <li>UNiDAYS</li>
            <li>Customer Services</li>
            <li>Returns & Exchanges</li>
            <li>Shipping</li>
            <li>Order Tracker</li>
            <li>Store Finder</li>
            <li>adiClub</li>
            <li>Terms & Conditions</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* COMPANY INFO */}
        <div>
          <h3 className="font-bold mb-3">COMPANY INFO</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>adidas stories</li>
            <li>adidas Apps</li>
            <li>Entity Details</li>
            <li>Press</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* FOLLOW US */}
        <div>
          <h3 className="font-bold mb-3">FOLLOW US</h3>
          <div className="flex gap-3">
            <a href="#">
              <img src="/icons/instagram.svg" alt="Instagram" className="w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ✅ Men Page
export default function Women() {
  const products = [
    {
      image: "public/images/shoe1.avif",
      title: "Superstar",
      description: "The street's most iconic silhouette.",
      linkText: "Shop now",
    },
    {
      image: "public/images/shoe2.jpg",
      title: "adidas Originals by Wales Bonner",
      description: "adidas Originals by Wales Bonner",
      linkText: "Shop now",
    },
    {
      image: "public/images/shoe3.avif",
      title: "ADIDAS Z.N.E.",
      description: "Blending sport, comfort and style, effortlessly.",
      linkText: "Shop now",
    },
    {
      image: "public/images/shoe4.avif",
      title: "ADIZERO EVO SL",
      description: "Feel fast. In all aspects of life.",
      linkText: "Shop now",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <img
          src="/images/womenShoes.jpg"
          alt="Men's Collection"
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-1/4 left-16 max-w-md">
          <div className="backdrop-blur-md bg-white/60 p-4 rounded-md shadow-lg">
            <h2 className="text-2xl font-extrabold tracking-wide">
              FLAT 50% OFF
            </h2>
            <p className="mt-2 text-gray-800 text-lg">
              Gear Up. Your favorite styles are now half off.
            </p>
          </div>
          <button
            onClick={() =>
              document
                .getElementById("products-section")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="mt-6 flex items-center gap-2 bg-white/80 px-6 py-3 font-bold shadow-lg rounded-md transition-all duration-200 hover:bg-black hover:text-white"
          >
            SHOP NOW →
          </button>
        </div>
      </div>

      {/* Product Showcase Section */}
      <div id="products-section" className="container mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Men's Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <ProductCard key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Sign Up Banner */}
      <SignUpBanner />

      {/* Footer */}
      <Footer />
    </div>
  );
}
