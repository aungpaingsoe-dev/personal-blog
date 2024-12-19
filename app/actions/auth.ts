"use server"

import { signIn, signOut } from "@/lib/auth";
import { LoginInput, RegisterInput } from "@/lib/schema/auth";
import { prisma } from "@/prisma/prisma"
import bcrypt, { compareSync } from "bcrypt";
import { redirect } from 'next/navigation'

export async function register(data: RegisterInput) {
    const { name, email, password } = data;

    const uniqueName = await prisma.user.findUnique({ where: { name } });

    if (uniqueName) {
        return {
            message: "Invalid credential",
            error: "Name is already have been taken."
        }
    }

    const uniqueEmail = await prisma.user.findUnique({ where: { email } });

    if (uniqueEmail) {
        return {
            message: "Invalid credential",
            error: "Email is already have been taken."
        }
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
        data: {
            name,
            email,
            username: "test",
            password: hashPassword
        }
    });

    redirect('/login');
}

export async function login(data: LoginInput) {
    const { email, password } = data;

    const user = await prisma.user.findUnique({
        where: { email }
    });

    if (!user) {
        return {
            error: "Enter currect information.",
            message: "Unauthorized."
        }
    }

    if (compareSync(password, user.password)) {
        return {
            error: "Enter current information.",
            message: "Unauthorized."
        }
    }

    redirect("/");
}

export async function registerOauth(provider: 'google' | 'github') {
    await signIn(provider, { redirectTo: '/' });
}

export async function logOut() {
    await signOut()
}