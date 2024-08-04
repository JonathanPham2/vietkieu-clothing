'use client'

import { useRouter } from "next/router"
import Header from "./header"

export default function ConditionalHeader({children}: {children: React.ReactNode}) {
    const router = useRouter()
    const isVisualPage = router.pathname === "/"
    return (
        <>
             {!isVisualPage && <Header/>}
            {children}
        </>

    )
}