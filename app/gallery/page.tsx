/* eslint-disable @next/next/no-img-element */
/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import Container from "@/lib/components/core/Container";
import Heading from "@/lib/components/core/typography/Heading";
import { galleryImages } from "@/lib/generated/gallery-images";
import { createMetadata } from "@/lib/utils/createMetadata";

export const metadata = createMetadata({ title: "Gallery" });

export default function GalleryPage() {
  return (
    <main className="bg-white py-24 md:py-32">
      <Container className="max-w-6xl">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Heading level="h1" className="text-brand-purple">
              Gallery
            </Heading>
            <p className="text-lg text-black/75">
              Moments from Ākēdo Festival.
            </p>
          </div>

          {galleryImages.length > 0 ? (
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {galleryImages.map((image) => (
                <div
                  className="border-brand-purple/20 mb-4 w-full break-inside-avoid overflow-hidden rounded-2xl border bg-[#d8c9f2]"
                  key={image.src}
                >
                  <img
                    alt={image.alt}
                    className="block h-auto w-full transition-transform duration-300 ease-out lg:hover:scale-105"
                    loading="lazy"
                    src={image.src}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="border-brand-purple/25 rounded-2xl border bg-[#d8c9f2] p-8">
              <p className="text-lg">Gallery coming soon.</p>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}
