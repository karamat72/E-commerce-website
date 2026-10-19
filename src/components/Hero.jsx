
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Truck,
  ShieldCheck,
  Leaf,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="forma-hero relative overflow-hidden">
      {/* Animated background decoration */}
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 sm:px-8 md:py-16 lg:grid-cols-2 lg:gap-8 lg:px-10 lg:py-16">
        {/* Left content */}
        <div className="hero-content">
          <div className="hero-label mb-7 inline-flex items-center gap-2 rounded-full border border-[#E7D9C7] bg-white/70 px-4 py-2">
            <Sparkles size={15} className="text-[#B98250]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#795A3D] sm:text-xs">
              Thoughtfully chosen, always
            </span>
          </div>

          <h1 className="hero-heading max-w-xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[82px]">
            <span className="block text-[#172A25]">
              Good things.
            </span>
            <span className="hero-gold block">
              Better living.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-[#68736D] sm:text-lg sm:leading-8">
            Everyday essentials, chosen for the way they look,
            feel, and fit into your life. Discover pieces worth
            keeping around.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              to="/shop"
              className="hero-button group inline-flex items-center gap-3 rounded-full bg-[#172A25] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#172A25]/10"
            >
              Shop Collection
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#42534A] transition-colors hover:text-[#B98250]"
            >
              Discover our story
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Store benefits */}
          <div className="mt-12 grid max-w-lg grid-cols-3 border-t border-[#E3DCCF] pt-6">
            <div className="pr-3">
              <Truck size={23} strokeWidth={1.5} className="mb-3 text-[#B98250]" />
              <p className="text-xs font-semibold text-[#172A25] sm:text-sm">
                Easy Shopping
              </p>
              <p className="mt-1 text-[10px] leading-4 text-[#7B827C] sm:text-xs">
                Simple ordering
              </p>
            </div>

            <div className="border-x border-[#E3DCCF] px-3 sm:px-5">
              <ShieldCheck size={23} strokeWidth={1.5} className="mb-3 text-[#B98250]" />
              <p className="text-xs font-semibold text-[#172A25] sm:text-sm">
                Secure Checkout
              </p>
              <p className="mt-1 text-[10px] leading-4 text-[#7B827C] sm:text-xs">
                Shop with confidence
              </p>
            </div>

            <div className="pl-3 sm:pl-5">
              <Leaf size={23} strokeWidth={1.5} className="mb-3 text-[#B98250]" />
              <p className="text-xs font-semibold text-[#172A25] sm:text-sm">
                Timeless Style
              </p>
              <p className="mt-1 text-[10px] leading-4 text-[#7B827C] sm:text-xs">
                Made for everyday
              </p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="hero-image-wrap relative mx-auto w-full max-w-2xl lg:ml-auto">
          <div className="hero-image-frame relative overflow-hidden rounded-[28px] bg-[#DDE2D8]">
            <img
              src="/images/forma-hero.png"
              alt="Elegant modern living room with a cream sofa and natural decor"
              className="hero-image h-[360px] w-full object-cover sm:h-[470px] lg:h-[590px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#172A25]/25 via-transparent to-white/5" />

            <div className="hero-image-card absolute bottom-5 left-5 right-5 rounded-2xl border border-white/60 bg-[#F7F5F0]/90 p-4 shadow-xl backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:min-w-[245px] sm:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9A754F]">
                The FORMA Edit
              </p>
              <p className="mt-2 text-lg font-semibold text-[#172A25]">
                Less, but better.
              </p>
              <p className="mt-1 text-xs text-[#69736C]">
                Thoughtful pieces for everyday living.
              </p>
            </div>
          </div>

          {/* Floating decorative element */}
          <div className="hero-floating absolute -right-3 -top-4 flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#E8D7C2] bg-[#F7F5F0] shadow-lg sm:-right-5 sm:-top-5 sm:h-[86px] sm:w-[86px]">
            <div className="text-center">
              <Leaf size={20} className="mx-auto text-[#B98250]" />
              <span className="mt-1 block text-[8px] font-bold uppercase tracking-widest text-[#172A25]">
                Live well
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
