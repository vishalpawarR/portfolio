import { Link, NavLink } from "react-router-dom"
import heroImg from "../../assets/hero-img.png"
import { DocumentIcon, LinkIcon } from "@heroicons/react/24/outline"
import { BriefcaseIcon } from "@heroicons/react/24/solid"
import { CakeIcon } from "@heroicons/react/24/solid"

export default function Nav() {
  return (
    <div>
      <div className="nav-container">
        <img
          src={heroImg}
          alt="Hero image with my details"
        />
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <img
              className="absolute left-8 -top-14 rounded-full w-20 md:w-32 md:-top-20 block border-4 border-white"
              src="./profile.webp"
              alt="Profile pic"
            />
          </div>
          <div className="flex justify-end my-4">
            <a
              target="_blank"
              href="./resume/Vishal-Pawar-CV.pdf"
              className="flex font-bold bg-blue-600 border-blue-600 border-4 rounded-full py-2 px-6 hover:border-white"
            >
              Resume
              <DocumentIcon
                className="w-5 ml-1"
                style={{ strokeWidth: 3 }}
              />
            </a>
          </div>
          <h2 className="text-4xl font-bold">Vishal Pawar</h2>{" "}
          {/* Try adding the tick mark sing near the name */}
          <p className="mb-2">
            Bringing Figma designs to life with clean, functional UI! ✨
          </p>
          <p className="mb-2 leading-tight">
            Frontend Developer | React.js ⚛️ | Next.js | TypeScript | Formerly
            at Empower School of Health.
          </p>
          <div className="flex text-[#868e96] mb-4">
            <p className="flex mr-4">
              <BriefcaseIcon className="w-5 mr-2" />
              Available
            </p>
            <p className="flex mr-4 text-blue-400 font-bold">
              <Link
                to="/links"
                className="flex hover:underline"
              >
                <LinkIcon className="w-5 mr-2" />{" "}
                <span className="hover:text-white">/links</span>
              </Link>
            </p>
            <p className="flex mr-4">
              <CakeIcon className="w-5 mr-2" /> August 8th
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
