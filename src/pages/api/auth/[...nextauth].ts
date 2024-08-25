import connectToMongoDB from "@/lib/monogodb";
import User from "@/models/user";
import { compare } from "bcryptjs";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { IUser } from "./signup";

const options = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        await connectToMongoDB().catch((error) => {
          throw new Error(error);
        });

        const user = await User.findOne({ email: credentials?.email }).select(
          "+password"
        );

        if (!user) {
          throw new Error("Invalid Credentials");
        }
        const isPasswordCorrect = await compare(
          credentials!.password,
          user.password
        );
        if (!isPasswordCorrect) {
          throw new Error("Invalid credentials");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    jwt: async ({ token, user }: { token: any; user: any }) => {
      // Persist the OAuth access_token to the token right after signin
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }: { session: any; token: any }) => {
      // Send properties to the client, like an access_token from a provider.
      const user = token.user as IUser;
      session.user = user;
      return session;
    },
  },
};
export default NextAuth(options);
