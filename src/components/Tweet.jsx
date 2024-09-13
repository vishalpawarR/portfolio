export default function Tweet() {
  return (
    <div className="flex gap-2 max-w-xl mx-auto p-4 hover:bg-[#212529]">
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
            <img
            className="w-10 h-10 rounded-full border-2"
              src="./profile.webp" alt="" />
        </div>
        <div>
            <p className="text-base font-semibold mt-1"><span className="hover:underline">Vishal</span> ✨</p>
            <h2 className="text-xl font-bold text-white mb-3">Key Contributions and Achievements</h2>
            <ul className="list-disc pl-5">
              <li className="mb-2"><strong>Developed user-centric web applications:</strong> Designed and implemented web solutions that focus on delivering a smooth and intuitive user experience, adapting to various devices and screen sizes.</li>
              <li className="mb-2"><strong>Streamlined web application performance:</strong> Leveraged cutting-edge tools and techniques to enhance application speed and efficiency, ensuring a smooth and uninterrupted user experience across various platforms.</li>
              <li className="mb-2"><strong>Collaborated in a dynamic team environment:</strong> Worked closely with cross-functional teams, contributing to project planning, execution, and troubleshooting, while supporting the professional growth of junior team members.</li>
            </ul>
        </div>
    </div>
  )
}
