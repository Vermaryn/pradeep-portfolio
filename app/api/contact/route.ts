import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: Request) {
  try {
    const body = await req.json();

    await connectDB();

    const contact = await Contact.create(body);

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL!,
      subject: "New Portfolio Contact Form Message",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
    });
    return NextResponse.json(
      { success: true, contact },
      { status: 201 }
    );
  } catch (error) {
      console.error(error);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}