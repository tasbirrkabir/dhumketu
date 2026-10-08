import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

export const runtime = "nodejs";

const TOPICS = [
  "Book a launch",
  "Collaboration",
  "University program",
  "Careers",
  "Media & press",
  "Other",
] as const;

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  organization: z.string().trim().max(160).optional().or(z.literal("")),
  topic: z.enum(TOPICS),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters.")
    .max(4000, "Message is too long (max 4000 characters)."),
  /** Hidden honeypot: humans never fill this in. */
  website: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { ok: false, error: "Invalid request body." },
        { status: 400 },
      );
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      return NextResponse.json(
        { ok: false, error: "Please check the highlighted fields.", fieldErrors },
        { status: 400 },
      );
    }

    // Honeypot filled → almost certainly a bot. Pretend success, store nothing.
    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    const submission = await db.contactSubmission.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        organization: parsed.data.organization || null,
        topic: parsed.data.topic,
        message: parsed.data.message,
      },
    });

    return NextResponse.json({ ok: true, id: submission.id }, { status: 201 });
  } catch (error) {
    console.error("[/api/contact] Failed to store submission:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Something went wrong on our side. Please try again, or email xdhumketu@gmail.com directly.",
      },
      { status: 500 },
    );
  }
}
