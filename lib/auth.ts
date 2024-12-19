import { prisma } from "@/prisma/prisma";
import NextAuth from "next-auth"
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Github({
            clientId: process.env.AUTH_GITHUB_ID as string,
            clientSecret: process.env.AUTH_GITHUB_SECRET as string,
        }),
        Google({
            clientId: process.env.AUTH_GOOGLE_ID as string,
            clientSecret: process.env.AUTH_GOOGLE_SECRET as string
        })
    ],
    secret: process.env.AUTH_SECRET,
    callbacks: {
        async signIn({ user, account, profile }) {
            try {
                const existingUser = await prisma.user.findUnique({
                    where: { email: user.email as string },
                });

                if (!existingUser) {
                    await prisma.user.create({
                        data: {
                            username: user.name as string,
                            email: user.email as string,
                            name: user.name as string, 
                            password : '123'
                        },
                    });
                }
                return true; 
            } catch (error) {
                return false;
            }
        },
        async session({ session, token }: { session: any, token: any }) {
            session.user.id = token.sub;
            return session;
        },
    },
})