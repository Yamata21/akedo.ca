/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import Banner from "@/lib/components/Banner";
import Callout from "@/lib/components/Callout";
import Button from "@/lib/components/core/Button";
import Container from "@/lib/components/core/Container";
import Heading from "@/lib/components/core/typography/Heading";
import EventCard from "@/lib/components/EventCard";
import Maps from "@/lib/components/Maps";
import Hero from "@/lib/components/pages/home/Hero";

import { createJSON_LD, createMetadata } from "@/lib/utils/createMetadata";

export const metadata = createMetadata({ title: "2026" });
export default function Home() {
  return (
    <>
      {/* <Banner
        text={"Genshiken Idol Performance Applications Open! – APPLY NOW"}
        href="https://docs.google.com/forms/d/e/1FAIpQLSesY8iDBZer1LPre7YbFjHEoM0QrcFwPQRfdQRc4Tpwn6OpUw/viewform?usp=publish-editor"
      /> */}
      <main className="max-w-full flex-col items-center md:-mt-15.5">
        <Hero />
        <Container className="mt-20 flex flex-col gap-12 lg:mt-24">
          <Callout
            title="What is Akedo?"
            className="mb-8 scroll-mt-38"
            id="about"
          >
            Ākēdo is a University of Guelph–run student club dedicated to
            hosting Guelph&apos;s largest anime convention. In addition to
            pop-up events throughout the year, we present our main festival in
            the Fall. Ākēdo Festival is a community-driven event celebrating
            anime, gaming, art, and pop culture, bringing together fans,
            creators, and local talent through interactive programming,
            performances, vendors, artists, and a maid café. The event offers a
            fun and engaging experience for attendees of all ages.
          </Callout>
          <section className="pb-12" id="events">
            <Heading level="h2">Events</Heading>
            <p className="mt-4 block md:mt-8 md:text-lg">
              Interested about what&apos;s going on?! Tap on the events below to
              learn more ⬇️
            </p>
            <div className="mt-8 flex flex-col">
              <div className="mt-4 grid min-w-full grid-flow-col grid-rows-1 gap-4 md:max-h-[30vh] md:grid-rows-3">
                <EventCard
                  icon="heart-fill ml-1.5"
                  eventName="View Full Event Guide"
                  className="col-span-2 md:row-span-3"
                  href="/assets/2026/Genshiken_2026_Guide.pdf"
                  image={{
                    src: "/assets/2026/haru-aki-2026.jpg",
                    width: 3177,
                    height: 1667,
                    className:
                      "h-full min-h-full w-full min-w-full object-cover object-center",
                  }}
                />
              </div>
              <div className="mt-4 grid max-h-[70vh] min-w-full grid-flow-col grid-rows-4 gap-4 md:grid-rows-3">
                <EventCard
                  className="col-span-2 md:col-auto md:max-w-full"
                  eventName="Maid Cafe"
                  href="/assets/2026/Genshiken_2026_Guide.pdf#page=15"
                  image={{
                    src: "/assets/events/phillp-mc-haru-aki-edit-genfest-24.webp",
                    width: 1920,
                    height: 1080,
                  }}
                />
                <EventCard
                  className="col-span-2 md:col-auto md:max-w-full"
                  eventName="Live Performances"
                  href="/assets/2026/Genshiken_2026_Guide.pdf#page=16"
                  image={{
                    src: "/assets/events/phillp-gi-genfest-24.webp",
                    width: 3177,
                    height: 1667,
                    className:
                      "h-full min-h-full w-full min-w-full object-cover object-top",
                  }}
                />
                <EventCard
                  className="col-span-2 md:col-auto md:max-w-full"
                  href="/assets/2026/Genshiken_2026_Guide.pdf#page=17"
                  eventName="Cosplay Contest"
                  image={{
                    src: "/assets/events/phillp-cc-genfest-24.webp",
                    width: 3177,
                    height: 1667,
                    className:
                      "h-full min-h-full w-full min-w-full object-cover object-top",
                  }}
                />
                <EventCard
                  eventName="Artist Alley"
                  className="col-span-2 md:row-span-3"
                  href="/assets/2026/Genshiken_2026_Guide.pdf#page=14"
                  image={{
                    src: "/assets/events/phillp-aa-genfest-24.webp",
                    width: 3177,
                    height: 1667,
                    className:
                      "h-full min-h-full w-full min-w-full object-cover object-center",
                  }}
                />
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-4 pb-12 lg:gap-12" id="venue">
            <Heading level="h2">Venue and Location</Heading>

            <div className="flex flex-col-reverse gap-8 lg:flex-row">
              <div className="lg:hidden">
                <Button
                  showIcon="box-arrow-in-up-right"
                  className={"w-full"}
                  target="_blank"
                  href="https://www.google.com/maps/search/?api=1&query=University%20Centre%2C%2050%20Stone%20Rd%20E%2C%20Guelph%2C%20ON%20N1G%202W1"
                >
                  Get Directions
                </Button>
              </div>
              <div className="lg:bg-brand-white relative flex flex-col justify-center rounded-2xl lg:flex-1 lg:p-8">
                <div className="flex flex-col gap-2 lg:-translate-y-8">
                  {/* <p className="font-light tracking-[20%] uppercase opacity-80 lg:ml-1 lg:-translate-y-6 lg:text-xl">
                  March 28th, 2026 at
                </p> */}
                  <p className="text-xl leading-relaxed font-bold lg:text-2xl">
                    <span className="text-brand-purple">
                      October 17th, 2026,
                      <br className="hidden lg:block" />
                      11AM - 7PM
                      <br className="hidden lg:block" />
                    </span>
                    University of Guelph,
                    <br className="hidden lg:block" />
                    University Centre
                  </p>
                  <p className="italic lg:text-lg">
                    50 Stone Rd E, Guelph,
                    <br className="hidden lg:block" />
                    ON N1G 2W1
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 hidden min-w-full lg:block">
                  <Button
                    showIcon="box-arrow-in-up-right"
                    className={"w-full rounded-t-none"}
                    target="_blank"
                    href="https://www.google.com/maps/search/?api=1&query=University%20Centre%2C%2050%20Stone%20Rd%20E%2C%20Guelph%2C%20ON%20N1G%202W1"
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
              <Maps
                className={"lg:flex-2"}
                src="https://maps.google.com/maps?q=University%20Centre%2C%2050%20Stone%20Rd%20E%2C%20Guelph%2C%20ON%20N1G%202W1&output=embed"
              />
            </div>
            {/* <Paragraph>
            Genshiken Festival will take place in the beautiful Warehouse Venue
            located in Downsview Park! The venue is just a short walk from
            Downsview GO, and Downsview Park Station on Line 1
          </Paragraph> */}
          </section>
          <section className="flex flex-col gap-4 pb-12 lg:gap-12">
            <Heading level="h2">Connect With Us</Heading>
            <div className="mx-auto mt-8 mb-8 flex max-w-2xl justify-between gap-4 text-2xl md:text-4xl lg:mt-4 lg:min-w-lg xl:min-w-xl">
              <a
                className="hover:text-brand-purple focus:text-brand-purple m-0 opacity-75 transition-all hover:opacity-100"
                href="https://discord.gg/M3dhac79f8"
                aria-label="Discord"
              >
                <i className="bi bi-discord"></i>
              </a>
              <a
                className="hover:text-brand-purple focus:text-brand-purple m-0 opacity-75 transition-all hover:opacity-100"
                href="https://www.instagram.com/genshikenfestival/"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                className="hover:text-brand-purple focus:text-brand-purple m-0 opacity-75 transition-all hover:opacity-100"
                href="https://www.tiktok.com/@genshikenfestival"
                aria-label="TikTok"
              >
                <i className="bi bi-tiktok"></i>
              </a>
              <a
                className="hover:text-brand-purple focus:text-brand-purple m-0 opacity-75 transition-all hover:opacity-100"
                href="https://www.youtube.com/@GenshikenFestival"
                aria-label="YouTube"
              >
                <i className="bi bi-youtube"></i>
              </a>
              <a
                className="hover:text-brand-purple focus:text-brand-purple m-0 opacity-75 transition-all hover:opacity-100"
                href="https://twitter.com/GenshikenFes"
                aria-label="Twitter / X"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                className="hover:text-brand-purple focus:text-brand-purple m-0 opacity-75 transition-all hover:opacity-100"
                href="mailto:genshikenfestival@gmail.com"
                aria-label="Email"
              >
                <i className="bi bi-envelope-heart-fill"></i>
              </a>
            </div>
          </section>
        </Container>
      </main>
      {createJSON_LD({
        type: "Event",
        name: "Ākēdo Festival 2026",
        alternateName: "Akedo Festival 2026",
        description:
          "Ākēdo Festival is a community-driven anime convention hosted by the University of Guelph-run Ākēdo student club.",
        image: "https://genshiken.ca/ogp.png",
        url: "https://genshiken.ca/",
        typeSpecific: {
          startDate: "2026-10-17T11:00-04:00",
          endDate: "2026-10-17T19:00-04:00",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            name: "University of Guelph, University Centre",
            streetAddress: "50 Stone Rd E",
            locality: "Guelph",
            region: "Ontario",
            country: "Canada",
            postalCode: "N1G 2W1",
          },
          organization: {
            name: "Ākēdo",
            url: "https://genshiken.ca",
          },
        },
      })}
    </>
  );
}
