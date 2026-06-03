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
    <section className="bg-brand-indigo relative overflow-hidden rounded-2xl px-6 py-10 text-white md:px-10 md:py-12">
      <div className="absolute inset-x-0 top-0 h-2 bg-[#efd864]" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="text-brand-white text-sm font-bold uppercase">
          Newsletters
        </p>
        <h2 className="font-brand mt-2 text-4xl font-bold md:text-5xl">
          Stay In The Loop
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
          Pick the updates you want and sign up for the Ākēdo newsletter that
          matches your plans.
        </p>

        <div className="mt-8 w-full rounded-2xl bg-white p-4 text-left shadow-2xl shadow-black/20 md:p-5">
          <div className="mx-auto max-w-md">
            <label
              className="text-brand-purple block text-xs font-bold uppercase"
              htmlFor="newsletter-select"
            >
              Newsletter
            </label>
            <div className="relative mt-2">
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

          <div className="border-brand-purple/20 mt-5 overflow-hidden rounded-xl border bg-white">
            <iframe
              allowTransparency
              className="h-64 w-full border-0 md:h-72"
              key={selectedNewsletter.src}
              src={selectedNewsletter.src}
              title={`${selectedNewsletter.label} newsletter signup form`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
