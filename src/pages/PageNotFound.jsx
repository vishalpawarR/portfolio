import MetaTags from "../components/MetaTags"
import { Link } from "react-router-dom"

export default function PageNotFound() {
  return (
    <>
      <div className="text-center">
        <MetaTags title="404 - Vishal Pawar" />
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 my-4 rounded-md">
          <h2 className="text-lg font-bold text-yellow-800 mb-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            Notice
          </h2>
          <p className="text-yellow-700 text-sm leading-relaxed italic">
            If you&apos;re visiting using a link shared before
            <span className="font-medium bg-yellow-200 px-2 rounded mx-1">
              Nov 03, 2024
            </span>
            please note that the content has been moved.
          </p>
          <hr className="my-4 border-t border-yellow-800/60" />
          <div className="mt-4">
            <p className="text-yellow-800 font-bold">
              Whoops! This page is missing. 🚷💔 Time to explore the homepage?
              🏡
            </p>
            <p className="mt-2">
              <Link
                to="/"
                className="bg-yellow-200 px-3 py-1 rounded-md text-yellow-900 hover:bg-yellow-300 font-bold transition-all group inline-flex items-center"
              >
                Go to homepage
                <span className="transform transition-transform duration-300 ml-2 group-hover:scale-150">
                  →
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
