import { NextResponse } from "next/server";

import prisma from "@/libs/prisma";
import { hash } from "bcryptjs"

export const POST = async (req, res) => {
    try {
        const { name, email, password, role } = await req.json();

        if (!name || !email || !password || !role) {
            return new NextResponse("All feilds are required", { status: 500 })
        }

        const user = await prisma.user.findUnique({
            where: {
                email,
            }
        });

        if (user) {
            return new NextResponse("User already exist", { status: 400 })
        };

        const hashedPassword = await hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role,
            }
        });

        return NextResponse.json(newUser, { statusText: "User Created.", status: 201 })
    } catch (error) {
        return NextResponse.json("Server error", { statusText: "Failed to create user", status: 400 })
    }
}