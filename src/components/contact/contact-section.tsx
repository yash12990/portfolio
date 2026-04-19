import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";

export default function ContactSection() {
  return (
    <section className="pt-20 pb-24" id="contact">
      {/* Heading */}
      <div className="flex flex-col items-center gap-y-4 mb-16 text-center">
        <h2 className="text-6xl font-bold tracking-tight leading-tight">
          <span className="text-white">Let&apos;s </span>
          <span className="text-violet-400">Connect</span>
        </h2>
        <p className="text-white/45 text-sm leading-relaxed max-w-xl">
          Have a project in mind or just want to say hi? I&apos;m always open to
          discussing new opportunities and creative ideas.
        </p>
      </div>

      {/* Form (left) + Info (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-start">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
}
