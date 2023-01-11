import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NextResponse, NextRequest } from 'next/server'
import auth from '../../firebase.init';



const RequireAuth = ({children}) => {
      const [user, loading] = useAuthState(auth);

    export async function middleware(req, ev) {
    const { pathname } = req.nextUrl
    if (!user) {
        return NextResponse.redirect('/login')
    }
    return NextResponse.next()
}
  
    if(loading){
        return <h2>loading</h2>
    }
    return children;
};

export default RequireAuth;