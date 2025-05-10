import HeaderNavbar from "@/components/header-navbar";
import HeroSection from "@/components/hero/hero-section";
import Logo from "@/components/logo";

export default function Home() {
  return (
    <>
      <header className="px-24 pt-8 h-fit flex items-center justify-between animate-slideDown">
        <Logo />

        <HeaderNavbar />
      </header>

      <main className="bg-red-200 ">
        <HeroSection />
      </main>
    </>
  );
}
