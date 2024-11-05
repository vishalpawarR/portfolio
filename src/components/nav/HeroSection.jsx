import heroImg from "../../assets/hero-img.png"
import { CheckBadgeIcon } from "@heroicons/react/24/solid"
import { MapPinIcon } from "@heroicons/react/24/solid"
import { AtSymbolIcon } from "@heroicons/react/24/solid"
import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid"

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
                className="group flex font-bold border-4 rounded-full py-2 px-6 hover:border-blue-600 hover:underline hover:decoration-blue-400"
                href="#footer"
                title="Contact Details"
              >
                <span>Connect</span>{" "}
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
              I enjoy building web applications and learning new technologies.
            </p>
            <div className="flex text-[#868e96] mb-4 border-dotted border-b-[1px] pb-4 border-gray-500  text-sm">
              {/* <p className="flex mr-4">
                <BriefcaseIcon className="w-5 mr-2" />
                Available
              </p> */}
              <p className="flex items-center mr-4">
                <MapPinIcon className="w-5 mr-2" /> Bangalore, India
              </p>
              <p className="flex items-center mr-4">
                <AtSymbolIcon className="w-5 mr-2" />{" "}
                <a
                  href="mailto:vishalpawarr.git@gmail.com"
                  title="Email me"
                >
                  Email
                </a>
              </p>
              <p className="flex items-center mr-4">
                <DevicePhoneMobileIcon className="w-5 mr-2" />{" "}
                <a
                  href="tel:+91-7411334439"
                  title="Mobile number"
                >
                  Contact
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
