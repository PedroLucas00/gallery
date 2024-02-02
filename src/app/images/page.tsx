/**
 * v0 by Vercel.
 * @see https://v0.dev/t/b2aVLGSIKii
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import image001 from "@/images/image001.jpg"
import image002 from "@/images/image002.jpg"
import Image from "next/image"

export default function ImagesPage() {
    return (
        <div className="bg-white">
            <header className="text-left pl-9 py-16">
                <h1 className="text-6xl font-bold mt-12 mb-8 text-slate-950">IMAGES</h1>
            </header>
            <section className="px-8 pb-16">
                <div className="grid grid-cols-3 gap-4">
                    <Image
                        alt="Placeholder image"
                        className="w-full h-auto"
                        height="300"
                        src={image001}
                        style={{
                            aspectRatio: "400/300",
                            objectFit: "cover",
                        }}
                        width="400"
                    />
                    <Image
                        alt="Placeholder image"
                        className="w-full h-auto"
                        height="300"
                        src={image002}
                        style={{
                            aspectRatio: "400/300",
                            objectFit: "cover",
                        }}
                        width="400"
                    />
                    <Image
                        alt="Placeholder image"
                        className="w-full h-auto"
                        height="300"
                        src={image001}
                        style={{
                            aspectRatio: "400/300",
                            objectFit: "cover",
                        }}
                        width="400"
                    />
                    <Image
                        alt="Placeholder image"
                        className="w-full h-auto"
                        height="300"
                        src={image002}
                        style={{
                            aspectRatio: "400/300",
                            objectFit: "cover",
                        }}
                        width="400"
                    />
                    <Image
                        alt="Placeholder image"
                        className="w-full h-auto"
                        height="300"
                        src={image001}
                        style={{
                            aspectRatio: "400/300",
                            objectFit: "cover",
                        }}
                        width="400"
                    />
                    <Image
                        alt="Placeholder image"
                        className="w-full h-auto"
                        height="300"
                        src={image002}
                        style={{
                            aspectRatio: "400/300",
                            objectFit: "cover",
                        }}
                        width="400"
                    />
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
