export default function Tweet() {
  return (
    <div className="flex gap-2 max-w-xl mx-auto p-4 hover:bg-[#212529]">
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
        <img
          className="w-10 h-10 rounded-full border-2"
          src="./profile.webp"
          alt=""
        />
      </div>
      <div>
        <p className="text-base font-semibold mt-1">
          <span className="hover:underline">Vishal</span> ✨
        </p>
        <h2 className="text-xl font-bold text-white mb-3">
          Key Contributions and Achievements
        </h2>
        <ul className="list-disc pl-5">
          <li className="mb-2">
            <strong>
              3 years of experience in the development, design, and testing
              phases of web applications:
            </strong>{" "}
            Leveraged React.js and TypeScript to build responsive,
            high-performance user interfaces.
          </li>
          <li className="mb-2">
            <strong>
              Strong expertise in React.js, Next.js, TypeScript, and JavaScript
              ES6+:
            </strong>{" "}
            Focused on building responsive, high-performance user interfaces.
          </li>
          <li className="mb-2">
            <strong>Proficient in performance optimization techniques:</strong>{" "}
            Utilized useMemo, useCallback, and React.memo to reduce re-renders
            and enhance app performance.
          </li>
          <li className="mb-2">
            <strong>
              Hands-on experience with state management libraries:
            </strong>{" "}
            Experienced in using Redux and Context API for effective state
            management.
          </li>
          <li className="mb-2">
            <strong>Expertise in integrating RESTful APIs and GraphQL:</strong>{" "}
            Facilitated efficient data fetching and seamless communication
            between client and server.
          </li>
          <li className="mb-2">
            <strong>Good knowledge of TypeScript:</strong> Developed type-safe
            React components to reduce bugs and improve code quality.
          </li>
        </ul>
      </div>
    </div>
  )
}
