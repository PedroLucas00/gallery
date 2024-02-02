/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WbQ2iRSI6C4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Image from "next/image"
import image002 from "@/images/image002.jpg"

export default function VideosPage() {
    return (
        <div className="bg-white">
            <header className="text-left pl-9 py-16">
                <h1 className="text-6xl font-bold mt-12 mb-8 text-slate-950">VIDEOS</h1>
            </header>
            <section className="px-8">
                <div className="grid grid-cols-3 gap-8">
                    <div className="relative">
                        <Image
                            alt="Video thumbnail"
                            className="w-full h-auto"
                            height="240"
                            src={image002}
                            style={{
                                aspectRatio: "360/240",
                                objectFit: "cover",
                            }}
                            width="360"
                        />
                        <PlayCircleIcon className="absolute inset-0 m-auto text-white text-6xl" />
                    </div>
                    <div className="relative">
                        <Image
                            alt="Video thumbnail"
                            className="w-full h-auto"
                            height="240"
                            src={image002}
                            style={{
                                aspectRatio: "360/240",
                                objectFit: "cover",
                            }}
                            width="360"
                        />
                        <PlayCircleIcon className="absolute inset-0 m-auto text-white text-6xl" />
                    </div>
                    <div className="relative">
                        <Image
                            alt="Video thumbnail"
                            className="w-full h-auto"
                            height="240"
                            src={image002}
                            style={{
                                aspectRatio: "360/240",
                                objectFit: "cover",
                            }}
                            width="360"
                        />
                        <PlayCircleIcon className="absolute inset-0 m-auto text-white text-6xl" />
                    </div>
                    <div className="relative">
                        <Image
                            alt="Video thumbnail"
                            className="w-full h-auto"
                            height="240"
                            src={image002}
                            style={{
                                aspectRatio: "360/240",
                                objectFit: "cover",
                            }}
                            width="360"
                        />
                        <PlayCircleIcon className="absolute inset-0 m-auto text-white text-6xl" />
                    </div>
                    <div className="relative">
                        <Image
                            alt="Video thumbnail"
                            className="w-full h-auto"
                            height="240"
                            src={image002}
                            style={{
                                aspectRatio: "360/240",
                                objectFit: "cover",
                            }}
                            width="360"
                        />
                        <PlayCircleIcon className="absolute inset-0 m-auto text-white text-6xl" />
                    </div>
                    <div className="relative">
                        <Image
                            alt="Video thumbnail"
                            className="w-full h-auto"
                            height="240"
                            src={image002}
                            style={{
                                aspectRatio: "360/240",
                                objectFit: "cover",
                            }}
                            width="360"
                        />
                        <PlayCircleIcon className="absolute inset-0 m-auto text-white text-6xl" />
                    </div>
                </div>
            </section>
        </div>
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
