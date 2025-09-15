import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo flex items-center">
            <img src="/images/nikelogo.png" alt="logo" className="h-12 cursor-pointer" />
          </div>

          {/* Menu */}
          <ul className="flex items-center gap-30 text-lg font-semibold text-gray-700">
            <li>
              <Link 
                to="/" 
                className="transition-colors duration-200 hover:text-red-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/men"
                className="transition-colors duration-200 hover:text-red-600"
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                to="/women"
                className="transition-colors duration-200 hover:text-red-600"
              >
                Women
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="transition-colors duration-200 hover:text-red-600"
              >
                About
              </Link>
            </li>
          </ul>

          {/* Login Button */}
          <Link 
            to="/login"
            className="rounded-full bg-red-600 px-6 py-2.5 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:bg-red-700 hover:shadow-lg"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
