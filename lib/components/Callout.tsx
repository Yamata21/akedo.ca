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
          className="absolute -top-14 -right-18 h-28 w-36 object-contain md:-top-20 md:-right-24 md:h-36 md:w-46"
          src={"/assets/mascot/chibi/kiko_kick.png"}
          alt=""
          height={2550}
          width={3300}
        />
        <Heading level="h2">{title}</Heading>
        <Paragraph className="">{children}</Paragraph>
      </div>
      <Image
        className="absolute -bottom-10 -left-12 h-24 w-24 object-contain md:-bottom-14 md:-left-18 md:h-36 md:w-36"
        src={"/assets/spraycan.png"}
        alt=""
        height={3048}
        width={2995}
      />
    </div>
  );
}
