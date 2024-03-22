/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EdQlGfLIOBv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  const collaborators = [
    {
      "name": "Filipe Calegario",
      "cargo": "Professor",
      "profileImage": ""
    },
    {
      "name": "Matheus",
      "cargo": "Monitor",
      "profileImage": ""
    },
    {
      "name": "Charles",
      "cargo": "Monitor",
      "profileImage": ""
    },
    {
      "name": "Bianca",
      "cargo": "Monitor",
      "profileImage": ""
    },
    
    {
      "name": "Pedro",
      "cargo": "Monitor",
      "profileImage": ""
    },
  ]

  return (
    <div className="flex flex-col min-h-[100dvh] bg-white text-zinc-900 px-6">
      <main className="flex-1">
        <section className="w-full py-6 sm:py-12 md:py-12 lg:py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-zinc-900">Sobre</h1>
                <p className="max-w-full text-gray-500 md:text-xl dark:text-gray-400">
                  A galeria foi criada com o objetivo de exibir os projetos realizados pelos alunos que participaram da 
                  disciplina de Criatividade Computacional, destacando a diversidade de aplicações possíveis da inteligência artificial.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-2 md:px-6 lg:grid-cols-3 lg:gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Conheça o time</h2>
            </div>
            <div className="grid col-span-2 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {
                collaborators.map(({ name, profileImage, cargo }, index) => {
                  return <div key={index} className="flex text-start items-start gap-1 hover:scale-110 hover:text-zinc-900 duration-200">
                    <Image
                      alt="Avatar"
                      className="rounded-2xl bg-black aspect-square overflow-hidden object-cover object-center"
                      height="100"
                      src="/placeholder.svg"
                      width="100"
                    />
                    <div className="flex flex-col gap-1 ml-5">
                      <h3 className="font-bold">{name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{cargo}</p>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}