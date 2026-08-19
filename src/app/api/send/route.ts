import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "RESEND_API_KEY is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();

    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);

    if (!zodSuccess) {
      return Response.json(
        { error: zodError.message },
        { status: 400 }
      );
    }

    const { data: resendData, error: resendError } =
      await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: [config.email],
        subject: "Contact me from portfolio",
        react: EmailTemplate({
          fullName: zodData.fullName,
          email: zodData.email,
          message: zodData.message,
        }),
      });

    if (resendError) {
      return Response.json(
        { error: resendError },
        { status: 500 }
      );
    }

    return Response.json(resendData);
  } catch (error) {
    console.error("Email API error:", error);

    return Response.json(
      {
        error:
          error instanceof Error ? error.message : "Unknown server error",
      },
      { status: 500 }
    );
  }
}