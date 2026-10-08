"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EASE } from "@/components/primitives/reveal";

const TOPICS = [
  "Book a launch",
  "Collaboration",
  "University program",
  "Careers",
  "Media & press",
  "Other",
] as const;

type Topic = (typeof TOPICS)[number];

type Fields = {
  name: string;
  email: string;
  organization: string;
  topic: Topic | "";
  message: string;
  website: string; // honeypot
};

const EMPTY: Fields = {
  name: "",
  email: "",
  organization: "",
  topic: "",
  message: "",
  website: "",
};

type Errors = Partial<Record<keyof Fields, string>>;

function validate(f: Fields): Errors {
  const errors: Errors = {};
  if (f.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!f.topic) errors.topic = "Please choose a topic.";
  if (f.message.trim().length < 10)
    errors.message = "Please write at least 10 characters.";
  else if (f.message.trim().length > 4000)
    errors.message = "Message is too long (max 4000 characters).";
  return errors;
}

const inputClass =
  "h-12 rounded-2xl border-edge bg-night-2/70 text-[0.9375rem] text-chalk placeholder:text-chalk-3 focus-visible:border-amber/70 focus-visible:ring-amber/20 aria-invalid:border-[#ff8a6a]/70 aria-invalid:ring-[#ff8a6a]/20";

/**
 * ContactForm: the send-a-message form on /contact.
 * Client-side zod-style validation, honeypot spam trap, POST /api/contact,
 * inline field errors, sonner toasts and an in-place success state.
 */
export function ContactForm() {
  const reduced = useReducedMotion();
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  // Bumping the key gives the uncontrolled Select a fresh instance on reset.
  const [selectKey, setSelectKey] = useState(0);

  const set = (key: keyof Fields) => (value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const nextErrors = validate(fields);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.name.trim(),
          email: fields.email.trim(),
          organization: fields.organization.trim(),
          topic: fields.topic,
          message: fields.message.trim(),
          website: fields.website,
        }),
      });
      const data = (await res.json().catch(() => null)) as
        | { ok: boolean; error?: string; fieldErrors?: Record<string, string> }
        | null;

      if (res.ok && data?.ok) {
        setStatus("sent");
        toast.success("Message received. The team will get back to you soon.");
        return;
      }

      if (data?.fieldErrors) {
        const mapped: Errors = {};
        for (const [k, v] of Object.entries(data.fieldErrors)) {
          if (k in EMPTY) mapped[k as keyof Fields] = v;
        }
        setErrors(mapped);
      }
      toast.error(data?.error ?? "Could not send the message. Please try again.");
      setStatus("idle");
    } catch {
      toast.error(
        "Network error: could not reach the server. Please try again, or email xdhumketu@gmail.com.",
      );
      setStatus("idle");
    }
  }

  function reset() {
    setFields(EMPTY);
    setErrors({});
    setSelectKey((k) => k + 1);
    setStatus("idle");
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="flex min-h-[420px] flex-col items-start justify-center"
      >
        <span className="glow-ember right-[-10%] top-[-10%] h-[240px] w-[320px]" aria-hidden="true" />
        <CheckCircle2 className="h-12 w-12 text-amber" aria-hidden="true" />
        <h3 className="qa-display mt-6 text-3xl text-chalk sm:text-4xl">
          Message received.
        </h3>
        <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-chalk-2">
          Thank you for reaching out. The team reads every message and typically
          responds within a few working days. For urgent mission inquiries, use{" "}
          <a href="mailto:xdhumketu@gmail.com" className="qa-link text-amber">
            xdhumketu@gmail.com
          </a>
          .
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-edge-strong px-6 py-3 text-[0.9375rem] font-medium text-chalk transition-colors hover:border-chalk-2"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      {/* Honeypot: visually hidden and off tab order; bots fill it, humans do not. */}
      <div className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            name="website"
            value={fields.website}
            onChange={(e) => set("website")(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="cf-name" error={errors.name} className="sm:col-span-1">
          <Input
            id="cf-name"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            value={fields.name}
            onChange={(e) => set("name")(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "cf-name-error" : undefined}
            className={inputClass}
          />
        </Field>

        <Field label="Email" htmlFor="cf-email" error={errors.email} className="sm:col-span-1">
          <Input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={fields.email}
            onChange={(e) => set("email")(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "cf-email-error" : undefined}
            className={inputClass}
          />
        </Field>

        <Field
          label="Organization (optional)"
          htmlFor="cf-org"
          className="sm:col-span-1"
        >
          <Input
            id="cf-org"
            name="organization"
            autoComplete="organization"
            placeholder="University, company or team"
            value={fields.organization}
            onChange={(e) => set("organization")(e.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label="Topic" htmlFor="cf-topic" error={errors.topic} className="sm:col-span-1">
          <input type="hidden" name="topic" value={fields.topic} />
          <Select key={selectKey} onValueChange={(v) => set("topic")(v)}>
            <SelectTrigger
              id="cf-topic"
              aria-invalid={Boolean(errors.topic)}
              aria-describedby={errors.topic ? "cf-topic-error" : undefined}
              className="h-12 w-full rounded-2xl border-edge bg-night-2/70 text-[0.9375rem] text-chalk data-[placeholder]:text-chalk-3 focus-visible:border-amber/70 focus-visible:ring-amber/20 aria-invalid:border-[#ff8a6a]/70"
            >
              <SelectValue placeholder="What is this about?" />
            </SelectTrigger>
            <SelectContent className="rounded-2xl border-edge bg-popover text-chalk">
              {TOPICS.map((t) => (
                <SelectItem
                  key={t}
                  value={t}
                  className="rounded-xl text-[0.9375rem] text-chalk focus:bg-night-2 focus:text-amber"
                >
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <Field
          label="Message"
          htmlFor="cf-message"
          error={errors.message}
          className="sm:col-span-2"
          hint={`${fields.message.trim().length}/4000`}
        >
          <Textarea
            id="cf-message"
            name="message"
            rows={5}
            placeholder="Tell the team about your mission, project or question."
            value={fields.message}
            onChange={(e) => set("message")(e.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "cf-message-error" : undefined}
            className={`min-h-[132px] rounded-2xl border-edge bg-night-2/70 text-[0.9375rem] text-chalk placeholder:text-chalk-3 focus-visible:border-amber/70 focus-visible:ring-amber/20 aria-invalid:border-[#ff8a6a]/70 aria-invalid:ring-[#ff8a6a]/20 ${inputClass} h-auto`}
          />
        </Field>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#ff5a2c] via-[#ff7a3a] to-[#ffb25b] px-8 py-3.5 text-[0.9375rem] font-semibold text-[#1a0c05] shadow-[0_0_32px_rgba(255,106,61,0.4)] transition-[box-shadow,filter,opacity] duration-300 hover:shadow-[0_0_44px_rgba(255,106,61,0.6)] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <Send
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </>
          )}
        </button>
        <p className="text-xs leading-relaxed text-chalk-3 sm:max-w-[230px] sm:text-right">
          Your message goes straight to the DhumketuX inbox.
          <br className="hidden sm:block" /> No newsletters, no spam.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  hint,
  className = "",
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <div className="flex items-baseline justify-between gap-3">
        <Label
          htmlFor={htmlFor}
          className="qa-data text-[0.6875rem] uppercase tracking-[0.16em] text-chalk-3"
        >
          {label}
        </Label>
        {hint && <span className="qa-data text-[0.6875rem] text-chalk-3">{hint}</span>}
      </div>
      <div className="mt-2.5">{children}</div>
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="mt-2 text-[13px] text-[#ff8a6a]">
          {error}
        </p>
      )}
    </div>
  );
}
