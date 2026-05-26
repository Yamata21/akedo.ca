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
import { createMetadata } from "@/lib/utils/createMetadata";

export const metadata = createMetadata({ title: "Participate" });

const opportunities = [
  {
    title: "Artist Alley",
    description:
      "Showcase your illustrations, handmade work, prints, and fan creations to attendees throughout the festival.",
  },
  {
    title: "Stage Performances",
    description:
      "Bring your performance to the Ākēdo stage, from music and dance to showcases made for anime and pop culture fans.",
  },
  {
    title: "Activities",
    description:
      "Host an interactive experience, panel, workshop, game, or community activity as part of festival programming.",
  },
  {
    title: "Volunteer / Hiring",
    description:
      "Apply to help bring the festival to life through attendee support, operations, programming, and event-day roles.",
  },
];

export default function ParticipatePage() {
  return (
    <main className="bg-white py-24 md:py-32">
      <Container className="max-w-6xl">
        <div className="relative flex flex-col gap-12">
          <Image
            alt=""
            className="absolute -top-10 right-0 hidden h-40 w-40 object-contain md:block"
            height={3048}
            src="/assets/spraycan.png"
            width={2995}
          />

          <header className="max-w-3xl">
            <Heading level="h1" className="text-brand-purple">
              Participate
            </Heading>
            <p className="mt-5 text-lg leading-relaxed text-black/75 md:text-xl">
              Be part of Ākēdo Festival as an artist, performer, activity host,
              volunteer, or sponsor. Applications will be posted here as they
              become available.
            </p>
          </header>

          <section className="grid gap-4 md:grid-cols-2">
            {opportunities.map((opportunity) => (
              <article
                className="border-brand-purple/25 flex flex-col justify-between gap-7 rounded-2xl border bg-[#d8c9f2] p-6 md:p-8"
                key={opportunity.title}
              >
                <div>
                  <h2 className="font-brand text-brand-purple text-3xl font-bold">
                    {opportunity.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed md:text-lg">
                    {opportunity.description}
                  </p>
                </div>
                <span className="border-brand-purple/30 text-brand-purple inline-flex w-fit items-center rounded-lg border px-5 py-3 font-semibold">
                  Applications Coming Soon
                </span>
              </article>
            ))}
          </section>

          <section className="bg-brand-indigo relative overflow-hidden rounded-2xl px-6 py-8 text-white md:px-10 md:py-10">
            <Image
              alt=""
              className="absolute -right-10 -bottom-12 hidden h-48 w-48 object-contain opacity-95 sm:block"
              height={2550}
              src="/assets/mascot/chibi/kiko_kick.png"
              width={3300}
            />
            <div className="relative max-w-3xl">
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
                className="bg-brand-orange hover:bg-brand-white focus:bg-brand-white hover:text-brand-indigo focus:text-brand-indigo mt-7 inline-flex items-center rounded-lg px-6 py-3 font-semibold text-white transition-colors"
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
