import { NavLink } from "react-router-dom"

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
        <div>
          <a
            className="group flex font-bold border-4 rounded-full py-2 px-6 hover:border-blue-600 hover:underline hover:decoration-blue-400"
            href="#footer"
            title="Contact Details"
          >
            <span>Connect</span>{" "}
          </a>
        </div>
      </nav>
    </header>
  )
}
