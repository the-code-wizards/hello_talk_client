import { NextResponse } from "next/server";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';

export default function middleware(req) {
    // const [user, error] = useAuthState(auth);
    let verify = req.cookies.get("loggedin");
    let out = req.cookies.get("loggedout");
    // let token = localStorage.getItem('accessToken');
    let url = req.url
    // console.log(url)

    if (verify === false && url.includes('/dashboard') || !verify && url.includes('/level') || !verify && url.includes('/payment')) {
        window.location.href = "http://localhost:3000/signin";
    }

    if (verify === true && url === "http://localhost:3000/signin" || verify === true && url === "http://localhost:3000/signup") {
        window.location.href = "http://localhost:3000";
    }

}