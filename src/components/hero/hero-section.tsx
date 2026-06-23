import Image from "next/image";
import Link from "next/link";
import HeroImg from "../../../public/hero-img.webp";
import { AtSign, LayoutGrid, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative h-[calc(100vh-108px)] flex items-center overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute -top-20 -right-20 w-140 h-140 bg-violet-600/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-110 h-110 bg-orange-950/30 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-110 h-110 bg-indigo-900/20 rounded-full blur-[110px] pointer-events-none" />

      <div className="flex flex-col gap-y-7 max-w-3xl relative z-10">
        {/* Avatar + line 1 */}
        <div className="flex items-center gap-x-5">
          <Image
            src={HeroImg}
            alt="Yash Gupta"
            width={72}
            height={72}
            className="rounded-full object-cover ring-2 ring-violet-500/50 shrink-0"
          />
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight">
            Hey, I&apos;m{" "}
            <span className="text-violet-400">Yash Gupta</span>
            <span className="ml-1.5">✨</span>
          </h1>
        </div>

        {/* Line 2 */}
        <p className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight bg-linear-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
          A Software Engineer
        </p>

        {/* Description */}
        <p className="text-white/60 text-base leading-relaxed max-w-xl">
          A <span className="font-bold text-white">fullstack developer</span>{" "}
          with solid foundations in{" "}
          <span className="font-bold text-white">design</span>. Passionate about
          crafting seamless user experiences, I thrive at the intersection of
          creativity and functionality.
        </p>

        {/* Buttons + divider + social icons */}
        <div className="flex items-center gap-x-3 flex-wrap gap-y-3">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white gap-x-2 cursor-pointer"
          >
            <Link href="#contact">
              <AtSign size={15} />
              Contact Me
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            className="bg-primary-purple text-white hover:opacity-90 gap-x-2 cursor-pointer border border-violet-500/30"
          >
            <Link href="#projects">
              <LayoutGrid size={15} />
              View Projects
            </Link>
          </Button>

          <div className="w-px h-6 bg-white/20 mx-1" />

          <div className="flex items-center gap-x-4">
            {socialLinks.map(({ icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-50 hover:opacity-100 transition-opacity duration-200"
              >
                <Image src={icon} alt={label} width={20} height={20} className="invert" />
              </Link>
            ))}
            <Link
              href="#"
              className="text-white/50 hover:text-white transition-colors duration-200"
            >
              <X size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
