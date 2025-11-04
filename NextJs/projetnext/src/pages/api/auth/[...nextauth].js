import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email:",
          type: "text",
        },
        password: {
          label: "password:",
          type: "password",
        },
      },
      async authorize(credentials) {
        try {
          const res = await fetch("http://localhost:3001/api/users/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });
          const response = await res.json();
          console.log(response);
          if (response.success === false) {
            throw new Error("Invalid credentials");
          }
          if (response.user) {
            return {
              ...response.user,
              password: null,
              role: response.user.role,
              image: response.user.avatar,
            };
          } else {
            return null;
          }
        } catch (error) {
          22;
          console.log(error);
        }
        return null;
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id; // <-- Nécessaire
        session.user.role = token.role;
        session.user.image = token.image;
      }
      return session;
    },
  },
};
export default NextAuth(authOptions);
