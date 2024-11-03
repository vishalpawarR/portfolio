import Tweet from "../components/Tweet"
import MetaTags from "../components/MetaTags"
import HeroSection from "../components/nav/HeroSection"
import Skills from "../components/Skills"

export default function Home() {
  return (
    <div className="">
      <MetaTags title="Vishal Pawar | Software Engineer" />
      <HeroSection />
      <Tweet />
      <Skills />
    </div>
  )
}
