// Single source of truth for business facts.
// Used by metadata, JSON-LD schema, the footer, and the contact page —
// update HERE and every surface stays consistent.

// TODO: replace with the real production domain before launch
// (also referenced by src/app/sitemap.ts and src/app/robots.ts).
export const SITE_URL = "https://muelle8seafood.com";

export const BUSINESS = {
  name: "Muelle 8",
  tagline: "Baja Inspired Seafood",
  phone: "+1-619-210-5231",
  phoneDisplay: "(619) 210-5231",
  email: "info@muelle8seafood.com",
  address: {
    venue: "Market on 8th",
    // Keep "Ste 115" in EVERY address mention — it is the disambiguator
    // against other vendors sharing the food hall's street address.
    street: "41 E 8th St, Ste 115",
    city: "National City",
    region: "CA",
    zip: "91950",
  },
  geo: { lat: 32.6763, lng: -117.1063 },
  hours: [
    { days: "Mon – Thu", open: "11:00 AM", close: "8:00 PM" },
    { days: "Fri – Sun", open: "11:00 AM", close: "9:00 PM" },
  ],
  priceRange: "$3 - $25",
  doordashUrl:
    "https://www.doordash.com/store/muelle-8-seafood-national-city-48017278/112982572/",
} as const;

export const ADDRESS_LINE = `${BUSINESS.address.venue}, ${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.region} ${BUSINESS.address.zip}`;

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${BUSINESS.geo.lat},${BUSINESS.geo.lng}`;

// Formspree Form IDs for client-side submissions.
// Replace these placeholders with your actual Formspree form IDs (from your Formspree dashboard).
export const FORMSPREE = {
  contactId: "xzbryrpo", // Replace with your Formspree contact form ID
  cateringId: "xzbryrpo", // Replace with your Formspree catering form ID
} as const;
