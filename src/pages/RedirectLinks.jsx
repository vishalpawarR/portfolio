import { Link } from "react-router-dom"

const redirectLinks = [
  {
    path: "direct-apply",
    label: "Direct Apply",
    source: "direct",
    medium: "direct_application",
  },
  {
    path: "hire-resume",
    label: "Resume portfolio view",
    source: "resume",
    medium: "document",
  },
  {
    path: "hire-email",
    label: "Email",
    source: "email",
    medium: "direct",
  },
  {
    path: "hire-linkedin",
    label: "LinkedIn",
    source: "linkedin",
    medium: "social",
  },
  {
    path: "hire-whatsapp",
    label: "WhatsApp",
    source: "whatsapp",
    medium: "social",
  },
  {
    path: "hire-naukri",
    label: "Naukri",
    source: "naukri",
    medium: "job_board",
  },
  {
    path: "hire-wellfound",
    label: "WellFound",
    source: "wellfound",
    medium: "job_board",
  },
  {
    path: "hire-weekday",
    label: "Weekday",
    source: "weekday",
    medium: "job_board",
  },
  {
    path: "hire-yc",
    label: "Y Combinator",
    source: "ycombinator",
    medium: "job_board",
  },
  {
    path: "hire-uplers",
    label: "Uplers",
    source: "uplers",
    medium: "job_board",
  },
  {
    path: "hire-crossover",
    label: "Crossover",
    source: "crossover",
    medium: "job_board",
  },
  {
    path: "hire-flexiple",
    label: "Flexiple",
    source: "flexiple",
    medium: "job_board",
  },
  {
    path: "hire-hirist",
    label: "Hirist",
    source: "hirist",
    medium: "job_board",
  },
  {
    path: "hire-reactflux",
    label: "React Flux",
    source: "reactflux",
    medium: "community",
  },
]

function RedirectLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {redirectLinks.map((link) => (
        <Link
          key={link.path}
          to={`/${link.path}`}
          className="w-full h-full p-3 bg-[#1f2937] rounded-lg text-text-2 hover:no-underline hover:bg-none border hover:border-blue-600 hover:text-blue-600"
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}

export default RedirectLinks
