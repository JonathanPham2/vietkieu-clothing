'use client';

import { useSession, getSession } from "next-auth/react";
import { useEffect, useState } from "react";



export default function Profile()  {
    
    const {data: session, status} = useSession()
    const [isSignedOut, setIsSignedOut] = useState(false)

    useEffect(() => {
        if (isSignedOut) {
            // Re-fetch the session to ensure it updates
            getSession().then((newSession) => {
                if (!newSession) {
                    setIsSignedOut(false);
                }
            });
        }
    }, [isSignedOut]);
    console.log(isSignedOut )

    if(status === "loading"){
        return <p>Loading...</p>
    }

    if(isSignedOut ||!session) {
        return <p>You are not signed in </p>
    }
   return (
    <div>
        <p>Signed in as {session.user?.email}</p>
    </div>
   )

}