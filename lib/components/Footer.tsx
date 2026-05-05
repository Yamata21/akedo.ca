/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="min-w-screen">
      <div className="bg-brand-white inset-shadow-brand-purple/50 relative flex min-h-72 flex-col overflow-clip px-12 pt-24 inset-shadow-xs sm:min-h-48 sm:px-32 md:justify-center md:pt-0">
        <div className="">
          <Image
            loading="lazy"
            className="mb-6 h-auto w-36 md:w-44"
            src={"/ogp.png"}
            width={1080}
            height={1080}
            alt="Ākēdo Festival"
          />
          <p className="text-base font-bold uppercase lg:text-lg">
            &copy; {new Date().getFullYear()} Ākēdo Festival Organizing
            Committee.
          </p>
        </div>
        <div className="right-0 bottom-0 mt-24 flex items-center justify-end opacity-50 md:absolute">
          <Image
            loading="lazy"
            className="-mr-14 max-w-36 md:mr-0 xl:max-w-44"
            src={"/assets/mascot/chibi/corner.png"}
            width={2048}
            height={2048}
            alt=""
          />
        </div>
      </div>
    </footer>
  );
}
