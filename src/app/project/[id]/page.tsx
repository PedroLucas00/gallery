'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ivJRUQBOPwG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Image from "next/image";
import Leornado from "@/images/image001.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

export default function ProjectInformationPage() {
    const [project, setProject] = useState() as any;
    const [loading, setLoading] = useState(true);

    const router = useParams();

    const { id } = router;

    useEffect(() => {
        fetch("/api/project/" + id).then(response => response.json()).then(response => {
            setProject(response.data)
            setLoading(false)
        }).catch(error => console.log(error))
    }, [])

    console.log(project)

    return (
        <div>
            {
                loading === true ? <div></div> : (<div className="bg-[#ffffff] text-slate-950 min-h-screen flex"> <div className="flex flex-col w-3/5 p-8 space-y-6">
                    <div className="text-6xl font-bold leading-none">{project.name}</div>
                    <div className="text-sm">
                        {project.objective}{"\n            "}
                        {/* <button className="text-[#bd1e59] font-semibold">MORE</button> */}
                    </div>
                    <div className="text-3xl font-semi-bold leading-none">Ferramentas</div>
                    <div className="text-sm">
                        <div>
                            {project.informations}
                        </div>
                    </div>
                   {/*  <div className="text-3xl font-semi-bold leading-none">Autores</div>
                    <div className="flex items-center grid grid-cols-5 gap-1">
                        <div>
                            <Image
                                alt="Interior of a Cathedral"
                                className="object-cover rounded-full"
                                height="100"
                                src={Leornado}
                                style={{
                                    aspectRatio: "100/100",
                                    objectFit: "cover",
                                }}
                                width="100"
                            />
                            <div>
                                <div className="font-semibold">Samuel Prout</div>
                                <div className="text-sm">PAINTER</div>
                            </div>
                        </div>
                        <div>
                            <Image
                                alt="Interior of a Cathedral"
                                className="object-cover rounded-full"
                                height="100"
                                src={project.image !== null ? project.image : Leornado}
                                style={{
                                    aspectRatio: "100/100",
                                    objectFit: "cover",
                                }}
                                width="100"
                            />
                            <div>
                                <div className="font-semibold">Samuel Prout</div>
                                <div className="text-sm">PAINTER</div>
                            </div>
                        </div>
                    </div>
                    <div className="text-2xl font-semi-bold leading-none">Mais sobre</div> */}
                    <div className="flex-row">
                        Link do projeto <a href={project.projectUrl}>{project.projectUrl}</a>
                    </div>
                </div>
                    <div className="w-2/5 relative">
                        <Image
                            alt="Interior of a Cathedral"
                            className="object-cover w-full h-full"
                            height="700"
                            src={Leornado}
                            style={{
                                aspectRatio: "500/700",
                                objectFit: "cover",
                            }}
                            width="500"
                        />
                    </div>
                </div>)}
        </div>
    )
}

