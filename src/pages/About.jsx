import { ArrowRight, Heart, Leaf, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function About() {
  return (
    <div className="bg-ivory">
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-2 md:items-center lg:px-8 lg:py-20">
        <div>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[.22em] text-bronze">A little about us</p>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-.06em] text-ink sm:text-6xl">Less clutter.<br/><span className="font-normal italic text-bronze">More meaning.</span></h1>
          <p className="mt-6 max-w-lg text-sm leading-7 text-muted">React Store is a concept store built around a simple idea: everyday objects should be useful, thoughtfully designed, and a pleasure to live with.</p>
          <p className="mt-4 max-w-lg text-sm leading-7 text-muted">We bring together lifestyle, home, accessories, and tech essentials in one calm, easy-to-browse collection. This project is a frontend demo created to explore a complete modern shopping experience.</p>
          <Link to="/shop" className="mt-7 inline-block"><Button>Explore the collection <ArrowRight size={16}/></Button></Link>
        </div>
        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85" alt="Warm and thoughtfully designed living space" className="aspect-[4/4.3] w-full rounded-[2rem] object-cover"/>
      </section>
      <section className="bg-white py-14 lg:py-20"><div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">{[{icon:Heart,title:"Made for real life",text:"Useful things should work beautifully in everyday routines."},{icon:Leaf,title:"A considered edit",text:"We favour a focused collection over endless choice."},{icon:Sparkles,title:"Details matter",text:"A clear layout and thoughtful details make shopping feel easier."}].map(({icon:Icon,title,text})=><div key={title} className="rounded-2xl border border-ink/10 p-6"><span className="grid h-11 w-11 place-items-center rounded-full bg-ivory text-ink"><Icon size={19}/></span><h2 className="mt-5 text-lg font-semibold text-ink">{title}</h2><p className="mt-2 text-sm leading-7 text-muted">{text}</p></div>)}</div></section>
    </div>
  );
}
