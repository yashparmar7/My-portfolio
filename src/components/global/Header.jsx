import { CodeIcon } from "lucide-react"

export const Header = () =>{
    return(
        <header className="px-4 h-14 flex items-center lg:px-6">
           <div className="flex items-center justify-center">
            <CodeIcon size={24} className="text-black"></CodeIcon>
            <span className="text-md font-semibold text-zinc-800 ml-3">
                Yash Portfolio
            </span>
           </div>

        {/* Navbar */}

           <nav className="ml-auto flex gap-4 sm:gap-6"> 

            <div className="text-md font-medium hover:underline underline-offset-4">
                Home
            </div>
            <div className="text-md font-medium hover:underline underline-offset-4">
                Project
            </div>
            <div className="text-md font-medium hover:underline underline-offset-4">
                Skills
            </div>
            <div className="text-md font-medium hover:underline underline-offset-4">
                Contact
            </div>

           </nav>
        </header>
    )
}