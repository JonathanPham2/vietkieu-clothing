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
                            Sign out
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
            <Popover placement="left">
                <PopoverTrigger>
                <div className="text-white cursor-pointer">Sign in</div>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="p-5">
                    <form action={actions.signIn}>
                        <button type="submit" className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-300">
                            <img src="/google-icon.svg" alt="Google logo" className="w-6 h-6 mr-3" />
                            <span className="text-gray-700 font-medium">Sign in with Google</span>
                        </button>
                    </form>


                    </div>
                </PopoverContent>
            </Popover>
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
                    <Link className="text-white hover:text-gray-700 transition-colors duration-300 "  href={paths.visualPath()}>Visual</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white hover:text-gray-700 transition-colors duration-300"  href={paths.homePath()}>Home</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-white hover:text-gray-700 transition-colors duration-300"  href={paths.shopPath()}>Shop</Link>
                </NavbarItem>
               {session?.user ? ( <NavbarItem>
                    <Link className="text-white hover:text-gray-700 transition-colors duration-300"  href="/shop">Order</Link>
                </NavbarItem>) : null}
            </NavbarContent>
        
            

            <NavbarContent justify="end">
                    {authContent}   
            </NavbarContent>

        </Navbar>
    )
}