import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white">
      <Link to="/" className="text-xl font-bold">
        My Store
      </Link>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/signin" className="hover:text-gray-300">Sign In</Link>
        <Link to="/signup" className="bg-white text-black px-4 py-1 rounded hover:bg-gray-200">Sign Up</Link>
      </div>
    </nav>
  );
}
