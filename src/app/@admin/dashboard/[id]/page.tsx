/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1vDS8wx1bUM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <>
      <div className="flex w-full min-h-[800px] items-start">
        <div className="h-screen w-full max-w-xs border-r bg-gray-100 dark:bg-gray-950 border-gray-200/40 dark:border-gray-800/40">
          <div className="flex h-full flex-col">
            <div className="flex h-20 items-center px-6">
              <Link className="flex items-center gap-2 text-xl font-bold" href="#">
                Acme Inc
              </Link>
            </div>
            <nav className="flex-1 overflow-auto">
              <div className="grid gap-4 p-6">
                <Link
                  className="flex h-10 items-center rounded-md bg-gray-100/50 px-4 text-sm font-medium transition-colors hover:bg-gray-100/70 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  href="#"
                >
                  Students
                </Link>
                <Link
                  className="flex h-10 items-center rounded-md bg-gray-100/50 px-4 text-sm font-medium transition-colors hover:bg-gray-100/70 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  href="#"
                >
                  Dashboard
                </Link>
                <Link
                  className="flex h-10 items-center rounded-md bg-gray-100/50 px-4 text-sm font-medium transition-colors hover:bg-gray-100/70 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  href="#"
                >
                  Projects
                </Link>
                <Link
                  className="flex h-10 items-center rounded-md bg-gray-100/50 px-4 text-sm font-medium transition-colors hover:bg-gray-100/70 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  href="#"
                >
                  Categories
                </Link>
              </div>
            </nav>
          </div>
        </div>
        <div className="flex-1 min-h-[800px]">
          <div className="grid h-screen items-center min-h-[800px] gap-4 px-6 md:gap-8 lg:gap-12">
            <div className="mx-auto w-full max-w-2xl space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Students</h1>
                <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Manage your students with our platform.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <input className="text-base" /* htmlFor="search"*/>
                    Search
                  </input>
                  <input className="w-full max-w-[400px] text-base" id="search" placeholder="Type to search..." />
                </div>
                <div className="space-y-2">
                  <input className="text-base" /* htmlFor="name" */>
                    Name
                  </input>
                  <input id="name" placeholder="Enter name..." />
                </div>
                <div className="space-y-2">
                  <input className="text-base" /* htmlFor="email"*/>
                    Email
                  </input>
                  <input id="email" placeholder="Enter email..." />
                </div>
                <div className="space-y-2">
                  <input className="text-base" /* htmlFor="role" */>
                    Role
                  </input>
                  <select className="min-w-[200px]" id="role">
                    <option>Teacher</option>
                    <option>Student</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <input className="text-base" /* htmlFor="notes" */>
                    Notes
                  </input>
                  <textarea className="min-h-[100px]" id="notes" placeholder="Enter notes..." />
                </div>
                <div className="space-y-2">
                  <input className="text-base">Status</input>
                  <div className="space-y-2">
                    <input defaultValue="active">
                      <div className="flex items-center gap-2">
                        <input id="active" value="active" />
                        <input className="text-sm font-medium cursor-pointer" /* htmlFor="active" */>
                          Active
                        </input>
                      </div>
                      <div className="flex items-center gap-2">
                        <input id="inactive" value="inactive" />
                        <input className="text-sm font-medium cursor-pointer" /* htmlFor="inactive" */>
                          Inactive
                        </input>
                      </div>
                    </input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

