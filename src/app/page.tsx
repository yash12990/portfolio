import { MessageCircle } from "lucide-react";
import HeaderNavbar from "@/components/header-navbar";
import HeroSection from "@/components/hero/hero-section";
import ExperienceSection from "@/components/experience/experience-section";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <header className="xl:px-40 lg:px-28 sm:px-20 px-4 py-4 h-fit animate-slideDown sticky top-4 z-50">
        <div className="flex items-center justify-between bg-white/6 rounded-full backdrop-blur-[25px] pl-6 pr-4 py-3 border border-white/8">
          <Logo />

          <HeaderNavbar />

          <Button
            size="icon"
            className="rounded-full bg-white/10 hover:bg-white/15 border-0 text-white cursor-pointer size-10"
          >
            <MessageCircle size={17} />
          </Button>
        </div>
      </header>

      <main className="xl:px-40 lg:px-28 sm:px-20 px-4">
        <HeroSection />

        <ExperienceSection />
      </main>
    </>
  );
}
