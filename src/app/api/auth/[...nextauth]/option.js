import prisma from "@/libs/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { NextResponse } from "next/server";

import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { validatePassword } from "@/services/PasswordValidate";

export const authOptions = {
    session: {
        strategy: "jwt",
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",

            async authorize({ email, password }) {
                if (!email || !password) {
                    return new NextResponse("All feilds are required!", { status: 400 })
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email
                    }
                });

                if (!user) {
                    return new NextResponse("User not found!", { status: 400 })
                }

                const verifyPassword = await validatePassword(password, user.password);

                if (!verifyPassword) {
                    return new NextResponse("Incorrect password", { status: 400 })
                };

                return user;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
                token.name = user.name

            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.role = token.role;
                session.user.name = token.name
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
}