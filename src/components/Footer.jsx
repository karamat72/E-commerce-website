
import { Link } from "react-router-dom";
import {
  Facebook,
  Youtube,
  Instagram,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/",
    },
  ];

  return (
    <footer className="mt-16 bg-[#172A25] text-[#F7F5F0]">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-14 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#B98250] text-xl font-semibold text-[#D9B48C]">
                F.
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-[0.2em]">
                  FORMA
                </h2>
                <p className="mt-1 text-[9px] uppercase tracking-[0.22em] text-[#C7B8A5]">
                  Considered living
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-[#C8D0CA]">
              Thoughtfully selected essentials for a more beautiful,
              comfortable and considered everyday life.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ name, icon: Icon, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[#E4C5A4] transition duration-300 hover:-translate-y-1 hover:border-[#B98250] hover:bg-[#B98250] hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#D9B48C]">
              Explore
            </h3>
            <ul className="space-y-4 text-sm text-[#C8D0CA]">
              <li><Link className="transition hover:text-white" to="/">Home</Link></li>
              <li><Link className="transition hover:text-white" to="/shop">Shop All</Link></li>
              <li><Link className="transition hover:text-white" to="/about">Our Story</Link></li>
              <li><Link className="transition hover:text-white" to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Customer care */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#D9B48C]">
              Customer Care
            </h3>
            <ul className="space-y-4 text-sm text-[#C8D0CA]">
              <li>
                <Link className="transition hover:text-white" to="/cart">
                  Your Shopping Bag
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" to="/contact">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" to="/contact">
                  Shipping Questions
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-white" to="/contact">
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-[#D9B48C]">
              Get in Touch
            </h3>

            <ul className="space-y-5 text-sm text-[#C8D0CA]">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-[#D9B48C]" />
                <Link to="/contact" className="transition hover:text-white">
                  Contact our team
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-[#D9B48C]" />
                <Link to="/contact" className="transition hover:text-white">
                  Customer assistance
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#D9B48C]" />
                <span>Here to help, wherever you are.</span>
              </li>
            </ul>

            <Link
              to="/shop"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#D9B48C] transition hover:text-white"
            >
              Discover the collection <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-7">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-[#C8D0CA] sm:flex-row sm:text-left">
            <p>© {year} FORMA. All rights reserved.</p>
            <p className="tracking-wide">
              Made with care. Designed to last.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
