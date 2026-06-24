import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 scroll-mt-28 sm:py-28">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/4 z-0 mx-auto h-72 max-w-3xl rounded-full bg-brand/15 blur-[120px]"
      />

      <ScrollReveal className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 font-mono text-xs font-medium tracking-[0.2em] text-brand uppercase">
          <span className="h-px w-6 bg-linear-to-r from-brand to-transparent" />
          Contact
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-zinc-50 text-balance">
          Let&apos;s build something{" "}
          <span className="bg-linear-to-r from-brand via-brand-2 to-brand-3 bg-clip-text text-transparent">
            great together
          </span>
        </h2>
        <p className="mt-4 max-w-lg text-sm sm:text-base leading-relaxed text-zinc-400 text-pretty">
          Have a project in mind or just want to say hi? I&apos;m always open to
          discussing new opportunities and creative ideas.
        </p>
      </ScrollReveal>

      <div className="relative mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 lg:grid-cols-[3fr_2fr] lg:items-stretch">
        <ScrollReveal className="h-full">
          <SpotlightCard className="h-full p-7 sm:p-8">
            <ContactForm />
          </SpotlightCard>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="h-full">
          <SpotlightCard
            className="h-full p-7 sm:p-8"
            spotlight="rgba(6,182,212,0.12)"
          >
            <ContactInfo />
          </SpotlightCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
