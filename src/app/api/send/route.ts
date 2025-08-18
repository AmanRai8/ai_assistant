// import { NextRequest, NextResponse } from "next/server";
// import { Resend } from "resend";
// import { EmailTemplate } from "@/components/EmailTemplate";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req: NextRequest) {
//   try {
//     const { name, email, message } = await req.json();

//     if (!name || !email || !message) {
//       return NextResponse.json({ error: "All fields are required." }, { status: 400 });
//     }

//     await resend.emails.send({
//       from: "AI Assistant <onboarding@resend.dev>",
//       to: ["your.email@example.com"],   // your email
//       reply_to: email,                  // user's email
//       subject: `Feedback from ${name}`,
//       react: <EmailTemplate name={name} message={message} />,
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Failed to send feedback." }, { status: 500 });
//   }
// }
