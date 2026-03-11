import { NextResponse } from "next/server";
import { Resend } from "resend";

type RequestBody = {
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  interest?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const ceoEmail = process.env.CEO_EMAIL;
    const fromEmail = process.env.FROM_EMAIL;

    if (!resendApiKey || !ceoEmail || !fromEmail) {
      return NextResponse.json(
        {
          error:
            "Missing environment variables. Check RESEND_API_KEY, CEO_EMAIL, and FROM_EMAIL in .env.local",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const body = (await req.json()) as RequestBody;

    const fullName = body.fullName?.trim() || "";
    const email = body.email?.trim() || "";
    const phone = body.phone?.trim() || "";
    const company = body.company?.trim() || "";
    const interest = body.interest?.trim() || "";
    const message = body.message?.trim() || "";

    if (!fullName || !email || !interest) {
      return NextResponse.json(
        { error: "Full name, email, and interest are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const safeFullName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeCompany = escapeHtml(company || "Not provided");
    const safeInterest = escapeHtml(interest);
    const safeMessage = escapeHtml(message || "No message provided");

    const response = await resend.emails.send({
      from: `Bit2Bio Website <${fromEmail}>`,
      to: [ceoEmail],
      replyTo: email,
      subject: `New Bit2Bio Get Started request from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2>New Bit2Bio Get Started Request</h2>
          <p><strong>Full Name:</strong> ${safeFullName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Company:</strong> ${safeCompany}</p>
          <p><strong>Interest:</strong> ${safeInterest}</p>
          <p><strong>Message:</strong><br />${safeMessage.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (response.error) {
      console.error("Resend error:", response.error);
      return NextResponse.json(
        { error: response.error.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong while submitting the form.",
      },
      { status: 500 }
    );
  }
}