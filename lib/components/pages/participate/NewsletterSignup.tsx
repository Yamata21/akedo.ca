"use client";

/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import { useState } from "react";

type NewsletterOption = {
  label: string;
  src: string;
};

const newsletterOptions: NewsletterOption[] = [
  {
    label: "Attendees",
    src: "https://www.zeffy.com/en-CA/embed/newsletter-form/akedo-2026-attendees-newsletter",
  },
  {
    label: "Artist Alley",
    src: "https://www.zeffy.com/en-CA/embed/newsletter-form/akedo-2026-vendors-artist-alley-newsletter",
  },
  {
    label: "Vendors",
    src: "https://www.zeffy.com/en-CA/embed/newsletter-form/akedo-2026-vendors-newsletter",
  },
  {
    label: "Volunteering",
    src: "https://www.zeffy.com/en-CA/embed/newsletter-form/akedo-2026-volunteering-newsletter",
  },
  {
    label: "Performances",
    src: "https://www.zeffy.com/en-CA/embed/newsletter-form/akedo-2026-performances-newsletter",
  },
  {
    label: "Panels & Workshops",
    src: "https://www.zeffy.com/en-CA/embed/newsletter-form/akedo-2026-panels-workshops-newsletter",
  },
];

export default function NewsletterSignup() {
  const [selectedNewsletter, setSelectedNewsletter] = useState(
    newsletterOptions[0],
  );

  return (
    <section className="border-brand-purple/25 relative overflow-hidden rounded-2xl border bg-[#f8f2ff] px-6 py-8 md:px-10 md:py-10">
      <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(22rem,1fr)] lg:items-start">
        <div>
          <p className="text-brand-orange text-sm font-bold uppercase">
            Newsletters
          </p>
          <h2 className="font-brand text-brand-purple mt-2 text-4xl font-bold">
            Stay In The Loop
          </h2>
          <p className="mt-4 text-base leading-relaxed text-black/70 md:text-lg">
            Get updates for the parts of Ākēdo Festival you care about most.
          </p>

          <label
            className="text-brand-purple mt-7 block text-sm font-bold uppercase"
            htmlFor="newsletter-select"
          >
            Newsletter
          </label>
          <div className="relative mt-2 max-w-sm">
            <select
              className="border-brand-purple/30 focus:border-brand-purple focus:ring-brand-purple/30 w-full appearance-none rounded-lg border bg-white px-4 py-3 pr-11 font-semibold text-black/80 shadow-sm transition outline-none focus:ring-4"
              id="newsletter-select"
              onChange={(event) => {
                const nextNewsletter = newsletterOptions.find(
                  (newsletter) => newsletter.src === event.target.value,
                );

                if (nextNewsletter) {
                  setSelectedNewsletter(nextNewsletter);
                }
              }}
              value={selectedNewsletter.src}
            >
              {newsletterOptions.map((newsletter) => (
                <option key={newsletter.src} value={newsletter.src}>
                  {newsletter.label}
                </option>
              ))}
            </select>
            <i className="bi bi-chevron-down pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-black/50" />
          </div>
        </div>

        <div className="border-brand-purple/20 min-h-[30rem] overflow-hidden rounded-2xl border bg-white shadow-xl shadow-[#6a329f]/10">
          <iframe
            allowTransparency
            className="h-[30rem] w-full border-0"
            key={selectedNewsletter.src}
            src={selectedNewsletter.src}
            title={`${selectedNewsletter.label} newsletter signup form`}
          />
        </div>
      </div>
    </section>
  );
}
