import { NavLink } from "react-router-dom"
import { DocumentIcon } from "@heroicons/react/24/outline"

export default function Header() {
  return (
    <header className="h-20 flex items-center bg-surface-alpha sticky top-0 left-0 z-10">
      <nav className="flex w-full px-6 items-center">
        <NavLink
          to="/"
          className="mr-auto block"
        >
          <img
            className="w-14 block animate-spin-slow"
            src="./icons/nav-icon.svg"
            alt=""
          />
        </NavLink>
        <div className="flex justify-end my-4">
          <a
            target="_blank"
            title="View | Download CV"
            href="./resume/Vishal-Pawar-CV.pdf"
            className="group flex font-bold bg-blue-600 border-blue-600 border-4 rounded-full py-2 px-6 hover:border-white"
          >
            Resume
            <DocumentIcon
              className="w-5 ml-1 group-hover:animate-bounce"
              style={{ strokeWidth: 3 }}
            />
          </a>
        </div>
      </nav>
    </header>
  )
}
