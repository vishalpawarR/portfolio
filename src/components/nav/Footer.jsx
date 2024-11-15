import { HeartIcon } from "@heroicons/react/24/solid"

export default function Footer() {
  return (
    <footer
      id="footer"
      className="mt-4 group flex flex-col justify-center items-center h-24"
    >
      <div className="flex flex-col items-center">
        <div className="footer-highlight w-64 border-solid border-b-2 mb-2 transition-all duration-300 ease-in-out group-hover:border-blue-400 group-hover:animate-pulse group-hover:w-20"></div>
        <p className="text-sm text-gray-400">
          Made with{" "}
          <HeartIcon className="w-4 h-4 inline text-red-500 animate-pulse" /> by
          Vishal Pawar
        </p>
      </div>
      <div className="text-xs text-gray-500 mt-2">
        © {new Date().getFullYear()} All rights reserved
      </div>
    </footer>
  )
}
