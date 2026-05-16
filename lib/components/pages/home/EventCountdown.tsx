"use client";

/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import { useEffect, useState } from "react";

const eventStart = new Date("2026-10-17T11:00:00-04:00").getTime();

function getTimeLeft() {
  const difference = Math.max(0, eventStart - Date.now());

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function EventCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="mt-6 w-full max-w-xl self-center rounded-2xl border border-white/30 bg-[#342b5a]/80 p-3 text-white shadow-xl backdrop-blur md:p-4 lg:self-start">
      <p className="mb-3 text-center text-xs font-semibold tracking-[0.18em] text-[#efd864] uppercase lg:text-left">
        Countdown to Ākēdo
      </p>
      <div className="grid grid-cols-4 gap-2 text-center">
        {[
          ["Days", timeLeft.days],
          ["Hours", timeLeft.hours],
          ["Mins", timeLeft.minutes],
          ["Secs", timeLeft.seconds],
        ].map(([label, value]) => (
          <div className="rounded-xl bg-white/12 px-2 py-3" key={label}>
            <p className="text-2xl font-black md:text-3xl">
              {value.toString().padStart(2, "0")}
            </p>
            <p className="mt-1 text-[0.65rem] font-semibold tracking-[0.14em] text-white/70 uppercase">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
