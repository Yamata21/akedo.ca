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
// import EventCard from "@/lib/components/EventCard";
import Maps from "@/lib/components/Maps";
import EarlyBirdPopup from "@/lib/components/pages/home/EarlyBirdPopup";
import Hero from "@/lib/components/pages/home/Hero";
import CFRULogo from "@/public/assets/2026/sponsors/CFRU_Logo_2025-long.png";

import Image from "next/image";
import { createJSON_LD, createMetadata } from "@/lib/utils/createMetadata";

export const metadata = createMetadata({ title: "2026" });
export default function Home() {
  return (
    <>
      {/* <Banner
        text={"Genshiken Idol Performance Applications Open! – APPLY NOW"}
        href="https://docs.google.com/forms/d/e/1FAIpQLSesY8iDBZer1LPre7YbFjHEoM0QrcFwPQRfdQRc4Tpwn6OpUw/viewform?usp=publish-editor"
      /> */}
      <EarlyBirdPopup />
      <main className="max-w-full flex-col items-center md:-mt-15.5">
        <Hero />
        <Container className="mt-20 flex flex-col gap-12 lg:mt-24">
          <Callout
            title="What is Ākēdo?"
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
              <div className="relative flex flex-col justify-center rounded-2xl lg:flex-1 lg:bg-[#d8c9f2] lg:p-8">
                <div className="flex flex-col gap-2 lg:-translate-y-8">
                  {/* <p className="font-light tracking-[20%] uppercase opacity-80 lg:ml-1 lg:-translate-y-6 lg:text-xl">
                  March 28th, 2026 at
                </p> */}
                  <p className="text-xl leading-relaxed font-bold lg:text-2xl">
                    <span className="text-brand-purple">
                      November 7th, 2026,
                      <br className="hidden lg:block" /> 11AM - 7PM
                      <br className="hidden lg:block" />{" "}
                    </span>{" "}
                    University of Guelph,
                    <br className="hidden lg:block" /> University Centre
                  </p>
                  <p className="italic lg:text-lg">
                    50 Stone Rd E, Guelph,
                    <br className="hidden lg:block" /> ON N1G 2W1
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
                embedCode="!1m18!1m12!1m3!1d23140.412652954044!2d-80.25016221100557!3d43.53254286591808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b9b2eb265211f%3A0x8677ac225d47cff1!2sUniversity%20Centre!5e0!3m2!1sen!2sca!4v1788307832249!5m2!1sen!2sca"
              />
            </div>
            <section
              className="mt-8 -mb-8 flex flex-col gap-4 pb-0 lg:mt-0 lg:gap-4"
              id="sponsors"
            >
              <Heading level="h2">Sponsors</Heading>

              <div className="flex flex-col">
                <p className="text-lg">
                  Ākēdo Festival was made possible thanks to our sponsors!
                </p>
                <div className="w-full flex-1">
                  <Image
                    src={CFRULogo}
                    width="300"
                    height="100"
                    alt="CFRU Logo"
                    className="-mb-12"
                  />
                  <p className="mb-0 italic">
                    CFRU 93.3FM is Guelph’s campus/community radio station and
                    media centre, located on the second floor of the University
                    Centre. We are a volunteer-based space, recognizing the
                    essential contributions of volunteers and supporting people
                    in their efforts to express themselves through media. We
                    draw from the rich variety of skills and perspectives that
                    Guelph and surrounding communities have to offer in order to
                    create quality programming and to better serve the
                    community. If interested in volunteering, please contact
                    volunteer@cfru.ca!
                  </p>
                </div>
              </div>
            </section>
          </section>
          <section className="flex flex-col gap-4 pb-14 lg:gap-12">
            <Heading level="h2">Connect With Us</Heading>
            <div className="mx-auto mt-8 mb-8 flex max-w-2xl justify-between gap-4 text-2xl md:text-4xl lg:mt-4 lg:min-w-lg xl:min-w-xl">
              <a
                className="hover:text-brand-purple focus:text-brand-purple m-0 opacity-75 transition-all hover:opacity-100"
                href="https://discord.gg/g6Wmx3VWHD"
                aria-label="Discord"
              >
                <i className="bi bi-discord"></i>
              </a>
              <a
                className="hover:text-brand-purple focus:text-brand-purple m-0 opacity-75 transition-all hover:opacity-100"
                href="https://www.instagram.com/akedofestival/"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                className="hover:text-brand-purple focus:text-brand-purple m-0 opacity-75 transition-all hover:opacity-100"
                href="https://www.tiktok.com/@akedo.festival"
                aria-label="TikTok"
              >
                <i className="bi bi-tiktok"></i>
              </a>
              <a
                className="hover:text-brand-purple focus:text-brand-purple m-0 opacity-75 transition-all hover:opacity-100"
                href="https://x.com/AkedoFestival"
                aria-label="Twitter / X"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                className="hover:text-brand-purple focus:text-brand-purple m-0 opacity-75 transition-all hover:opacity-100"
                href="https://www.facebook.com/share/1BRmBmwUtC/"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                className="hover:text-brand-purple focus:text-brand-purple m-0 opacity-75 transition-all hover:opacity-100"
                href="mailto:marketing@akedo.ca"
                aria-label="Email"
              >
                <i className="bi bi-envelope-heart-fill"></i>
              </a>
              <a
                className="hover:text-brand-purple focus:text-brand-purple m-0 opacity-75 transition-all hover:opacity-100"
                href="https://akedo.ca"
                aria-label="Website"
              >
                <i className="bi bi-globe2"></i>
              </a>
              <a
                className="hover:text-brand-purple focus:text-brand-purple m-0 opacity-75 transition-all hover:opacity-100"
                href="https://linktr.ee/akedofestival"
                aria-label="LinkTree"
              >
                <i className="bi bi-link-45deg"></i>
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
        image: "https://akedofestival.ca/ogp.jpg",
        url: "https://akedofestival.ca/",
        typeSpecific: {
          startDate: "2026-11-07T11:00-05:00",
          endDate: "2026-11-07T19:00-05:00",
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
            url: "https://akedofestival.ca",
          },
        },
      })}
    </>
  );
}
