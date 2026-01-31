"use server";

import { isValid, ZodError} from "zod";
import {signUpSchema} from "~/schemas";
import { db } from "~/server/db";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import {signIn, signOut} from "~/server/auth";
import {AuthError} from "next-auth";



export async function signout() {
    await signOut();
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirectTo: formData.get("redirectTo") || "/dashboard",
        });
    } catch (error) {
        if (error instanceof AuthError){
            switch (error.type){
                case "CredentialsSignin":
                    return "Invalid credentials. Please try again.";
                default:
                    return "Something went wrong. Please try again.";
            }
        }
        throw error;
    }
}

export async function register(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        const { email, password } = await signUpSchema.parseAsync({
            email: formData.get("email"),
            password: formData.get("password"),
        });

        const user = await db.user.findUnique({ where: { email } });
        if (user) return "User with this email already exists.";

        const hash = await bcrypt.hash(password, 10);

        await db.user.create({
            data: {
                email,
                password: hash,
            },
        });

        await signIn("credentials", {
            email,
            password,
            redirectTo: "/dashboard",
        });
    } catch (error) {
        if (error instanceof ZodError) {
            return error.errors.map((error) => error.message).join(", ");
        }
        throw error;
    }
}


