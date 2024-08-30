import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GooleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import { prismaClient } from "./prisma";


export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  providers: [
    GooleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};
