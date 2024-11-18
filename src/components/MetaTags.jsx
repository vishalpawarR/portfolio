import { Helmet } from "react-helmet"

// eslint-disable-next-line react/prop-types
const MetaTags = ({ title }) => {
  const image = "https://vishalpawar.dev/hero-img.png"
  const url = "https://vishalpawar.dev/"
  const description =
    "Vishal Pawar is a versatile Software Engineer with over three years of experience in developing innovative web applications across various technologies. Proficient in JavaScript, TypeScript, and SQL, he possesses strong knowledge of React.js, TypeScript and Next.js, alongside expertise in GraphQL and other modern web technologies. With a proven track record of optimizing performance, mentoring junior developers, and collaborating with cross-functional teams, Vishal is dedicated to delivering seamless user experiences. He is committed to implementing responsive design and adhering to best practices in software development."
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        property="og:title"
        content={title}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:image"
        content={image}
      />
      <meta
        property="og:url"
        content={url}
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:title"
        content={title}
      />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta
        name="twitter:image"
        content={image}
      />
    </Helmet>
  )
}

export default MetaTags
