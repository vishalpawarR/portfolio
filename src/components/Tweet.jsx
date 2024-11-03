export default function Tweet() {
  return (
    <div className="flex flex-col max-w-xl mx-auto p-4 hover:bg-[#212529]">
      <div className="flex-shrink-0 flex items-center">
        <div>
          <img
            className="w-10 h-10 rounded-full border-2"
            src="./profile.webp"
            alt=""
          />
        </div>
        <div>
          <p className="pl-2 text-base font-semibold mt-1">
            <span>Vishal</span> ✨
          </p>
        </div>
      </div>
      <div className="px-12 flex gap-3 flex-col">
        <h2 className="text-xl font-bold text-white">Hello World!</h2>
        <p>
          This is My Site to showcases my journey and skills as a developer and
          highlights the projects I’ve worked on, especially with React,
          TypeScript, Express, MongoDB, and Redux.
        </p>
        <p>
          I focus on building interactive UIs with React, working with Express
          and MongoDB, and managing state with Redux.
        </p>
        <p>
          Connect with me to learn more about what I’m currently working on!
        </p>
      </div>
    </div>
  )
}
