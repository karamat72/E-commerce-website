import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <div className="grid min-h-[55vh] place-items-center bg-ivory px-4 py-16 text-center">
      <div><p className="text-[10px] font-bold uppercase tracking-[.25em] text-bronze">404 / Page not found</p><h1 className="mt-4 text-6xl font-semibold tracking-[-.06em] text-ink sm:text-8xl">Oops<span className="text-bronze">.</span></h1><p className="mx-auto mt-4 max-w-md text-sm leading-7 text-muted">Looks like this page took a different turn. Let’s get you back to the good stuff.</p><Link to="/" className="mt-7 inline-block"><Button><ArrowLeft size={16}/> Back to home</Button></Link></div>
    </div>
  );
}
