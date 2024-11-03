export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "REST API",
    "Responsiveness",
    "VS Code",
    "Git",
    "GitHub",
    "GitHub Desktop",
    "TypeScript",
    "Redux",
    "Express",
    "Node.js",
    "JavaScript",
    "Next.js",
    "SCSS",
    "Figma",
    "MongoDB",
    "GraphQL",
    "Firebase",
    "Firestore",
    "Netlify",
    "Vercel",
  ]

  return (
    <>
      <div className="flex flex-wrap gap-2 items-center my-6 max-w-xl justify-center mx-auto">
        <h2 className="text-xl font-bold text-white">Skills</h2>
        {skills.map((skill, index) => (
          <button
            key={`${skill}-${index}`}
            className="flex-none px-4 py-2 rounded-full text-white transition-all duration-200 border border-gray-500 hover:bg-[#212529] cursor-default hover:border-white"
          >
            {skill}
          </button>
        ))}
      </div>
    </>
  )
}
