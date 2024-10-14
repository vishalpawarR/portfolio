import { Outlet } from "react-router-dom"
import Header from "../components/nav/Header"
import Footer from "../components/nav/Footer"
import MetaTags from "../components/MetaTags"

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <MetaTags
        title="Vishal Pawar | Software Engineer"
        description="Vishal Pawar is a versatile Software Engineer with over three years of experience in developing innovative web applications across various technologies. Proficient in JavaScript, TypeScript, and SQL, he possesses strong knowledge of React.js and Next.js, alongside expertise in GraphQL and other modern web technologies. With a proven track record of optimizing performance, mentoring junior developers, and collaborating with cross-functional teams, Vishal is dedicated to delivering seamless user experiences. He is committed to implementing responsive design and adhering to best practices in software development."
        image="https://vishalpawar.netlify.app/hero-img.jpeg"
        url="https://vishalpawar.netlify.app/"
      />
      <Header />
      <main className="flex-grow max-w-3xl mx-auto px-3">
        {/* <Nav /> */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
