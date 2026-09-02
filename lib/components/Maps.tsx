/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

interface MapsProps {
  embedCode?: string;
  src?: string;
  className?: string;
  themed?: boolean;
}

export default function Maps({
  embedCode,
  src,
  className,
  themed = true,
}: MapsProps) {
  return (
    <div
      className={`${themed ? "border-brand-purple" : ""} relative ${themed ? "rounded-2xl border-2" : "h-full"} ${className}`}
    >
      <div
        className={`${themed ? "bg-brand-purple" : ""} pointer-events-none absolute z-10 ${themed ? "h-72" : "h-full"} w-full ${themed ? "opacity-70 mix-blend-hue" : ""}`}
      >
        &nbsp;
      </div>
      <iframe
        className={`${themed ? "h-72" : "h-full"} w-full rounded-[14px]`}
        src={src ?? `https://www.google.com/maps/embed?pb=${embedCode}`}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
