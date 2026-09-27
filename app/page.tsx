import { Navbar, Footer } from "./component/layout";
import { HomeHero } from "./component/section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      {/* Reusable Transparent Navbar (Floats over Hero) */}
      <Navbar />

      <main className="flex-1">
        <HomeHero />
      </main>

      {/* Reusable Luxury Footer */}
      <Footer />
    </div>
  );
}
