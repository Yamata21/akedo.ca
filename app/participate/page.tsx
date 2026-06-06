/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import Image from "next/image";
import Link from "next/link";

import Container from "@/lib/components/core/Container";
import Heading from "@/lib/components/core/typography/Heading";
import NewsletterSignup from "@/lib/components/pages/participate/NewsletterSignup";
import { createMetadata } from "@/lib/utils/createMetadata";

export const metadata = createMetadata({ title: "Participate" });

const ticketUrl = "https://www.zeffy.com/en-CA/ticketing/akedo-festival--2026";

type Opportunity = {
  title: string;
  description: string;
  applicationLinks?: {
    label: string;
    href: string;
  }[];
  image?: {
    src: string;
    width: number;
    height: number;
    isWide?: boolean;
    fadeLeft?: boolean;
  };
};

const opportunities: Opportunity[] = [
  {
    title: "Artist Alley",
    description:
      "Independent creators selling handmade or original works, including stickers, keychains, plushies, crafts, commissions, prints, and other original creations.",
    applicationLinks: [
      {
        label: "Apply for Pop-up",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSfWUbwQrEHOdfEt5-ZuP7dEMQlqvupayMRvzVvsfFYQJ-Lzzw/viewform",
      },
      {
        label: "Apply for Festival",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSdOMgdhralmFcrn4AUd05_x8Qa7WqtSHGULwJJjG6zBqTwKPA/viewform",
      },
    ],
    image: {
      src: "/assets/participate/artist-alley.png",
      height: 1350,
      width: 1080,
    },
  },
  {
    title: "Vendor Hall",
    description:
      "Businesses or sellers offering officially licensed products, commercial merchandise, trading cards, collectibles, apparel, and similar retail goods.",
    applicationLinks: [
      {
        label: "Apply for Pop-up",
        href: "https://docs.google.com/forms/d/e/1FAIpQLScSEJ97YuxeEx8aJhatai9Ura-D3hWMQvkjlrzecbr_dZxXQQ/viewform",
      },
      {
        label: "Apply for Festival",
        href: "https://docs.google.com/forms/d/e/1FAIpQLScHcJnfUD_B1K3GmVIQhvuwGZ-3kzeUvqu8Z4XmasvuzsYoyQ/viewform",
      },
    ],
    image: {
      src: "/assets/participate/vendor-hall.png",
      height: 2000,
      width: 2000,
    },
  },
  {
    title: "Stage Performances",
    description:
      "We're currently updating the details for this opportunity. Please check back soon.",
    image: {
      src: "/assets/participate/stage-performance.png",
      height: 2793,
      width: 4832,
      isWide: true,
      fadeLeft: true,
    },
  },
  {
    title: "Photographer",
    description:
      "We're currently updating the details for this opportunity. Please check back soon.",
    image: {
      src: "/assets/participate/photographer.png",
      height: 2550,
      width: 3300,
    },
  },
  {
    title: "Volunteer / Hiring",
    description:
      "We're currently updating the details for this opportunity. Please check back soon.",
    image: {
      src: "/assets/participate/volunteer-hiring.png",
      height: 1350,
      width: 1080,
    },
  },
];

const applicationOpportunities = opportunities.filter(
  (opportunity) => opportunity.applicationLinks,
);
const comingSoonOpportunities = opportunities.filter(
  (opportunity) => !opportunity.applicationLinks,
);

function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  return (
    <article
      className="border-brand-purple/25 relative flex min-h-[22rem] flex-col justify-between gap-7 overflow-hidden rounded-2xl border bg-[#d8c9f2] p-6 md:p-8"
      key={opportunity.title}
    >
      <div
        className={`relative z-10 ${opportunity.image ? "xl:max-w-[68%]" : ""}`}
      >
        <h2 className="font-brand text-brand-purple text-3xl font-bold">
          {opportunity.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed md:text-lg">
          {opportunity.description}
        </p>
      </div>
      {opportunity.image ? (
        <>
          <div
            className={`pointer-events-none relative mx-auto mt-2 h-64 w-full xl:absolute xl:bottom-0 xl:mt-0 ${
              opportunity.image.isWide
                ? "xl:-right-20 xl:h-[98%] xl:w-[78%]"
                : "xl:-right-7 xl:h-[74%] xl:w-[44%]"
            }`}
          >
            <Image
              alt=""
              className="h-full w-full object-contain object-bottom"
              height={opportunity.image.height}
              src={opportunity.image.src}
              width={opportunity.image.width}
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-16 xl:hidden"
              style={{
                background: "linear-gradient(to bottom, transparent, #d8c9f2)",
              }}
            />
          </div>
          {opportunity.image.fadeLeft ? (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-[62%] xl:block"
              style={{
                background:
                  "linear-gradient(to right, #d8c9f2 0%, rgba(216, 201, 242, 0.96) 60%, rgba(216, 201, 242, 0) 100%)",
              }}
            />
          ) : null}
        </>
      ) : null}
      {opportunity.applicationLinks ? (
        <div
          className={`relative z-10 flex w-fit flex-col gap-2 ${
            opportunity.image ? "xl:max-w-[56%]" : ""
          }`}
        >
          {opportunity.applicationLinks.map((link) => (
            <Link
              className="bg-brand-orange hover:bg-brand-purple focus:bg-brand-purple rounded-lg px-5 py-3 text-center font-semibold text-white transition-colors"
              href={link.href}
              key={link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {link.label}
              <i className="bi bi-arrow-right ml-2" />
            </Link>
          ))}
        </div>
      ) : (
        <span
          className={`border-brand-purple/30 text-brand-purple relative z-10 inline-flex w-fit items-center rounded-lg border bg-[#d8c9f2]/90 px-5 py-3 font-semibold ${
            opportunity.image ? "xl:max-w-[56%]" : ""
          }`}
        >
          Applications Coming Soon
        </span>
      )}
    </article>
  );
}

export default function ParticipatePage() {
  return (
    <main className="bg-white py-24 md:py-32">
      <Container className="max-w-7xl">
        <div className="relative flex flex-col gap-12">
          <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_14rem] lg:grid-cols-[minmax(0,1fr)_17rem]">
            <header className="max-w-3xl">
              <Heading level="h1" className="text-brand-purple">
                Participate
              </Heading>
              <p className="mt-5 text-lg leading-relaxed text-black/75 md:text-xl">
                Be part of Ākēdo Festival as an artist, performer, photographer,
                volunteer, or sponsor. Applications will be posted here as they
                become available.
              </p>
              <Link
                className="bg-brand-orange hover:bg-brand-purple focus:bg-brand-purple mt-7 inline-flex w-fit items-center rounded-lg px-6 py-3 font-semibold text-white transition-colors"
                href={ticketUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Buy Tickets
                <i className="bi bi-arrow-right ml-2" />
              </Link>
            </header>

            <Image
              alt=""
              className="hidden h-72 w-56 justify-self-end object-contain md:block lg:h-80 lg:w-[17rem]"
              height={1974}
              src="/assets/participate/participationicon.png"
              width={1644}
            />
          </div>

          <section className="border-brand-purple/25 rounded-2xl border bg-[#f8f2ff] px-6 py-8 md:px-8">
            <p className="text-brand-orange text-sm font-bold uppercase">
              Apply for Ākēdo 2026
            </p>
            <h2 className="font-brand text-brand-purple mt-2 text-4xl font-bold">
              Artist Alley & Vendor Hall Applications
            </h2>
            <div className="mt-4 grid gap-4 text-base leading-relaxed text-black/75 md:grid-cols-2 md:text-lg">
              <p>
                Independent artists and businesses are invited to apply to the
                Ākēdo Artist Alley & Vendor Hall. Applicants may apply for the
                Ākēdo Pop-Up Event on September 23, 2026 from 12:00 PM to 5:00
                PM, Ākēdo Festival on November 7, 2026 from 11:00 AM to 7:00 PM,
                or both events.
              </p>
              <p>
                Applicants must apply under one category only: Artist or Vendor.
                Please review the application thoroughly; additional details,
                policies, requirements, and event information are provided
                within each form.
              </p>
            </div>
            <p className="border-brand-purple/25 text-brand-purple mt-6 w-fit rounded-lg border bg-white px-5 py-3 font-bold">
              All applications are due Sunday, June 14th, 2026 EDT.
            </p>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            {applicationOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.title}
                opportunity={opportunity}
              />
            ))}
          </section>

          <section className="border-brand-purple/25 rounded-2xl border bg-[#f8f2ff] px-6 py-8 md:px-8">
            <p className="text-brand-orange text-sm font-bold uppercase">
              More ways to join
            </p>
            <h2 className="font-brand text-brand-purple mt-2 text-4xl font-bold">
              Coming Soon
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/75 md:text-lg">
              Stage performance, photographer, and volunteer / hiring details
              are being updated and will be posted here as soon as they are
              ready.
            </p>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            {comingSoonOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.title}
                opportunity={opportunity}
              />
            ))}
          </section>

          <NewsletterSignup />

          <section className="bg-brand-indigo relative rounded-2xl px-6 py-8 text-white md:px-10 md:py-10">
            <Image
              alt=""
              className="pointer-events-none absolute -right-10 -bottom-20 z-10 hidden h-[138%] w-[42%] object-contain object-right-bottom opacity-95 md:block"
              height={3530}
              src="/assets/participate/sponsor.png"
              width={2404}
            />
            <div className="relative z-10 md:max-w-[62%]">
              <p className="text-brand-white text-sm font-semibold uppercase">
                Sponsors
              </p>
              <h2 className="font-brand mt-2 text-4xl font-bold">
                Support Ākēdo Festival
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
                Interested in sponsorship tiers or partnership opportunities?
                Reach out to our marketing team for more information.
              </p>
              <Link
                className="text-brand-white mt-5 block w-fit text-lg font-semibold hover:underline focus:underline"
                href="mailto:marketing@akedo.ca?subject=Ākēdo%20Festival%20Sponsorship%20Inquiry"
              >
                marketing@akedo.ca
              </Link>
              <Link
                className="bg-brand-orange hover:bg-brand-white focus:bg-brand-white hover:text-brand-indigo focus:text-brand-indigo mt-7 flex w-fit items-center rounded-lg px-6 py-3 font-semibold text-white transition-colors"
                href="mailto:marketing@akedo.ca?subject=Ākēdo%20Festival%20Sponsorship%20Inquiry"
              >
                Contact Marketing
                <i className="bi bi-envelope ml-2" />
              </Link>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
