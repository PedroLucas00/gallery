/**
 * v0 by Vercel.
 * @see https://v0.dev/t/o38IWg9T0gg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import image001 from "@/images/image001.jpg"
import Image from "next/image"

export default function MusicPlayerComponent() {
    return (
        <div className="max-w-sm mx-auto">
            <Image
                alt=""
                className="w-full rounded-t-lg"
                height="338"
                src={image001}
                style={{
                    aspectRatio: "341/338",
                    objectFit: "cover",
                }}
                width="341"
            />
            <div className="flex flex-col p-4 bg-white rounded-b-lg">
                <h2 className="text-lg font-semibold text-zinc-950">Jane Doe</h2>
                <p className="text-sm text-gray-600">Product Manager</p>
                <div className="flex items-center mt-4">
                    <PlayCircleIcon className="w-8 h-8 text-black" />
                    <div className="flex-1 ml-3">
                        <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-slate-300">
                            <div
                                className="bg-grey h-1.5 rounded-full"
                                style={{
                                    width: "30%",
                                }}
                            />
                        </div>
                        <div className="flex justify-between text-xs text-gray-600">
                            <span>0:00</span>
                            <span>2:32</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function PlayCircleIcon(props: any) {
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
            <circle cx="12" cy="12" r="10" />
            <polygon points="10 8 16 12 10 16 10 8" />
        </svg>
    )
}
