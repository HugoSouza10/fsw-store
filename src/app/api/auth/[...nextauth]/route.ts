//locahost:3000/api/auth/nextauth/123: Ele sempre vai cair no arquivo route.ts

import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth";

const handle = NextAuth(authOptions);
export {handle as GET, handle as POST}


