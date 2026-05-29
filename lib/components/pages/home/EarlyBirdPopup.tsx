"use client";

/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const ticketUrl = "https://www.zeffy.com/en-CA/ticketing/akedo-festival--2026";
const storageKey = "akedo-early-bird-popup-2026";
const saleStart = new Date("2026-06-01T00:00:00-04:00").getTime();
const saleEnd = new Date("2026-09-01T00:00:00-04:00").getTime();

export default function EarlyBirdPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [saleIsActive, setSaleIsActive] = useState(false);

  const closePopup = useCallback(() => {
    window.sessionStorage.setItem(storageKey, "dismissed");
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const now = Date.now();
    if (now >= saleEnd || window.sessionStorage.getItem(storageKey)) {
      return;
    }

    setSaleIsActive(now >= saleStart);
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [closePopup, isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      aria-modal="true"
      className="bg-brand-indigo/80 fixed inset-0 z-[200] flex items-end justify-center p-4 backdrop-blur-sm sm:items-center"
      onClick={closePopup}
      role="dialog"
    >
      <section
        aria-labelledby="early-bird-title"
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          aria-label="Close announcement"
          className="bg-brand-indigo/45 hover:text-brand-indigo focus:text-brand-indigo absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-lg text-xl text-white transition-colors hover:bg-white focus:bg-white"
          onClick={closePopup}
          type="button"
        >
          <i className="bi bi-x-lg" />
        </button>

        <div className="bg-brand-purple relative overflow-hidden px-6 py-8 text-white sm:px-8">
          <Image
            alt=""
            className="absolute -right-10 -bottom-12 h-44 w-44 object-contain opacity-95"
            height={2550}
            src="/assets/mascot/chibi/kiko_kick.png"
            width={3300}
          />
          <div className="relative max-w-[70%]">
            <p className="text-brand-white text-xs font-bold uppercase">
              Early Bird Tickets
            </p>
            <h2
              className="font-brand mt-2 text-4xl leading-tight font-bold"
              id="early-bird-title"
            >
              Limited Time Offer
            </h2>
          </div>
        </div>

        <div className="px-6 py-6 sm:px-8">
          <div className="flex items-center gap-4">
            <p className="font-brand text-brand-purple text-6xl font-bold">
              $10
            </p>
            <p className="font-semibold text-black/75">
              Lowest ticket price of the year
              <br />
              Until August 31, 2026
            </p>
          </div>
          <p className="mt-4 text-black/70">
            Join us at the University of Guelph on November 7 for Ākēdo Festival
            2026.
          </p>
          <Link
            className="bg-brand-orange hover:bg-brand-purple focus:bg-brand-purple mt-6 block w-full rounded-lg px-6 py-4 text-center text-lg font-semibold text-white transition-colors"
            href={ticketUrl}
            onClick={closePopup}
            target="_blank"
          >
            {saleIsActive
              ? "Buy Early Bird Tickets"
              : "View Early Bird Tickets"}
            <i className="bi bi-arrow-right ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
