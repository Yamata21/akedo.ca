/**
 * Copyright (c) 2026 Akedo Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import Image from "next/image";
import Link from "next/link";

import Container from "@/lib/components/core/Container";
import Heading from "@/lib/components/core/typography/Heading";
import { createJSON_LD, createMetadata } from "@/lib/utils/createMetadata";

export const metadata = createMetadata({ title: "Artist Alley Pop-Up" });

const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=University%20Centre%20Courtyard%2C%20University%20of%20Guelph%2C%2050%20Stone%20Rd%20E%2C%20Guelph%2C%20ON%20N1G%202W1";

const mapUrl =
  "https://maps.google.com/maps?q=University%20Centre%20Courtyard%2C%20University%20of%20Guelph%2C%2050%20Stone%20Rd%20E%2C%20Guelph%2C%20ON%20N1G%202W1&output=embed";

const eventDetails = [
  {
    label: "Date",
    value: "September 24, 2026",
    icon: "bi-calendar-event",
  },
  {
    label: "Time",
    value: "12:00 PM - 5:00 PM",
    icon: "bi-clock",
  },
  {
    label: "Location",
    value: "UC Courtyard, University of Guelph",
    icon: "bi-geo-alt-fill",
  },
  {
    label: "Admission",
    value: "Free to attend",
    icon: "bi-ticket-perforated-fill",
  },
];

export default function PopupPage() {
  return (
    <>
      <main className="bg-[#fff568] text-[#173f29]">
        <section className="relative isolate overflow-hidden bg-[#f7ef56] pt-28 pb-16 md:pt-32 md:pb-20">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-24 bg-[#2f9b64]"
            style={{
              clipPath:
                "polygon(0 58%, 8% 42%, 18% 64%, 29% 38%, 41% 62%, 54% 36%, 66% 60%, 78% 40%, 88% 62%, 100% 44%, 100% 100%, 0 100%)",
            }}
          />
          <Container className="relative z-10">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,28rem)]">
              <div>
                <p className="w-fit rounded-full bg-[#ff8300] px-4 py-2 text-sm font-black tracking-wide text-white uppercase shadow-[0_4px_0_#147c68]">
                  Artist Alley Pop-Up
                </p>
                <Heading
                  level="h1"
                  className="mt-5 max-w-4xl text-[#f56b00] [text-shadow:4px_4px_0_#ffffff,7px_7px_0_#147c68]"
                >
                  Ākēdo Artist Alley Pop-Up
                </Heading>
                <p className="mt-6 max-w-2xl text-xl leading-relaxed font-semibold text-[#21583a] md:text-2xl">
                  Get a sneak peek at what awaits you at Ākēdo Festival by
                  stopping by the Ākēdo Artist Alley Pop-Up.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    className="inline-flex w-fit items-center rounded-lg bg-[#ff8300] px-6 py-3 font-black text-white shadow-[0_4px_0_#147c68] transition-transform hover:-translate-y-0.5 focus:-translate-y-0.5"
                    href={directionsUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Get Directions
                    <i className="bi bi-arrow-right ml-2" />
                  </Link>
                  <span className="inline-flex w-fit items-center rounded-lg border-2 border-[#147c68] bg-white px-6 py-3 font-black text-[#147c68] shadow-[0_4px_0_#147c68]">
                    Free to Attend
                    <i className="bi bi-stars ml-2" />
                  </span>
                </div>
              </div>

              <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
                <div className="absolute -inset-4 rotate-2 rounded-[2rem] bg-[#147c68]" />
                <Image
                  alt="Ākēdo Artist Alley Pop-Up poster showing the event date, location, and free admission."
                  className="relative z-10 w-full rounded-[1.5rem] border-4 border-white shadow-2xl"
                  height={796}
                  priority
                  src="/assets/2026/akedo-artist-alley-pop-up.png"
                  width={607}
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-14 md:py-18">
          <Container>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {eventDetails.map((detail) => (
                <div
                  className="rounded-xl border-2 border-[#147c68] bg-[#fff568] p-5 shadow-[0_5px_0_#147c68]"
                  key={detail.label}
                >
                  <i className={`bi ${detail.icon} text-2xl text-[#ff8300]`} />
                  <p className="mt-4 text-sm font-black text-[#147c68] uppercase">
                    {detail.label}
                  </p>
                  <p className="mt-1 text-xl font-black text-[#173f29]">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#f7ef56] py-16 md:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start">
              <div>
                <p className="font-black text-[#ff8300] uppercase">
                  Pop-Up Preview
                </p>
                <Heading level="h2" className="mt-2 text-[#147c68]">
                  Browse Local Artists Before Festival Day
                </Heading>
                <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed text-[#173f29] md:text-xl">
                  <p>
                    Artist alleys are a beloved part of anime conventions,
                    giving fans a chance to support independent creators and
                    discover one-of-a-kind pieces inspired by anime, gaming, and
                    Japanese pop culture.
                  </p>
                  <p>
                    Join us in the UC Courtyard on September 24 and browse a
                    wide selection of artwork from talented local artists
                    featured at this year&apos;s Ākēdo Festival. Prints,
                    stickers, keychains, and other handcrafted merchandise will
                    be available throughout the afternoon.
                  </p>
                </div>
              </div>

              <aside className="rounded-2xl bg-[#ff8300] p-6 text-white shadow-[0_6px_0_#147c68]">
                <p className="text-sm font-black uppercase">Good to Know</p>
                <ul className="mt-5 space-y-4 text-lg font-bold">
                  <li className="flex gap-3">
                    <i className="bi bi-check-circle-fill mt-1" />
                    <span>The pop-up preview is free to attend.</span>
                  </li>
                  <li className="flex gap-3">
                    <i className="bi bi-p-circle-fill mt-1" />
                    <span>Standard university parking rates apply.</span>
                  </li>
                  <li className="flex gap-3">
                    <i className="bi bi-bag-heart-fill mt-1" />
                    <span>
                      Bring a tote for prints, stickers, keychains, and handmade
                      finds.
                    </span>
                  </li>
                </ul>
              </aside>
            </div>
          </Container>
        </section>

        <section className="bg-white py-16 md:py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:items-stretch">
              <div className="rounded-2xl border-2 border-[#147c68] bg-[#fff568] p-6 shadow-[0_5px_0_#147c68]">
                <p className="font-black text-[#ff8300] uppercase">Location</p>
                <Heading level="h2" className="mt-2 text-[#147c68]">
                  UC Courtyard
                </Heading>
                <p className="mt-5 text-lg leading-relaxed font-semibold text-[#173f29]">
                  University Centre
                  <br />
                  University of Guelph
                  <br />
                  50 Stone Rd E, Guelph, ON N1G 2W1
                </p>
                <Link
                  className="mt-7 inline-flex w-fit items-center rounded-lg bg-[#ff8300] px-6 py-3 font-black text-white transition-colors hover:bg-[#147c68] focus:bg-[#147c68]"
                  href={directionsUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Open in Maps
                  <i className="bi bi-box-arrow-up-right ml-2" />
                </Link>
              </div>

              <div className="relative min-h-72 overflow-hidden rounded-2xl border-2 border-[#147c68] shadow-[0_5px_0_#147c68]">
                <iframe
                  allowFullScreen={false}
                  className="h-full min-h-72 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={mapUrl}
                  title="Map to University Centre Courtyard at the University of Guelph"
                />
              </div>
            </div>
          </Container>
        </section>
      </main>
      {createJSON_LD({
        type: "Event",
        name: "Ākēdo Artist Alley Pop-Up",
        alternateName: "Akedo Artist Alley Pop-Up",
        description:
          "A free artist alley preview event in the University Centre Courtyard at the University of Guelph.",
        image:
          "https://akedofestival.ca/assets/2026/akedo-artist-alley-pop-up.png",
        url: "https://akedofestival.ca/popup",
        typeSpecific: {
          startDate: "2026-09-24T12:00-04:00",
          endDate: "2026-09-24T17:00-04:00",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            name: "UC Courtyard, University of Guelph",
            streetAddress: "50 Stone Rd E",
            locality: "Guelph",
            region: "Ontario",
            country: "Canada",
            postalCode: "N1G 2W1",
          },
          organization: {
            name: "Ākēdo",
            url: "https://akedofestival.ca",
          },
        },
      })}
    </>
  );
}
