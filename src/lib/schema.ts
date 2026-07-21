import { BUSINESS, SITE_URL, MAPS_URL } from "./business";
import { menuCategories } from "./menu-data";

// schema.org JSON-LD builders. Rendered via the JsonLd component in layout and pages.

export const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${SITE_URL}/#restaurant`,
  name: BUSINESS.name,
  image: [`${SITE_URL}/logo.jpg`],
  logo: `${SITE_URL}/logo.jpg`,
  url: SITE_URL,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  description: `Baja-inspired seafood counter serving ceviche, aguachile, seafood cocktails, and tiradito, located inside ${BUSINESS.address.venue} food hall in ${BUSINESS.address.city}, ${BUSINESS.address.region}.`,
  servesCuisine: ["Baja Mexican Seafood", "Seafood", "Mexican"],
  priceRange: BUSINESS.priceRange,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.region,
    postalCode: BUSINESS.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.geo.lat,
    longitude: BUSINESS.geo.lng,
  },
  hasMap: MAPS_URL,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "11:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday", "Sunday"],
      opens: "11:00",
      closes: "21:00",
    },
  ],
  menu: `${SITE_URL}/menu`,
  hasMenu: { "@id": `${SITE_URL}/menu#menu` },
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: BUSINESS.name,
  publisher: { "@id": `${SITE_URL}/#restaurant` },
};

export const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "@id": `${SITE_URL}/menu#menu`,
  name: `${BUSINESS.name} Menu`,
  url: `${SITE_URL}/menu`,
  inLanguage: "en-US",
  hasMenuSection: menuCategories.map((category) => ({
    "@type": "MenuSection",
    name: category.title,
    description: category.description,
    hasMenuItem: category.items.map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      description: item.description,
      ...(item.image ? { image: `${SITE_URL}${item.image}` } : {}),
      offers: {
        "@type": "Offer",
        price: item.price.replace("$", ""),
        priceCurrency: "USD",
      },
    })),
  })),
};

export function breadcrumbSchema(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}
