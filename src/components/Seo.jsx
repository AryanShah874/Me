import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://aryan-shah.vercel.app'
const DEFAULT_IMAGE = `${SITE_URL}/profile.jpg`
const DEFAULT_DESCRIPTION = "Hi, I’m Aryan — a Software Engineer from India with experience across Jamnagar, Jaipur, Mumbai, and Delhi. I hold a B.Tech in Computer Science and Engineering from LNMIIT, Jaipur, and I’m currently working as an Associate Software Engineer at E2E Cloud, building and maintaining full-stack features for cloud infrastructure products. I love building scalable, reliable systems that combine clean engineering with great performance."

const Seo = ({ title, description = DEFAULT_DESCRIPTION, path = '/', image = DEFAULT_IMAGE, preloadImage, noindex = false }) => {
  const url = `${SITE_URL}${path}`
  const fullTitle = title ? `Aryan Shah | ${title}` : 'Aryan Shah'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {preloadImage && <link rel="preload" as="image" href={preloadImage} />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default Seo
