import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="h-16 flex items-center">
        <nav className='flex max-w-screen-xl mx-auto px-6 items-center'>
            <h1 className="text-2xl font-bold text-white">
              <NavLink>&lt;VP /&gt;</NavLink>
            </h1>
        </nav>
    </header>
  )
}