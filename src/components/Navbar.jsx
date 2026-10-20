import { Link, NavLink } from "react-router-dom";
import { LogIn, LogOut, ShoppingBag } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout, loggingOut } = useAuth();

  const links = [
    { path: "/", name: "Home" },
    { path: "/shop", name: "Shop" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
  ];

  const navLinkClass = ({ isActive }) =>
    `text-sm ${isActive ? "text-black font-medium" : "text-gray-500"}`;

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none">
          <h1 className="text-xl font-bold tracking-widest">FORMA</h1>
          <p className="text-[9px] uppercase tracking-[0.22em] text-[#8A7968]">
            Considered living
          </p>
        </Link>

        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={navLinkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm hidden sm:block">{user.email}</span>
              <button
                onClick={handleLogout}
                disabled={loggingOut}
                className="flex items-center gap-1.5 rounded-full border border-black px-3 py-2 text-sm"
              >
                <LogOut size={15} />
                {loggingOut ? "Logging out..." : "Logout"}
              </button>
              <Link to="/cart">
                <ShoppingBag size={20} />
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/signin"
                className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm border"
              >
                <LogIn size={16} />
                Sign In
              </Link>

              <Link
                to="/signup"
                className="flex items-center gap-1.5 rounded-full bg-black text-white px-4 py-2 text-sm"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
