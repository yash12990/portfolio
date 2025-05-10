import HeaderNavbar from "@/components/header-navbar";
import HeroSection from "@/components/hero/hero-section";
import Logo from "@/components/logo";

export default function Home() {
  return (
    <>
      <header className="px-32 py-4 h-fit animate-slideDown sticky top-4">
        <div className="flex items-center justify-between bg-white-bg/[0.075] rounded-full backdrop-blur-[25px] pl-5 pr-8 py-4">
          <Logo />

          <HeaderNavbar />
        </div>
      </header>

      <main className="px-32">
        <HeroSection />
      </main>
    </>
  );
}
