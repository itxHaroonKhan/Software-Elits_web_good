import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_EMAIL ?? "info@softwareelites.com";
const emailReady = Boolean(
  process.env.RESEND_API_KEY && !process.env.RESEND_API_KEY.includes("YOUR_API_KEY")
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, role, linkedin, portfolio, experience, message } = body;

    if (!name || !email || !role || !message || !experience) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (emailReady) {
      await resend.emails.send({
        from: "Software Elites Careers <onboarding@resend.dev>",
        to: TO_EMAIL,
        replyTo: email,
        subject: `New Job Application: ${role} — ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a12;color:#e4e4e7;padding:32px;border-radius:12px;">
            <h2 style="color:#a89df9;margin:0 0 8px;">New Job Application</h2>
            <p style="color:#7c6af7;font-size:14px;margin:0 0 24px;font-weight:600;">${role}</p>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;width:130px;">Name</td><td style="padding:10px 0;color:#e4e4e7;">${name}</td></tr>
              <tr><td style="padding:10px 0;color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Email</td><td style="padding:10px 0;"><a href="mailto:${email}" style="color:#a89df9;">${email}</a></td></tr>
              <tr><td style="padding:10px 0;color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Phone</td><td style="padding:10px 0;color:#e4e4e7;">${phone || "Not provided"}</td></tr>
              <tr><td style="padding:10px 0;color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Experience</td><td style="padding:10px 0;color:#e4e4e7;">${experience}</td></tr>
              <tr><td style="padding:10px 0;color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">LinkedIn</td><td style="padding:10px 0;">${linkedin ? `<a href="${linkedin}" style="color:#a89df9;">${linkedin}</a>` : "Not provided"}</td></tr>
              <tr><td style="padding:10px 0;color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">Portfolio</td><td style="padding:10px 0;">${portfolio ? `<a href="${portfolio}" style="color:#a89df9;">${portfolio}</a>` : "Not provided"}</td></tr>
            </table>
            <div style="margin-top:24px;padding:20px;background:#13131f;border-radius:8px;border-left:3px solid #7c6af7;">
              <p style="color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;margin:0 0 10px;">Cover Letter</p>
              <p style="color:#e4e4e7;line-height:1.7;margin:0;">${message.replace(/\n/g, "<br>")}</p>
            </div>
            <p style="margin-top:24px;font-size:11px;color:#52525b;">Sent from softwareelites.com careers form · ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} EST</p>
          </div>
        `,
      });
    } else {
      console.log("=== JOB APPLICATION (email not configured) ===");
      console.log({ role, name, email, phone, experience, linkedin, portfolio, message, timestamp: new Date().toISOString() });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
