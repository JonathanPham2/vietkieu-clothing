'use client'

import { useRouter } from "next/router"
import Header from "./header"
import { useEffect, useState } from "react"

export default function ConditionalHeader({children}: {children: React.ReactNode}) {
    const router = useRouter()
    const [isVisualPage, setIsVisualPage] = useState(false)

    useEffect(() =>{
        setIsVisualPage(router.pathname === '/')
    },[router.pathname])


    return (
        <>
             {!isVisualPage && <Header/>}
            {children}
        </>

    )
}