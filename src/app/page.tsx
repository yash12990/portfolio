import HeaderNavbar from "@/components/header-navbar";
import HeroSection from "@/components/hero/hero-section";
import Logo from "@/components/logo";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
      <header className="xl:px-40 lg:px-28 sm:px-20 px-4 py-4 h-fit animate-slideDown sticky top-4">
        <div className="flex items-center justify-between bg-white-bg/[0.075] rounded-full backdrop-blur-[25px] pl-5 pr-8 py-4">
          <Logo />

          <HeaderNavbar />
        </div>
      </header>

      <main className="xl:px-40 lg:px-28 sm:px-20 px-4">
        <HeroSection />
        <Skills />
      </main>
    </>
  );
}
