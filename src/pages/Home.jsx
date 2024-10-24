import Tweet from "../components/Tweet"
import MetaTags from "../components/MetaTags"
import HeroSection from "../components/nav/HeroSection"

export default function Home() {
  return (
    <div className="">
      <MetaTags title="Vishal Pawar | Software Engineer" />
      <HeroSection />
      <Tweet />
    </div>
  )
}
