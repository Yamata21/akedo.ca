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
      <div className="bg-brand-white border-brand-purple relative flex flex-col gap-4 rounded-2xl border-2 p-12">
        <Image
          className="absolute -top-12 -right-12 h-24 w-24 md:-top-18 md:-right-14 md:h-31.25 md:w-31.25"
          src={"/assets/mascot/chibi/kiko_kick.png"}
          alt=""
          height={125}
          width={125}
        />
        <Heading level="h2">{title}</Heading>
        <Paragraph className="">{children}</Paragraph>
      </div>
      <Image
        className="absolute -bottom-9.5 -left-6.5 h-24 w-24 md:-bottom-12 md:-left-8 md:h-31.25 md:w-31.25"
        src={"/assets/flowers.webp"}
        alt=""
        height={125}
        width={125}
      />
    </div>
  );
}
