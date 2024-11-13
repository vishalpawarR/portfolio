export default function Skills() {
  const skills = [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "React Redux",
    "Redux Toolkit",
    "JavaScript",
    "Jest",
    "React Testing Library",
    "React Router",
    "React Context API",
    "React Hooks",
    "React Hook Form",
    "MongoDB",
    "GraphQL",
    "Node.js",
    "REST API",
    "Express.js",
    "Postman",
    "Git",
    "HTML",
    "CSS",
    "Bootstrap",
    "Responsiveness",
    "VS Code",
    "GitHub",
    "GitHub Desktop",
    "SCSS",
    "Figma",
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
            {index < 4 ? <span className="font-bold">{skill}</span> : skill}
          </button>
        ))}
      </div>
    </>
  )
}
