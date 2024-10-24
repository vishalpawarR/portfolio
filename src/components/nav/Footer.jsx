import { PhoneIcon } from "@heroicons/react/24/solid"

export default function Footer() {
  return (
    <footer
      id="footer"
      className="group flex flex-col justify-center items-center h-24"
    >
      <div className="flex flex-col items-center">
        <div className="footer-highlight w-64 border-solid border-b-2  mb-2 transition-all duration-300 ease-in-out group-hover:border-blue-400 group-hover:animate-pulse group-hover:w-20"></div>
        <h2 className="">Get in Touch</h2>
      </div>
      <div className="flex pb-4">
        <div>
          <a
            className="w-10 h-10 grid place-items-center rounded-md hover:bg-[#495057]"
            href="tel:+91-7411334439"
            target="_blank"
            title="Quick Call 📲"
          >
            <PhoneIcon className="w-5" />
          </a>
        </div>
        <div>
          <a
            className="w-10 h-10 grid place-items-center rounded-md hover:bg-[#495057]"
            href="https://wa.me/+917411334439?Hi Vishal, I saw your profile and would like to discuss job opportunities!"
            target="_blank"
            title="Ping Me on WhatsApp 📨"
          >
            <img
              src="./icons/whatsapp.svg"
              alt=""
              className="w-5"
            />
          </a>
        </div>
        <div>
          <a
            className="w-10 h-10 grid place-items-center rounded-md hover:bg-[#495057]"
            href="mailto:vishalpawarr.git@gmail.com"
            target="_blank"
            title="Email Me 📧"
          >
            <img
              src="./icons/gmail.svg"
              alt=""
              className="w-5"
            />
          </a>
        </div>
        <div>
          <a
            className="w-10 h-10 grid place-items-center rounded-md hover:bg-[#495057]"
            href="https://x.com/VishalPawar_R"
            target="_blank"
            title="Connect on Twitter 🐤"
          >
            <img
              src="./icons/x.svg"
              alt=""
              className="w-5"
            />
          </a>
        </div>
        <div>
          <a
            className="w-10 h-10 grid place-items-center rounded-md hover:bg-[#495057]"
            href="https://www.linkedin.com/in/vishalpawarr/"
            target="_blank"
            title="View My LinkedIn Profile 💼"
          >
            <img
              src="./icons/linkedin.svg"
              alt=""
              className="w-5"
            />
          </a>
        </div>
        <div>
          <a
            className="w-10 h-10 grid place-items-center rounded-md hover:bg-[#495057]"
            href="https://github.com/vishalpawarR/"
            target="_blank"
            title="Review My Code on GitHub 💻"
          >
            <img
              src="./icons/github.svg"
              alt=""
              className="w-5"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
