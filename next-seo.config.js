const title = "Rommelie Larin";
const description = "Designer, tech enthusiast and entrepreneur of sorts";

const SEO = {
  title,
  description,
  canonical: "https://rommelielarin.com",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://rommelielarin.com",
    title,
    description,
    images: [
      {
        url: "https://rommelielarin.com/static/images/banner.jpg",
        alt: title,
        width: 2240,
        height: 1260,
      },
    ],
  },
  twitter: {
    handle: "@rommelie",
    site: "@rommelie",
    cardType: "summary_large_image",
  },
};

export default SEO;
