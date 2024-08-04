
import { Button } from "@nextui-org/react"
import * as actions from "@/actions"
import { auth } from '@/auth'
import Profile from "@/components/profile";
import { url } from "inspector";



export default  async function Home() {
  const session = await auth();
return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background.webp')" }}>
        
        <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-cover bg-center" style={{ width: '700px', height: '700px', backgroundImage: "url('/vietkieu.webp')" }}></div>
        </div>
      
    </div>
);
}