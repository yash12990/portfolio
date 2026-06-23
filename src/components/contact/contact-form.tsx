"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EMAIL_ID } from "@/lib/constants";

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
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    window.open(`mailto:${EMAIL_ID}?subject=${subject}&body=${body}`);
    reset();
  };

  return (
    <div className="bg-white/3 border border-white/8 border-l-4 border-l-violet-500/70 rounded-2xl p-8">
      <h3 className="text-xl font-bold text-white">Send a Message</h3>
      <p className="text-white/40 text-sm mt-1">
        I&apos;ll get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-y-5">
        <div>
          <Label htmlFor="name">
            <User size={11} /> Your Name
          </Label>
          <Input id="name" placeholder="John Doe" {...register("name")} />
          {errors.name && (
            <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">
            <Mail size={11} /> Your Email
          </Label>
          <Input id="email" type="email" placeholder="john@example.com" {...register("email")} />
          {errors.email && (
            <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="message">
            <MessageSquare size={11} /> Your Message
          </Label>
          <Textarea
            id="message"
            placeholder="Tell me about your project..."
            rows={6}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-primary-purple hover:opacity-90 border-0 text-white font-bold tracking-widest uppercase cursor-pointer mt-1 disabled:opacity-50"
        >
          Send Message <Send size={15} />
        </Button>
      </form>
    </div>
  );
}
