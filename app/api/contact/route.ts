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
    const { name, email, phone, message, services } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (emailReady) {
      await resend.emails.send({
        from: "Software Elites Website <onboarding@resend.dev>",
        to: TO_EMAIL,
        replyTo: email,
        subject: `New Contact Form: ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a12;color:#e4e4e7;padding:32px;border-radius:12px;">
            <h2 style="color:#a89df9;margin:0 0 24px;">New Contact Form Submission</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Name</td><td style="padding:10px 0;color:#e4e4e7;">${name}</td></tr>
              <tr><td style="padding:10px 0;color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Email</td><td style="padding:10px 0;"><a href="mailto:${email}" style="color:#a89df9;">${email}</a></td></tr>
              <tr><td style="padding:10px 0;color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Phone</td><td style="padding:10px 0;color:#e4e4e7;">${phone || "Not provided"}</td></tr>
              ${services?.length ? `<tr><td style="padding:10px 0;color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Services</td><td style="padding:10px 0;color:#e4e4e7;">${Array.isArray(services) ? services.join(", ") : services}</td></tr>` : ""}
            </table>
            <div style="margin-top:24px;padding:20px;background:#13131f;border-radius:8px;border-left:3px solid #7c6af7;">
              <p style="color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 10px;">Message</p>
              <p style="color:#e4e4e7;line-height:1.7;margin:0;">${message.replace(/\n/g, "<br>")}</p>
            </div>
            <p style="margin-top:24px;font-size:11px;color:#52525b;">Sent from softwareelites.com contact form · ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} EST</p>
          </div>
        `,
      });
    } else {
      console.log("=== CONTACT FORM (email not configured) ===");
      console.log({ name, email, phone, message, services, timestamp: new Date().toISOString() });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
