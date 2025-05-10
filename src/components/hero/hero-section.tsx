import React from "react";
import Image from "next/image";
import HeroImg from "../../../public/hero-img.webp";
import { Pin } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="h-[calc(100vh-108px)] flex justify-between">
      <div className="flex flex-col gap-y-20 max-w-[630px] pt-36">
        <section className="space-y-4">
          <p className="text-2xl font-semibold">Hello! I&apos;am Yash Gupta</p>

          <p className="text-5xl font-medium max-w-2xl">
            A software engineer transforming complexity into simplicity through
            code.
          </p>
        </section>

        <p>
          I&apos;m a passionate Software Engineer specializing in building
          modern, responsive, and user-focused digital experiences that not only
          look great but perform flawlessly. I strive to build scalable,
          accessible solutions that deliver real value. I&apos;m committed to
          writing clean, maintainable code and continuously improving both
          product and process. <br />
          Let&apos;s create purposeful, impactful software together.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-y-5">
        <div className="h-[390px] w-[390px] rounded-full">
          <Image
            src={HeroImg}
            alt="hero-img"
            className="h-full w-full rounded-full border-2 border-white"
          />
        </div>

        <p className="flex items-center gap-x-2 text-sm text-white/[0.65]">
          <Pin size={12} />
          Delhi, India
        </p>
      </div>
    </div>
  );
}
