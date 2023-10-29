import { NextResponse } from "next/server";

export const middleware = (req) => {
    console.log("Hello Wolrd");
}

export const config = {
    matcher: ["/"]
}