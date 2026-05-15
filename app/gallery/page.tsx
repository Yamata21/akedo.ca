/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

import fs from "node:fs/promises";
import path from "node:path";

import Image from "next/image";

import Container from "@/lib/components/core/Container";
import Heading from "@/lib/components/core/typography/Heading";
import { createMetadata } from "@/lib/utils/createMetadata";

export const metadata = createMetadata({ title: "Gallery" });

const galleryDirectory = path.join(process.cwd(), "public/assets/gallery");
const supportedImageExtensions = new Set([
  ".avif",
  ".gif",
  ".jpeg",
  ".jpg",
  ".png",
  ".webp",
]);
const aspectRatios = ["4 / 5", "1 / 1", "3 / 4", "5 / 4", "4 / 3"];

async function getGalleryImages() {
  try {
    const entries = await fs.readdir(galleryDirectory, { withFileTypes: true });

    return entries
      .filter((entry) => {
        const extension = path.extname(entry.name).toLowerCase();
        return entry.isFile() && supportedImageExtensions.has(extension);
      })
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((entry, index) => ({
        alt: `Ākēdo Festival gallery photo ${index + 1}`,
        aspectRatio: aspectRatios[index % aspectRatios.length],
        src: `/assets/gallery/${encodeURIComponent(entry.name)}`,
      }));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

export default async function GalleryPage() {
  const images = await getGalleryImages();

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

          {images.length > 0 ? (
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {images.map((image) => (
                <div
                  className="border-brand-purple/20 relative mb-4 w-full break-inside-avoid overflow-hidden rounded-2xl border bg-[#d8c9f2]"
                  key={image.src}
                  style={{ aspectRatio: image.aspectRatio }}
                >
                  <Image
                    alt={image.alt}
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
