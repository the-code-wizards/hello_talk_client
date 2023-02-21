import { NextResponse } from "next/server";

export default function middleware(req) {
    let verify = req.cookies.get("loggedin");
    let out = req.cookies.get("loggedout");
    // let token = localStorage.getItem('accessToken');
    let url = req.url
    // console.log(verify)

    if (verify === false && url.includes('/dashboard') || !verify && url.includes('/level') || !verify && url.includes('/payment')) {
        // window.location.href = "http://localhost:3000/signin";
    }

    if (verify === true && url === "http://localhost:3000/signin" || verify === true && url === "http://localhost:3000/signup") {
        // window.location.href = "http://localhost:3000";
    }

}