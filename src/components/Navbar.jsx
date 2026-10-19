
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const navLinkClass = ({ isActive }) =>
    `text-sm transition-colors duration-200 ${
      isActive
        ? "font-semibold text-[#B98250]"
        : "text-[#52615A] hover:text-[#B98250]"
    }`;

  return (
    <>
      <div className="bg-[#172A25] px-4 py-2 text-center text-xs tracking-wide text-white sm:text-sm">
        Thoughtful design. Timeless living.
        <span className="ml-2 hidden text-[#D9B48C] sm:inline">
          Discover your next favourite.
        </span>
      </div>

      <header className="sticky top-0 z-50 border-b border-[#E8E2D8] bg-[#F7F5F0]/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#172A25] text-lg font-semibold text-[#D9B48C] transition-transform group-hover:rotate-6">
              F.
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-[0.22em] text-[#172A25]">
                FORMA
              </h1>
              <p className="mt-0.5 text-[9px] uppercase tracking-[0.22em] text-[#8A7968]">
                Considered living
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
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
            <Link
              to="/cart"
              aria-label="Shopping cart"
              className="flex h-11 items-center gap-2 rounded-full border border-[#DCD5C9] px-4 text-[#172A25] transition hover:border-[#B98250] hover:bg-[#EEE8DE]"
            >
              <ShoppingBag size={19} strokeWidth={1.7} />
              <span className="hidden text-sm font-medium sm:inline">
                Your Bag
              </span>
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DCD5C9] text-[#172A25] md:hidden"
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-[#E8E2D8] bg-[#F7F5F0] px-6 py-4 md:hidden">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between border-b border-[#E8E2D8] py-4 text-sm ${
                    isActive
                      ? "font-semibold text-[#B98250]"
                      : "text-[#172A25]"
                  }`
                }
              >
                {link.name}
                <ArrowUpRight size={16} />
              </NavLink>
            ))}
          </nav>
        )}
      </header>
    </>
  );
};

export default Navbar;
