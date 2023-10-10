import { NextResponse,NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
//const resend = new Resend('re_iva39rRe_Cg1CdgRL9GLo3mwTv9rM9McT');

export async function POST(req:NextRequest) {
  //console.log(await req.json());
  const body = await req.json();
  const {name, email, message} = body;
  
  try {
    const data = await resend.emails.send({
      from:`${name}<onboarding@resend.dev>`,
      to:'faure00@gmail.com',
      subject: 'Client',
      reply_to: `${email}`,
      html: `<p>${message}</p>`
    
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}