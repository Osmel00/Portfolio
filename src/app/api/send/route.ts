import { NextResponse, } from 'next/server';
import { Resend } from 'resend';

//const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend('re_iva39rRe_Cg1CdgRL9GLo3mwTv9rM9McT');

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to:'faure00@gmail.com',
      subject: 'Hello world',
      html: '<p>Congrats on sending your <strong>seconds email</strong>!</p>'
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}