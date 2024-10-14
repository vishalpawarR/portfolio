import { Helmet } from "react-helmet"

// eslint-disable-next-line react/prop-types
const MetaTags = ({ title, description, image, url }) => {
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
