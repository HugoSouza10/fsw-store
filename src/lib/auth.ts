import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GooleProviders from "next-auth/providers/google"
import { AuthOptions } from "next-auth";
import { prismaClient } from "@/lib/prisma"


export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  providers: [
    GooleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};
