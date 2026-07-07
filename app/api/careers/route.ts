import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, role, linkedin, portfolio, experience, message } = body;

    if (!name || !email || !role || !message || !experience) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Software Elites Careers <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL ?? "itxharoonkhan@gmail.com"],
      replyTo: email,
      subject: `New Application: ${role} — ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0a0a12;color:#e4e4e7;border-radius:12px;">
          <h2 style="color:#a89df9;margin:0 0 8px;">New Job Application</h2>
          <p style="color:#7c6af7;margin:0 0 24px;font-weight:600;">${role}</p>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#71717a;font-size:12px;width:130px;">NAME</td><td style="padding:8px 0;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#71717a;font-size:12px;">EMAIL</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#a89df9;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#71717a;font-size:12px;">PHONE</td><td style="padding:8px 0;">${phone || "Not provided"}</td></tr>
            <tr><td style="padding:8px 0;color:#71717a;font-size:12px;">EXPERIENCE</td><td style="padding:8px 0;">${experience}</td></tr>
            <tr><td style="padding:8px 0;color:#71717a;font-size:12px;">LINKEDIN</td><td style="padding:8px 0;">${linkedin || "Not provided"}</td></tr>
            <tr><td style="padding:8px 0;color:#71717a;font-size:12px;">PORTFOLIO</td><td style="padding:8px 0;">${portfolio || "Not provided"}</td></tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#13131f;border-radius:8px;border-left:3px solid #7c6af7;">
            <p style="color:#71717a;font-size:11px;margin:0 0 8px;">COVER LETTER</p>
            <p style="margin:0;line-height:1.7;">${message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Email failed." }, { status: 500 });
    }

    console.log("Application email sent:", data?.id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
