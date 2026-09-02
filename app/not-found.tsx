/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import Button from "@/lib/components/core/Button";
import Container from "@/lib/components/core/Container";
import { createMetadata } from "@/lib/utils/createMetadata";
import Image from "next/image";

export const metadata = createMetadata({ title: "Not Found..." });
export default function NotFound() {
  return (
    <Container className="flex min-h-[83vh] items-center justify-center">
      <div className="flex flex-col gap-2">
        <div className="mb-12 flex w-full justify-center">
          <Image
            alt="Kiko, in Chibi, kicking into the air with a determined expression on their face."
            src={"/assets/mascot/chibi/kiko_kick.png"}
            height={600}
            width={300}
          />
        </div>
        <h1 className="text-2xl font-bold">
          We&apos;re Sorry. Kiko might have misplaced that page...
        </h1>
        <p className="text-lg font-light italic">
          She&apos;s trying her best to find it...
        </p>
        <br />
        <Button href="/" className="mx-auto mt-12 border-none" isGhost>
          <i className="bi bi-arrow-left mr-2" />
          Uh..ok, return me home
        </Button>
      </div>
    </Container>
  );
}
