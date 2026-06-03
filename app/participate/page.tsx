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
      "Apply as an artist selling handmade creations such as prints, stickers, keychains, plushies, crafts, or commissions, or as a vendor offering licensed products and retail merchandise.",
    image: {
      src: "/assets/participate/artist-alley.png",
      height: 1350,
      width: 1080,
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

export default function ParticipatePage() {
  return (
    <main className="bg-white py-24 md:py-32">
      <Container className="max-w-6xl">
        <div className="relative flex flex-col gap-12">
          <Image
            alt=""
            className="absolute -top-16 right-0 hidden h-72 w-60 object-contain md:block lg:h-80 lg:w-[17rem]"
            height={1974}
            src="/assets/participate/participationicon.png"
            width={1644}
          />

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

          <section className="grid gap-4 md:grid-cols-2">
            {opportunities.map((opportunity) => (
              <article
                className="border-brand-purple/25 relative flex min-h-[22rem] flex-col justify-between gap-7 overflow-hidden rounded-2xl border bg-[#d8c9f2] p-6 md:p-8"
                key={opportunity.title}
              >
                <div
                  className={`relative z-10 ${
                    opportunity.image ? "md:max-w-[54%]" : ""
                  }`}
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
                      className={`pointer-events-none relative mx-auto mt-2 h-64 w-full md:absolute md:bottom-0 md:mt-0 ${
                        opportunity.image.isWide
                          ? "md:-right-20 md:h-[104%] md:w-[88%] lg:-right-24 lg:h-[106%] lg:w-[92%]"
                          : "md:-right-9 md:h-[90%] md:w-[58%]"
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
                        className="absolute inset-x-0 bottom-0 h-16 md:hidden"
                        style={{
                          background:
                            "linear-gradient(to bottom, transparent, #d8c9f2)",
                        }}
                      />
                    </div>
                    {opportunity.image.fadeLeft ? (
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-[62%] md:block"
                        style={{
                          background:
                            "linear-gradient(to right, #d8c9f2 0%, rgba(216, 201, 242, 0.96) 60%, rgba(216, 201, 242, 0) 100%)",
                        }}
                      />
                    ) : null}
                  </>
                ) : null}
                <span
                  className={`border-brand-purple/30 text-brand-purple relative z-10 inline-flex w-fit items-center rounded-lg border bg-[#d8c9f2]/90 px-5 py-3 font-semibold ${
                    opportunity.image ? "md:max-w-[54%]" : ""
                  }`}
                >
                  Applications Coming Soon
                </span>
              </article>
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
