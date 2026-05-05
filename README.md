# akedo.ca

<img style="display: block; margin: 0 auto" src="./public/assets/mascot/chibi/corner.png" height="200" alt="Akedo corner mascot art."/>

Ākēdo is a University of Guelph-run student club dedicated to hosting Guelph's largest anime convention. In addition to pop-up events throughout the year, Ākēdo presents its main festival in the fall: a community-driven celebration of anime, gaming, art, and pop culture.

This repository contains the code for the public-facing Ākēdo Festival website. The site is built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

For local development, use `pnpm`.

```bash
# Install dependencies
pnpm install

# Run the Next.js dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the development version of the site.

## Project Notes

- Site routes live in `app`.
- Shared UI components live in `lib/components`.
- Navigation links are configured in `config/navigation.config.ts`.
- Static images, PDFs, and other public assets live in `public`.

## Learn More

- [pnpm documentation](https://pnpm.io/)
- [Next.js documentation](https://nextjs.org/docs)
- [Tailwind CSS documentation](https://tailwindcss.com/)

## Credits

Thank you to [suraj](https://github.com/surajgoraya), the original creator of this website, for building the foundation this version is based on.

## Deploying

Deployment is configured for Cloudflare using OpenNext and Wrangler. Use the existing project deployment process, or coordinate with the website maintainers before publishing changes.
