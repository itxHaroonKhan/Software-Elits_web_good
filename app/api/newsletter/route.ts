import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_EMAIL ?? "info@softwareelites.com";
const emailReady = Boolean(
  process.env.RESEND_API_KEY && !process.env.RESEND_API_KEY.includes("YOUR_API_KEY")
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (emailReady) {
      await resend.emails.send({
        from: "Software Elites <onboarding@resend.dev>",
        to: TO_EMAIL,
        subject: `New Newsletter Subscriber: ${email}`,
        html: `
          <div style="font-family:sans-serif;max-width:500px;margin:0 auto;background:#0a0a12;color:#e4e4e7;padding:28px;border-radius:12px;">
            <h2 style="color:#a89df9;margin:0 0 16px;">New Newsletter Subscriber</h2>
            <p style="color:#e4e4e7;margin:0;"><a href="mailto:${email}" style="color:#7c6af7;">${email}</a></p>
            <p style="margin-top:16px;font-size:11px;color:#52525b;">${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} EST</p>
          </div>
        `,
      });
    } else {
      console.log("Newsletter subscription (email not configured):", { email, timestamp: new Date().toISOString() });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
