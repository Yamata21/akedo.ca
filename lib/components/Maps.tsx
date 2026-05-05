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
}

export default function Maps({ embedCode, src, className }: MapsProps) {
  return (
    <div
      className={`border-brand-purple relative rounded-2xl border-2 ${className}`}
    >
      <div className="bg-brand-purple pointer-events-none absolute z-10 h-72 w-full opacity-70 mix-blend-hue">
        &nbsp;
      </div>
      <iframe
        className="h-72 w-full rounded-[14px]"
        src={src ?? `https://www.google.com/maps/embed?pb=${embedCode}`}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
