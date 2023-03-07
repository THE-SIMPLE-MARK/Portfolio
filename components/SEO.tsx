import Head from "next/head"

export default function SEO() {
  return (
    <Head>
      <title>Create Next App</title>
      {/* Primary Meta Tags */}
      <title>Mark Boszormenyi{"'"}s Portfolio</title>
      <meta name="title" content="Mark Boszormenyi's Portfolio" />
      <meta
        name="description"
        content="View the portfolio of Mark Boszormenyi - a Hungarian software developer student."
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://www.google.com/" />
      <meta property="og:title" content="Mark Boszormenyi's Portfolio" />
      <meta
        property="og:description"
        content="View the portfolio of Mark Boszormenyi - a Hungarian software developer student."
      />
      <meta property="og:image" content="" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="http://www.google.com/" />
      <meta property="twitter:title" content="Mark Boszormenyi's Portfolio" />
      <meta
        property="twitter:description"
        content="View the portfolio of Mark Boszormenyi - a Hungarian software developer student."
      />
      <meta property="twitter:image" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
