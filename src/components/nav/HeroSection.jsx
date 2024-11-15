import heroImg from "../../assets/hero-img.png"
import {
  BriefcaseIcon,
  CheckBadgeIcon,
  CalendarDaysIcon,
  MapPinIcon,
  AtSymbolIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid"
import { TbBrandGithubFilled, TbBrandWhatsapp } from "react-icons/tb"
import { FaTwitter, FaLinkedinIn } from "react-icons/fa"

export default function HeroSection() {
  return (
    <div>
      <div className="nav-container">
        <img
          src={heroImg}
          alt="Hero image with my details"
        />
        <div className="max-w-xl mx-auto">
          <div className="flex md:block my-4 md:pb-12">
            <div className="relative mr-auto">
              <img
                className="md:absolute left-8 -top-14 rounded-full w-20 md:w-32 md:-top-20 block border-4 border-white"
                src="./profile.png"
                alt="Profile pic"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
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
              Building an <strong className="italic">e-commerce</strong>{" "}
              platform for the{" "}
              <strong className="italic">New Jersey, USA</strong> based startup{" "}
              <strong className="italic">NinetyNine Tech </strong>
              using the <strong className="italic">MERN</strong> stack.
            </p>
            <div className="flex text-sm flex-wrap md:flex-nowrap gap-1 md:justify-start justify-center items-center w-full border-b-[1px] border-b-solid border-gray-500 pb-4 mb-4">
              <p className="font-semibold">Contact me:</p>
              {/* <p className="flex py-2 px-2 rounded-md hover:px-4 hover:bg-[#495057] hover:text-white transition-all duration-300 ease-in-out group">
                <BriefcaseIcon className="w-5 text-[#868e96] group-hover:text-white transition-colors duration-300 ease-in-out" />
                <span className="max-w-0 overflow-hidden md:whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out">
                  Available
                </span>
              </p> */}
              <div className="flex py-2 px-2 rounded-md hover:px-4 hover:bg-[#495057] hover:text-white transition-all duration-300 ease-in-out group">
                <MapPinIcon className="w-5 text-[#868e96] group-hover:text-white transition-colors duration-300 ease-in-out" />
                <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out">
                  Bangalore, India
                </span>
              </div>
              <div>
                <a
                  href="mailto:vishalpawarr.git@gmail.com"
                  title="Email me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex py-2 px-2 rounded-md hover:px-4 hover:bg-[#495057] hover:text-white transition-all duration-300 ease-in-out group"
                >
                  <AtSymbolIcon className="w-5 text-[#868e96] group-hover:text-white transition-colors duration-300 ease-in-out" />
                  <span className="max-w-0 overflow-hidden md:whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out">
                    Email
                  </span>
                </a>
              </div>
              <div>
                <a
                  href="tel:+91-7411334439"
                  title="Mobile number"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex py-2 px-2 rounded-md hover:px-4 hover:bg-[#495057] hover:text-white transition-all duration-300 ease-in-out group"
                >
                  <DevicePhoneMobileIcon className="w-5 text-[#868e96] group-hover:text-white transition-colors duration-300 ease-in-out" />
                  <span className="max-w-0 overflow-hidden md:whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out">
                    Contact
                  </span>
                </a>
              </div>
              <div>
                <a
                  href="https://wa.me/+917411334439?text=Hi%20Vishal,%20I%20am%20coming%20here%20from%20your%20portfolio%20and%20I%20would%20like%20to%20discuss%20about%20an%20opportunity"
                  target="_blank"
                  title="Connect on Whatsapp"
                  rel="noopener noreferrer"
                  className="flex py-2 px-2 rounded-md hover:px-4 hover:bg-[#495057] hover:text-white transition-all duration-300 ease-in-out group"
                >
                  <TbBrandWhatsapp className="w-5 h-5 text-[#868e96] group-hover:text-white transition-colors duration-300 ease-in-out" />
                  <span className="max-w-0 overflow-hidden md:whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out">
                    Whatsapp
                  </span>
                </a>
              </div>
              <div>
                <a
                  href="https://x.com/VishalPawar_R"
                  title="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex py-2 px-2 rounded-md hover:px-4 hover:bg-[#495057] hover:text-white transition-all duration-300 ease-in-out group"
                >
                  <FaTwitter className="w-5 h-5 text-[#868e96] group-hover:text-white transition-colors duration-300 ease-in-out" />
                  <span className="max-w-0 overflow-hidden md:whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out">
                    Twitter
                  </span>
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/vishalpawarr/"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex py-2 px-2 rounded-md hover:px-4 hover:bg-[#495057] hover:text-white transition-all duration-300 ease-in-out group"
                >
                  <FaLinkedinIn className="w-5 h-5 text-[#868e96] group-hover:text-white transition-colors duration-300 ease-in-out" />
                  <span className="max-w-0 overflow-hidden md:whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out">
                    LinkedIn
                  </span>
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/vishalpawarR/"
                  title="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex py-2 px-2 rounded-md hover:px-4 hover:bg-[#495057] hover:text-white transition-all duration-300 ease-in-out group"
                >
                  <TbBrandGithubFilled className="w-5 h-5 text-[#868e96] group-hover:text-white transition-colors duration-300 ease-in-out" />
                  <span className="max-w-0 overflow-hidden md:whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out">
                    Github
                  </span>
                </a>
              </div>
              <div>
                <a
                  href="https://calendly.com/vishalpawarr/30min"
                  title="Schedule a Call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex py-2 px-2 rounded-md hover:px-4 hover:bg-[#495057] hover:text-white transition-all duration-300 ease-in-out group"
                >
                  <CalendarDaysIcon className="w-5 text-[#868e96] group-hover:text-white transition-colors duration-300 ease-in-out" />
                  <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out">
                    Schedule&nbsp;a&nbsp;Call
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
