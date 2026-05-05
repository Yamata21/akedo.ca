"use client";
/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import { type NavigationType } from "@/config/navigation.config";
import Link from "next/link";
import { useEffect, useState } from "react";

function renderItem(item: NavigationType, setMenuOpen: () => void) {
  return (
    <Link
      onClick={() => setMenuOpen()}
      key={item.title}
      href={item.href ?? "#"}
      target={item.newWindow ? `_blank` : "_self"}
      className="text-brand-white hover:bg-brand-white focus:bg-brand-white hover:text-brand-indigo focus:text-brand-indigo rounded-lg px-4 py-2 font-semibold tracking-wide transition-colors"
    >
      {item.title}
    </Link>
  );
}

export default function Navbar({ items }: { items: NavigationType[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="bg-brand-indigo/95 border-brand-white/20 fixed top-0 z-100 flex h-18 w-full items-center justify-end border-b px-4 shadow-lg backdrop-blur-xl md:hidden">
        <p
          className={`font-brand text-brand-white font-bold ${scrolled ? "opacity-100" : "opacity-0"} transition-all`}
        >
          Ākēdo Festival
        </p>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Open Menu"
          className={`text-brand-white bg-brand-purple ml-auto rounded-lg px-4 py-2 text-xl shadow-sm`}
        >
          <i className={`bi bi-list`} />
        </button>
        <ul
          className={`bg-brand-indigo/95 border-brand-white/20 absolute top-18 left-0 flex w-full flex-col items-center justify-center gap-4 overflow-hidden border-b shadow-lg backdrop-blur-sm transition-all duration-300 ${menuOpen ? "max-h-screen py-8 pb-12 opacity-100" : "pointer-events-none max-h-0 py-0 opacity-0"}`}
        >
          {items.map((menuItem) => (
            <li key={menuItem.title}>
              {renderItem(menuItem, () => {
                setMenuOpen(false);
              })}
            </li>
          ))}
          <li>
            <Link
              href={
                "https://www.zeffy.com/en-CA/ticketing/genshiken-festival-march-28th"
              }
              target="_blank"
              className="bg-brand-orange hover:bg-brand-white focus:bg-brand-white text-white hover:text-brand-indigo focus:text-brand-indigo rounded-lg px-4 py-2 font-semibold transition-colors"
            >
              Buy Tickets
              <i className="bi bi-arrow-right ml-1"></i>
            </Link>
          </li>
        </ul>
      </nav>

      {/* DESKTOP */}
      <nav
        className={`sticky top-0 z-100 m-auto hidden h-18 flex-col justify-end pb-10 text-sm md:flex md:flex-row md:justify-center md:bg-transparent md:pb-0 lg:text-base`}
      >
        <div
          className={`bg-brand-indigo/95 border-brand-white/20 shadow-brand-indigo/30 flex h-full justify-center border-b px-6 shadow-lg transition-all backdrop-blur-lg ${scrolled ? "w-full rounded-b-2xl xl:w-[80%] 2xl:w-[50%]" : "w-full rounded-b-none"}`}
        >
          <ul
            className={`flex h-full ${scrolled ? "translate-x-0" : "md:translate-x-24"} flex-col items-center justify-center gap-3 transition-all md:flex-row lg:gap-6`}
          >
            {items.map((menuItem) => (
              <li key={menuItem.title}>
                {renderItem(menuItem, () => setMenuOpen(false))}
              </li>
            ))}
            <li
              className={`text-brand-white ${scrolled ? "visible opacity-100" : "invisible opacity-0"} hidden transition-all duration-500 md:block`}
            >
              |
            </li>
            <li
              className={`${scrolled ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-500`}
            >
              <Link
                href={
                  "https://www.zeffy.com/en-CA/ticketing/genshiken-festival-march-28th"
                }
                target="_blank"
                className="bg-brand-orange hover:bg-brand-white focus:bg-brand-white text-white hover:text-brand-indigo focus:text-brand-indigo rounded-lg px-4 py-2 font-semibold transition-colors"
              >
                Buy Tickets
                <i className="bi bi-arrow-right ml-1"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
