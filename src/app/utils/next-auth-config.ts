import prisma from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";


export const nextAuthConfig: AuthOptions = {
  adapter: PrismaAdapter(prisma) as AuthOptions["adapter"],
  pages: {
    signIn: "/auth/sign-in",
    verifyRequest: "/auth/verify-request",
  },

  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM
    }),
  ],
};