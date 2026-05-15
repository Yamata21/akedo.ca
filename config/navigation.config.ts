/**
 * Copyright (c) 2026 Genshiken Festival Organizing Committee, Contributors and Artists.
 * Copyright (c) 2026 Ontario Anime Society.
 *
 * All rights reserved.
 */

export const ALL_NAVIGATION: NavigationType[] = [
  {
    title: "About",
    href: "/#about",
  },
  // {
  //   title: "Events",
  //   href: "/#events",
  // },
  {
    title: "Venue",
    href: "/#venue",
  },
  {
    title: "Event Guide",
    href: "/assets/2026/Genshiken_2026_Guide.pdf",
    newWindow: true,
  },
  {
    title: "TOS/Policies",
    href: "/tos",
  },
];

export type NavigationType = {
  title: string;
  href?: string;
  newWindow?: boolean;
  children?: NavigationItemType[];
};

export type NavigationItemType = {
  title: string;
  href: string;
};
