/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VnpiceqihfL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function FooteComponent() {
    return (
        <footer className="w-full py-6 bg-orange-600 text-zinc-900 flex justify-between items-center px-4 md:px-6 m-0">
            <div className="text-sm">© 2024 All rights reserved.</div>
            {/* <div className="flex space-x-4">
                <Link href="#">
                    <TwitterIcon className="h-5 w-5 text-white" />
                </Link>
                <Link href="#">
                    <FacebookIcon className="h-5 w-5 text-white" />
                </Link>
                <Link href="#">
                    <InstagramIcon className="h-5 w-5 text-white" />
                </Link>
            </div> */}
            <div className="flex space-x-4 text-sm">
                <Link className="text-zinc-900" href="#">
                    Privacy Policy
                </Link>
                <Link className="text-zinc-900" href="#">
                    Terms of Service
                </Link>
            </div>
        </footer>
    )
}
