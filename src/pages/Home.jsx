import Nav from "../components/nav/Nav"
import Tweet from "../components/Tweet"
import MetaTags from "../components/MetaTags"

export default function Home() {
  return (
    <div className="">
      <MetaTags title="Vishal Pawar | Software Engineer" />
      <Nav />
      <Tweet />
    </div>
  )
}
