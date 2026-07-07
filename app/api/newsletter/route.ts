import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const { data, error } = await resend.emails.send({
      from: "Software Elites <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL ?? "itxharoonkhan@gmail.com"],
      subject: `New Newsletter Subscriber: ${email}`,
      html: `
        <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:28px;background:#0a0a12;color:#e4e4e7;border-radius:12px;">
          <h2 style="color:#a89df9;margin:0 0 16px;">New Newsletter Subscriber</h2>
          <p style="margin:0;"><a href="mailto:${email}" style="color:#7c6af7;">${email}</a></p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed." }, { status: 500 });
    }

    console.log("Newsletter email sent:", data?.id);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
