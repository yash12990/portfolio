"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EMAIL_ID } from "@/data/portfolio";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormValues) => {
    const subject = encodeURIComponent(`Portfolio Contact from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
    );
    window.open(`mailto:${EMAIL_ID}?subject=${subject}&body=${body}`);
    reset();
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-white">Send a message</h3>
      <p className="mt-1 text-sm text-zinc-500">
        I&apos;ll get back to you within 24 hours.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-7 flex flex-col gap-y-5"
        noValidate
      >
        <div>
          <Label htmlFor="name">
            <User size={11} /> Your Name
          </Label>
          <Input id="name" placeholder="John Doe" {...register("name")} />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">
            <Mail size={11} /> Your Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="message">
            <MessageSquare size={11} /> Your Message
          </Label>
          <Textarea
            id="message"
            placeholder="Tell me about your project..."
            rows={5}
            {...register("message")}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-brand to-brand-2 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:shadow-xl hover:shadow-brand/35 disabled:opacity-50"
        >
          Send Message
          <Send
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </button>
      </form>
    </div>
  );
}
