'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/b2aVLGSIKii
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import image001 from "@/images/image001.jpg"
import image002 from "@/images/image002.jpg"
import Image from "next/image"
import { useEffect, useState } from "react";
import axios from "axios"

export default function ProjectPage() {
    const [listProjects, setListProjects] = useState([]);

    useEffect(() => {
        axios.get('/api/project').then(response => setListProjects(response.data));
    }, []);

    return (
        <div className="bg-white px-6">
            <header className="text-left pl-9 py-0">
                <h1 className="text-6xl font-bold mt-12 mb-8 text-slate-950">Projetos</h1>
            </header>
            <section className="px-8 pb-16">
                <div className="grid grid-cols-3 gap-4">
                    {
                        listProjects.map(({name, id, type}, index) => {
                            return (
                                <Link key={index} href={`/project/${id}`}>
                                    <div className="w-full h-96 ">
                                        <Image
                                            alt="Placeholder image"
                                            className="w-full h-auto rounded-2xl"
                                            height="300"
                                            src={image001}
                                            style={{
                                                aspectRatio: "400/300",
                                                objectFit: "cover",
                                            }}
                                            width="400"
                                        />
                                        <div className="py-4">
                                            <div className="text-1xl font-bold leading-none text-slate-950">{name}</div>
                                            <div className="text-1xl font-semi-bold leading-none text-slate-950 py-2">{type !== null ? type : "Gallery"}</div>
                                        </div>
                                    </div>
                                </Link>
                            )

                        })

                    }
                </div>
            </section>
        </div>
    )
}
