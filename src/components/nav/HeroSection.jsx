import heroImg from "../../assets/hero-img.png"
import { DocumentIcon } from "@heroicons/react/24/outline"
import { CheckBadgeIcon } from "@heroicons/react/24/solid"
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
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">Vishal Pawar</h1>{" "}
              <div>
                <CheckBadgeIcon className="w-6 ml-1 mt-1 text-blue-600" />
              </div>
            </div>
            <p className="leading-tight italic text-sm font-semibold">
              Software Developer | MERN Stack Developer
            </p>
            <p>
              I’m a Frontend Developer with 3 years of experience, passionate
              about building interactive UIs. My focus is on React (Next.js)
            </p>
            <div className="flex text-[#868e96] mb-4 border-dotted border-b-[1px] pb-4 border-gray-500  text-sm">
              <p className="flex mr-4">
                <BriefcaseIcon className="w-5 mr-2" />
                Available
              </p>
              <p className="flex mr-4">
                <CakeIcon className="w-5 mr-2" /> August, 8
                <sup className="mt-3">th</sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
