import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="h-20 flex items-center">
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
        <div>
          <a
            className="text-xl text-blue-400 font-bold hover:text-white"
            href="#footer"
          >
            <span className="hover:underline hover:decoration-blue-400">
              Hire Me
            </span>{" "}
            💼
          </a>
        </div>
      </nav>
    </header>
  )
}
