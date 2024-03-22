/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YtkzbLB6lzW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
/* import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button" */
import Link from "next/link"
import Leonardo from "@/images/LeonardoDaVinci.jpeg"
import Image from "next/image"

export default function LoginPage() {
    return (
        <div className="flex flex-col-reverse gap-10 items-center justify-center min-h-[600px] px-4 md:gap-16 md:grid 
        md:grid-cols-2 lg:gap-0 xl:min-h-[700px] text-slate-950">
            <div className="p-16 space-y-6 text-left md:items-start md:space-y-10 lg:space-y-16">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold">Welcome back</h1>
                    <p className="text-gray-500 dark:text-gray-400">Enter your credentials to access your account</p>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="username">Username</label>
                        <input id="username" placeholder="m@example.com" required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password">Password</label>
                        <input id="password" required type="password" />
                    </div>
                    <button className="w-full bg-zinc-950 text-white">Login</button>
                    <Link className="text-sm underline" href="#">
                        Forgot your password?
                    </Link>
                </div>
            </div>
            <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-lg md:max-w-none">
                <Image alt="Image" className="w-full aspect-2/1 object-cover" height="400" src={Leonardo} width="600" />
            </div>
        </div>
    )
}

