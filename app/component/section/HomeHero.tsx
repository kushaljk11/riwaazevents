import Image from "next/image";
import Container from "../ui/Container";

export default function HomeHero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[92vh] flex items-center justify-center overflow-hidden bg-maroon-dark">
      {/* Floral Wedding Mandap Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000"
          alt="Riwaaz Events Grand Floral Celebration"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Subtle luxury vignette gradient so transparent navbar and text shine */}
        <div className="absolute inset-0 bg-linear-to-t from-maroon/90 via-black/40 to-black/60" />
      </div>

      {/* Hero Content */}
      <Container size="wide" className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-32 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-primary mb-4 inline-block">
            Riwaaz Events · Itahari, Nepal
          </span>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-white-text tracking-wide leading-tight mb-6">
            Tradition,{" "}
            <span className="font-editorial italic font-normal text-gold-light">
              beautifully reimagined.
            </span>
          </h1>

          <p className="font-sans text-sm md:text-base text-white-text/85 tracking-widest max-w-2xl mx-auto">
            Bespoke luxury wedding planning, royal decor, and unforgettable
            cultural galas.
          </p>
        </div>
      </Container>
    </section>
  );
}
