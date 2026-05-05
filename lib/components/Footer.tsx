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
          <p className="text-base font-bold uppercase lg:text-lg">
            &copy; {new Date().getFullYear()} Ākēdo Festival Organizing
            Committee.
          </p>
        </div>
        <div className="right-0 bottom-0 mt-24 flex items-center justify-between opacity-50 md:absolute md:justify-center">
          <Image
            loading="lazy"
            className="-ml-14 max-w-25 md:ml-0 xl:max-w-34"
            src={"/assets/mascot/chibi/haruheart.webp"}
            width={150}
            height={150}
            alt=""
          />
          <Image
            loading="lazy"
            className="-mr-14 max-w-25 md:mr-0 xl:max-w-34"
            src={"/assets/mascot/chibi/akiheart.webp"}
            width={150}
            height={150}
            alt=""
          />
        </div>
      </div>
    </footer>
  );
}
