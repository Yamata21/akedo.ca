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
const vendorApplicationUrl = "https://forms.gle/mBAmWkUQnYLFYaD78";
const setupTeardownApplicationUrl = "https://forms.gle/Uog5rCNvujtEzAM2A";
const volunteerArtistHiringGuideUrl =
  "https://drive.google.com/file/d/1T9qGqRfpeqw3nAOZNwU3xgzHo3PgY37L/view?usp=drive_link";

type Opportunity = {
  title: string;
  description: string;
  applicationLinks?: {
    label: string;
    href: string;
  }[];
  statusLabel?: string;
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
    statusLabel: "Applications Closed",
    image: {
      src: "/assets/participate/artist-alley.png",
      height: 1350,
      width: 1080,
    },
  },
  {
    title: "Vendor Hall",
    description:
      "Businesses or sellers offering officially licensed products, commercial merchandise, trading cards, collectibles, apparel, and similar retail goods. Reapplications welcome.",
    applicationLinks: [
      {
        label: "Apply for Vendor Hall",
        href: vendorApplicationUrl,
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
      "Join us on stage at the Ākēdo Festival! Whether you sing, dance, perform in a band, or have a unique talent to showcase, we welcome a variety of acts that bring energy and entertainment to our guests. Visit the application below for details. Applications close September 27th, 11:59 PM.",
    applicationLinks: [
      {
        label: "Apply to Perform",
        href: "https://forms.gle/RhtevK7g8nahNTGU9",
      },
    ],
    image: {
      src: "/assets/participate/stage-performance.png",
      height: 2793,
      width: 4832,
      isWide: true,
      fadeLeft: true,
    },
  },
  {
    title: "Card Market",
    description:
      "A dedicated space for members of the trading card game community to buy, sell, and trade throughout Ākēdo Festival.",
    applicationLinks: [
      {
        label: "Apply for Card Market",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSdq-UWnofLD8Iei5lFcxO9U2_chSCsc7d1fhnaqNp5g7l-V3g/viewform?usp=header",
      },
    ],
    image: {
      src: "/assets/participate/card-market.png",
      height: 2875,
      width: 2473,
    },
  },
  {
    title: "Setup/Teardown Volunteers",
    description:
      "Help support the community and gain volunteer experience with Ākēdo by assisting with decorating, arranging tables and chairs, transporting supplies, organizing inventory, setting up signage, and supporting departments during setup and teardown.",
    applicationLinks: [
      {
        label: "Apply to Volunteer",
        href: setupTeardownApplicationUrl,
      },
    ],
    image: {
      src: "/assets/participate/volunteer-hiring.png",
      height: 1350,
      width: 1080,
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
    title: "Other Volunteer / Hiring",
    description:
      "We're currently updating additional volunteer and hiring details. Please check back soon.",
    image: {
      src: "/assets/participate/volunteer-hiring.png",
      height: 1350,
      width: 1080,
    },
  },
];

const artistAlleyOpportunities = opportunities.filter(
  (opportunity) => opportunity.title === "Artist Alley",
);
const vendorOpportunities = opportunities.filter(
  (opportunity) => opportunity.title === "Vendor Hall",
);
const cardMarketOpportunities = opportunities.filter(
  (opportunity) => opportunity.title === "Card Market",
);
const setupTeardownOpportunities = opportunities.filter(
  (opportunity) => opportunity.title === "Setup/Teardown Volunteers",
);
const performanceOpportunities = opportunities.filter(
  (opportunity) => opportunity.title === "Stage Performances",
);
const comingSoonOpportunities = opportunities.filter(
  (opportunity) => !opportunity.applicationLinks && !opportunity.statusLabel,
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
          {opportunity.statusLabel ?? "Applications Coming Soon"}
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
              Applications Open
            </p>
            <h2 className="font-brand text-brand-purple mt-2 text-4xl font-bold">
              Vendor Hall Applications
            </h2>
            <div className="mt-4 grid gap-4 text-base leading-relaxed text-black/75 md:grid-cols-2 md:text-lg">
              <p>
                Vendor Hall applications are open for a second round for
                businesses or sellers offering officially licensed products,
                commercial merchandise, trading cards, collectibles, apparel,
                and similar retail goods.
              </p>
              <p>
                Reapplications welcome. Applications are due September 28,
                2026.
              </p>
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            {vendorOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.title}
                opportunity={opportunity}
              />
            ))}
          </section>

          <section className="border-brand-purple/25 rounded-2xl border bg-[#f8f2ff] px-6 py-8 md:px-8">
            <p className="text-brand-orange text-sm font-bold uppercase">
              Applications Open
            </p>
            <h2 className="font-brand text-brand-purple mt-2 text-4xl font-bold">
              Card Market Applications
            </h2>
            <div className="mt-4 grid gap-4 text-base leading-relaxed text-black/75 md:grid-cols-2 md:text-lg">
              <p>
                The Ākēdo Festival Card Market is a dedicated space for members
                of the trading card game community to buy, sell, and trade
                throughout the event.
              </p>
              <p>
                Applications are reviewed on a first come, first served basis.
                Applications will remain open until September 28, 2026, or until
                all available spaces have been filled, whichever comes first.
              </p>
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            {cardMarketOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.title}
                opportunity={opportunity}
              />
            ))}
          </section>

          <section className="border-brand-purple/25 rounded-2xl border bg-[#f8f2ff] px-6 py-8 md:px-8">
            <p className="text-brand-orange text-sm font-bold uppercase">
              Volunteer Applications
            </p>
            <h2 className="font-brand text-brand-purple mt-2 text-4xl font-bold">
              Setup/Teardown Volunteers
            </h2>
            <div className="mt-4 grid gap-4 text-base leading-relaxed text-black/75 md:grid-cols-2 md:text-lg">
              <p>
                Apply now to help support the community and gain volunteer
                experience with Ākēdo! As a Setup & Teardown Volunteer,
                you&apos;ll assist with decorating, arranging tables and chairs,
                transporting supplies, organizing inventory, setting up signage,
                and supporting departments throughout the setup and teardown
                process.
              </p>
              <p>
                Positions are available for our Pop-Up Event on September 23
                and our Main Festival on November 7. Recruitment will remain
                open until all volunteer roles have been filled.
              </p>
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            {setupTeardownOpportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.title}
                opportunity={opportunity}
              />
            ))}
          </section>

          <section className="border-brand-purple/25 rounded-2xl border bg-[#f8f2ff] px-6 py-8 md:px-8">
            <p className="text-brand-orange text-sm font-bold uppercase">
              Stage Performances
            </p>
            <h2 className="font-brand text-brand-purple mt-2 text-4xl font-bold">
              Performance Application
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/75 md:text-lg">
              Singers, dancers, bands, and unique performers are invited to
              apply to perform at Ākēdo Festival.
            </p>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            {performanceOpportunities.map((opportunity) => (
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
              Photographer and other volunteer / hiring details are being
              updated and will be posted here as soon as they are ready.
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

          <section className="border-brand-purple/25 rounded-2xl border bg-[#f8f2ff] px-6 py-8 md:px-8">
            <p className="text-brand-orange text-sm font-bold uppercase">
              Applications Closed
            </p>
            <h2 className="font-brand text-brand-purple mt-2 text-4xl font-bold">
              Volunteer Artists
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/75 md:text-lg">
              Volunteer Artist applications are now closed! Thank you to
              everyone who applied. Please keep an eye on your email for
              results.
            </p>
            <p className="border-brand-purple/25 text-brand-purple mt-6 w-fit rounded-lg border bg-white px-5 py-3 font-bold">
              Applications closed July 5, 2026.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                className="border-brand-purple/30 text-brand-purple hover:bg-brand-purple focus:bg-brand-purple inline-flex w-fit items-center rounded-lg border bg-white px-6 py-3 font-semibold transition-colors hover:text-white focus:text-white"
                href={volunteerArtistHiringGuideUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                View Hiring Guide
                <i className="bi bi-box-arrow-up-right ml-2" />
              </Link>
            </div>
          </section>

          <section className="border-brand-purple/25 rounded-2xl border bg-[#f8f2ff] px-6 py-8 md:px-8">
            <p className="text-brand-orange text-sm font-bold uppercase">
              Applications Closed
            </p>
            <h2 className="font-brand text-brand-purple mt-2 text-4xl font-bold">
              Artist Alley Applications
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/75 md:text-lg">
              Applications are now closed! Thank you to everyone who applied.
              Please keep an eye on your email for results.
            </p>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            {artistAlleyOpportunities.map((opportunity) => (
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
