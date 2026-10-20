import { Link, NavLink } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const Navbar = () => {
  const links = [
    { path: "/", name: "Home" },
    { path: "/shop", name: "Shop" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <h1 className="text-xl font-bold tracking-widest">FORMA</h1>
          <p className="text-[9px] uppercase tracking-widest text-gray-500">
            Considered living
          </p>
        </Link>

        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm ${isActive ? "text-black font-bold" : "text-gray-500"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/signin" className="border px-4 py-2 rounded-full text-sm">
            Sign In
          </Link>
          <Link to="/signup" className="bg-black text-white px-4 py-2 rounded-full text-sm">
            Sign Up
          </Link>
          <Link to="/cart">
            <ShoppingBag size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
