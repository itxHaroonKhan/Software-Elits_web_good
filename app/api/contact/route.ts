import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const serviceList = Array.isArray(services) && services.length
      ? services.join(", ")
      : "Not selected";

    const { data, error } = await resend.emails.send({
      from: "Software Elites <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL ?? "itxharoonkhan@gmail.com"],
      replyTo: email,
      subject: `New Contact: ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0a0a12;color:#e4e4e7;border-radius:12px;">
          <h2 style="color:#a89df9;margin:0 0 24px;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#71717a;font-size:12px;width:120px;">NAME</td><td style="padding:8px 0;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#71717a;font-size:12px;">EMAIL</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#a89df9;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#71717a;font-size:12px;">PHONE</td><td style="padding:8px 0;">${phone || "Not provided"}</td></tr>
            <tr><td style="padding:8px 0;color:#71717a;font-size:12px;">SERVICES</td><td style="padding:8px 0;">${serviceList}</td></tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#13131f;border-radius:8px;border-left:3px solid #7c6af7;">
            <p style="color:#71717a;font-size:11px;margin:0 0 8px;">MESSAGE</p>
            <p style="margin:0;line-height:1.7;">${message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Email failed." }, { status: 500 });
    }

    console.log("Email sent:", data?.id);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
