import { NextResponse } from "next/server";

export default function middleware(req) {
    let verify = req.cookies.get("loggedin");
    let url = req.url

    if (!verify && url.includes('/dashboard') || !verify && url.includes('/level') || !verify && url.includes('/payment')) {
        return NextResponse.redirect("http://localhost:3000/signin");
    }

    if (verify && url === "http://localhost:3000/signin" || verify && url === "http://localhost:3000/signup") {
        return NextResponse.redirect("http://localhost:3000");
    }

}