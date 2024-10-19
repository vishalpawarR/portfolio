import MetaTags from "../components/MetaTags"
import { Link } from "react-router-dom"

export default function PageNotFound() {
  return (
    <>
      <div className="text-center">
        <MetaTags title="404 - Vishal Pawar" />
        <div className="flex justify-center items-center">
          <h1 className="text-xl">
            Whoops! This page is missing. 🚷💔 Time to explore the homepage? 🏡
          </h1>
        </div>
        <p className=" m-4 text-blue-400 font-bold text-center">
          <Link
            to="/"
            className="hover:underline"
          >
            {" "}
            <span className="hover:text-white">/go to homepage</span>
          </Link>
        </p>
      </div>
    </>
  )
}
