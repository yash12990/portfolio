import React from "react";
import Image from "next/image";
import HeroImg from "../../../public/hero-img.webp";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="h-[calc(100vh-108px)] flex items-center justify-between gap-x-12">
      <div className="flex flex-col gap-y-8 max-w-145">
        <p className="text-xl font-medium text-white/70">
          Hey, I&apos;m Yash Gupta 👋
        </p>

        <h1 className="text-[4.5rem] font-bold leading-[1.05] tracking-tight">
          <span className="text-violet-500">Software</span>
          <br />
          <span className="text-white">Engineer</span>
        </h1>

        <p className="text-white/55 text-base leading-relaxed max-w-120">
          I&apos;m a passionate Software Engineer specializing in building
          modern, responsive, and user-focused digital experiences that not only
          look great but perform flawlessly. Let&apos;s create purposeful,
          impactful software together.
        </p>

        <div className="flex items-center gap-x-4">
          {/* Navigate to contact section */}
          <Button
            size="lg"
            className="bg-white text-black font-semibold px-8 hover:bg-white/80 cursor-pointer shadow-2xl hover:shadow-2xs transition-all duration-300"
          >
            Get In Touch
          </Button>

          {/* Navigate to Projects section */}
          <Button
            variant="outline"
            size="lg"
            className="border-white/25 text-white font-semibold px-8 hover:bg-white hover:text-[#150e33] cursor-pointer transition-all duration-300"
          >
            Browse Projects
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-y-4 shrink-0">
        <div className="relative h-97.5 w-97.5">
          <div className="absolute inset-0 rounded-full bg-violet-600/25 blur-3xl scale-110 pointer-events-none" />
          <Image
            src={HeroImg}
            alt="Yash Gupta"
            className="relative h-full w-full rounded-full object-cover ring-1 ring-violet-400/40 ring-offset-4 ring-offset-[#0d091f]"
          />
        </div>

        <p className="flex items-center gap-x-1.5 text-sm text-white/45">
          <MapPin size={13} />
          Delhi, India
        </p>
      </div>
    </section>
  );
}
