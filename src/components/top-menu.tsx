/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mDabiu3wEPe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import logo from "@/images/logo.png"
import Image from "next/image"

export default function TopMenu() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white content-center">
      <div className="flex items-center space-x-4">
        <Image
          alt="monalisa_logo"
          width={50}
          src={logo}
        />
      </div>
      <div className="flex space-x-8 content-center justify-items-center">
        <Link className="text-slate-950 font-semibold hover:text-orange-600 duration-200 pt-1.5" href="/">
          Home
        </Link>
        <Link className="text-slate-950 font-semibold hover:text-orange-600 duration-200 pt-1.5" href="/project">
          Projetos
        </Link>
        <Link className="text-slate-950 font-semibold hover:text-orange-600 duration-200 pt-1.5" href="/about">
          Sobre
        </Link>
      </div>
    </nav>
  )
}

function InfinityIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
    </svg>
  )
}