/**
 * Adapted from ASSETS 2024's createMetadata.js:
 * @see: https://github.com/ASSETS-Conference/assets2024/blob/main/src/app/lib/utils/createMetadata.js
 *
 */

import { Url } from "jsonld/jsonld-spec";
import { Metadata } from "next";

/**
 * Generates valid metadata and ogp data per page.
 * @returns {import('next').Metadata} Metadata to be used by `page.tsx` elements.
 *
 * Adapted from ASSETS 2024's createMetadata.js:
 * @see: https://github.com/ASSETS-Conference/assets2024/blob/main/src/app/lib/utils/createMetadata.js
 */
const createMetadata = ({ title }: createMetadataProps) => {
  const md: Metadata = {
    title: `Ākēdo Festival - ${title}`,
    description:
      "A University of Guelph anime convention celebrating anime, gaming, art, and pop culture.",
    keywords: [
      "Ākēdo",
      "Akedo",
      "Ākēdo Festival",
      "Akedo Festival",
      "Anime Convention",
      "University of Guelph",
      "Anime Canada",
      "Anime Festival",
    ],
    openGraph: {
      type: "website",
      url: "https://genshiken.ca/",
      title: `Ākēdo Festival - ${title}`,
      description:
        "A University of Guelph anime convention celebrating anime, gaming, art, and pop culture.",
      siteName: "Ākēdo Festival",
      images: [
        {
          url: "https://genshiken.ca/ogp.jpg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@GenshikenFes",
      creator: "@GenshikenFes",
      title: `Ākēdo Festival - ${title}`,
      description:
        "A University of Guelph anime convention celebrating anime, gaming, art, and pop culture.",
      images: "https://genshiken.ca/ogp.jpg",
    },
  };

  return md;
};

/**
 * Generate validated schemas for rich search results.
 * @param {Object} params The configuration parameters
 * @param {'Event'} params.type The type of JSON+LD type.
 * @see https://schema.org/
 */
const createJSON_LD = ({
  type,
  name,
  alternateName,
  image,
  url,
  description,
  typeSpecific,
}: jsonLDProps) => {
  let JSONLD = {};

  if (type === "Event") {
    JSONLD = {
      "@context": "http://schema.org",
      "@type": "Event",
      name: name,
      alternateName: alternateName,
      startDate: typeSpecific.startDate,
      endDate: typeSpecific.endDate,
      eventAttendanceMode: typeSpecific.eventAttendanceMode,
      eventStatus: typeSpecific.eventStatus,
      description: description,
      location: [
        // {
        //   "@type": "VirtualLocation",
        //   url: typeSpecific.location.virtualLocationURL,
        // },
        {
          "@type": "Place",
          name: typeSpecific.location.name,
          address: {
            "@type": "PostalAddress",
            streetAddress: typeSpecific.location.streetAddress,
            addressLocality: typeSpecific.location.locality,
            addressRegion: typeSpecific.location.region,
            addressCountry: typeSpecific.location.country,
            postalCode: typeSpecific.location.postalCode,
          },
        },
      ],
      organizer: {
        "@type": "Organization",
        name: typeSpecific.organization.name,
        url: typeSpecific.organization.url,
      },
      image: image,
      url: url,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(JSONLD).replace(/</g, "\\u003c"),
      }}
    />
  );
};

type createMetadataProps = {
  title?: string;
};

type jsonLDProps = {
  type: "Event";
  name: string;
  alternateName: string;
  image: Url;
  url: Url;
  description: string;
  typeSpecific: {
    startDate: string | Date;
    endDate: string | Date;
    eventAttendanceMode:
      | "https://schema.org/MixedEventAttendanceMode"
      | "https://schema.org/OfflineEventAttendanceMode"
      | "https://schema.org/OnlineEventAttendanceMode";
    eventStatus:
      | "https://schema.org/EventScheduled"
      | "https://schema.org/EventCancelled";
    location: {
      virtualLocationURL?: string;
      name: string;
      streetAddress: string;
      locality: string;
      region: string;
      country: string;
      postalCode: string;
    };
    organization: {
      name: string;
      url: string;
    };
  };
};
export { createMetadata, createJSON_LD };
