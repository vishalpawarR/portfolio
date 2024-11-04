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
      <div className="md:px-12 flex gap-3 flex-col leading-loose">
        <h2 className="mt-3 md:mt-0 text-xl font-bold text-white">
          Hello World!
        </h2>
        <p>
          I’m Vishal, with expertise in React.js, Tailwind CSS, and TypeScript,
          skilled in creating visually engaging and optimized user interfaces
          that deliver a seamless user experience. My experience extends to
          implementing efficient state management with Redux, crafting type-safe
          components, and improving code reliability and maintainability.
        </p>
        <p>
          Connect with me to learn more about what I’m currently working on!
        </p>
      </div>
    </div>
  )
}
