'use client';

import { useSession, getSession } from "next-auth/react";



export default function Profile()  {
    
    const {data: session, status} = useSession()
    

    if(status === "loading"){
        return <p>Loading...</p>
    }

    if(!session) {
        return <p>You are not signed in </p>
    }
   return (
    <div>
        <p>Signed in as {session.user?.email}</p>
    </div>
   )

}