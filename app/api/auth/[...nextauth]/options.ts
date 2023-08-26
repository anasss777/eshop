import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from 'next-auth'

const options: NextAuthOptions  = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default options;