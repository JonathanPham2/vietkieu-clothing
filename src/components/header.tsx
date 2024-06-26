import Link from "next/link"
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Input,
    Button,
    Avatar,
    Popover,
    PopoverTrigger,
    PopoverContent
 
} from "@nextui-org/react"
import { auth } from "@/auth"
import * as actions from "@/actions"
import paths from "@/paths"

export default async function Header() {
    const session = await auth();

    let authContent: React.ReactNode
    if(session?.user) {
        authContent = 
        <Popover placement="left">
            <PopoverTrigger>
            <Avatar     src={session.user.image || ""}/>
            </PopoverTrigger>
            <PopoverContent>
                <div className="p-4">
                    <form action={actions.signOut}>
                        <Button type="submit">
                            Sign Out
                        </Button>
                    </form>

                </div>

            </PopoverContent>
            </Popover>
    }
    else {
        authContent =
         <>
        <NavbarItem>
            <form action={actions.signIn}>
                <Button type="submit">Sign in</Button>
            </form>
        </NavbarItem>
        <NavbarItem>
            <form action={actions.signOut}>
                <Button type="submit">Sign out</Button>
            </form>
        </NavbarItem>
        
        </>
    }
    return (
        <Navbar  className=" bg-black w-full m-0 border-0">
            <NavbarBrand className="absolute left-1/2 transform  -translate-x-1/2">
                <Link href={paths.homePath()} className="font-bold tracking-widest text-white">VIETKIEU</Link>
            </NavbarBrand>
            <NavbarContent>
                <NavbarItem>
                    <Link className="text-white"  href={paths.visualPath()}>Visual</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white"  href={paths.homePath()}>Home</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white"  href={paths.shopPath()}>Shop</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white"  href="/shop">order</Link>
                </NavbarItem>
            </NavbarContent>
        
            

            <NavbarContent justify="end">
                    {authContent}   
            </NavbarContent>

        </Navbar>
    )
}