/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import Heading from "./core/typography/Heading";
import Paragraph from "./core/typography/Paragraph";
import Image from "next/image";

export default function Callout({
  className = "",
  title,
  children,
  id,
}: Readonly<{
  id?: string;
  children: React.ReactNode;
  title: string;
  className?: string;
}>) {
  return (
    <div className={`relative mx-auto max-w-4xl ${className}`} id={id}>
      <div className="border-brand-purple relative flex flex-col gap-4 rounded-2xl border-2 bg-[#d8c9f2] p-12">
        <Image
          className="absolute -top-10 -right-14 h-20 w-26 object-contain md:-top-15 md:-right-18 md:h-25 md:w-32.5"
          src={"/assets/mascot/chibi/kiko_kick.png"}
          alt=""
          height={2550}
          width={3300}
        />
        <Heading level="h2">{title}</Heading>
        <Paragraph className="">{children}</Paragraph>
      </div>
      <Image
        className="absolute -bottom-12 -left-8 h-32 w-32 object-contain md:-bottom-18 md:-left-12 md:h-48 md:w-48"
        src={"/assets/spraycan.png"}
        alt=""
        height={3048}
        width={2995}
      />
    </div>
  );
}
