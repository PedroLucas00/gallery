"use client"

import Image from "next/image";
import logo from "@/images/logo.png"
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch('/api/student').then(response => response.json()).then(data => console.log(data))
  }, [])

  return (
    <div className="flex bg-white h-[33rem] min-h-full items-center text-center items-center">
      <div className="container grid justify-center items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-2 ">
          <div className="flex space-y-1 justify-center justify-items-center items-center">
            <Image alt="Logo" className="p-0 m-2" height="150" src={logo} width="150" />
            <h1 className="text-6xl text-orange-600 font-bold tracking-tighter sm:text-6xl md:text-8xl">GALLERIA</h1>
          </div>
          <div className="space-y-1 justify-center justify-items-center items-center">
            <p className="text-zinc-700 md:text-xl/relaxed dark:text-zinc-700">
              A galeria com projetos criados por alunos 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
