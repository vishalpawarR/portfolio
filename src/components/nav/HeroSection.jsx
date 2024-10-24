import heroImg from "../../assets/hero-img.png"
import { DocumentIcon } from "@heroicons/react/24/outline"
import { BriefcaseIcon } from "@heroicons/react/24/solid"
import { CakeIcon } from "@heroicons/react/24/solid"

export default function HeroSection() {
  return (
    <div>
      <div className="nav-container">
        <img
          src={heroImg}
          alt="Hero image with my details"
        />
        <div className="max-w-xl mx-auto">
          <div className="flex md:block my-4">
            <div className="relative mr-auto">
              <img
                className="md:absolute left-8 -top-14 rounded-full w-20 md:w-32 md:-top-20 block border-4 border-white"
                src="./profile.webp"
                alt="Profile pic"
              />
            </div>
            <div className="flex justify-end my-4">
              <a
                target="_blank"
                title="👁️ View | ⬇️ Download"
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
          <div className="flex text-[#868e96] mb-4 border-dotted border-b-[1px] pb-4 border-gray-500">
            <p className="flex mr-4">
              <BriefcaseIcon className="w-5 mr-2" />
              Available
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
