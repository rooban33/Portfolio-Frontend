import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_8aytQzHm_89nM4ZWS2NVZpneDYSBsq6UB");
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    console.log(email);
    const data = await resend.emails.send({
      from: email,
      to: ['shajithgunasekaran@gmail.com'],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' });
  }
}
