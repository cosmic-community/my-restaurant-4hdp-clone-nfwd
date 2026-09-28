# NKORA Café

![App Preview](https://imgix.cosmicjs.com/89349b30-6c6c-11f1-a7b1-a329933c1eaf-autopilot-photo-1521737604893-d14cc237f11d-1781934883928.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A warm, editorial one-page café website built with Next.js 16 and [Cosmic](https://www.cosmicjs.com). Minimal and refined with a soft neutral palette, generous white space, and slow, considered transitions — inspired by the quiet confidence of independent specialty coffee shops.

## Features

- ☕ **Full-bleed hero** with bold all-caps tagline and warm intro copy
- 📖 **Philosophy/mission section** written in a personal founder's voice
- 🍽️ **Menu highlights** with story-driven featured items + full menu page
- 📍 **Locations carousel** with horizontally scrollable shopfront photos
- ✊ **Bold statement section** with oversized brand values
- ⭐ **Social proof** linking to reviews and press coverage
- 🖼️ **Photo gallery** capturing atmosphere and people
- 📞 **Paired closing CTAs** — Visit us / Reach out
- 📱 Fully responsive, accessible, SEO-friendly design

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a362ab25b2ac5cef3df8fc1&clone_repository=6a362bd55b2ac5cef3df9008)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a restaurant website with menu items (including images, pricing, and dietary info), menu categories, locations, and customer reviews.
>
> User instructions: Design a one-page website for [BRAND NAME], a [type of café/coffee shop/restaurant] focused on [your concept/cuisine/specialty]. AESTHETIC: Minimal and editorial, but warm rather than cold — soft neutral palette (cream, sand, muted earth tones) with one accent color tied to the brand. Generous white space, refined sans-serif or serif typography with wide letter-spacing on headlines. Subtle, slow transitions between sections. Simple line-art illustrations used as light decorative texture. SECTIONS: sticky nav, full-bleed hero, philosophy/mission, menu highlights, locations/journey, bold statement section, social proof, shop/picks, photo gallery, closing CTA, footer. VOICE: Warm and personal in storytelling sections, confident and sparse in headline sections. IMPORTANT: The user provided reference URLs (https://www.bubblepoppancakes.com/, https://nkora.co.uk/)."

### Code Generation Prompt

> Build a Next.js application for an online business called "My Restaurant". The content is managed in Cosmic CMS with the following object types: site-settings, menu-categories, menu-items, locations, reviews-press. Create a beautiful, modern, responsive design with a homepage and pages for each content type. Use the design style, layout, and content structure from https://www.bubblepoppancakes.com/ and https://nkora.co.uk/ as inspiration.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org/) — App Router, Server Components
- [Cosmic](https://www.cosmicjs.com/docs) — Headless CMS
- [TypeScript](https://www.typescriptlang.org/) — Strict typing
- [Tailwind CSS](https://tailwindcss.com/) — Styling

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (or Node.js 18+)
- A [Cosmic](https://www.cosmicjs.com) account and bucket

### Installation

```bash
bun install
```

Set up environment variables (these are provided automatically in the Cosmic dashboard):

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch site settings
const { object: settings } = await cosmic.objects
  .findOne({ type: 'site-settings', slug: 'site-settings' })
  .depth(1)

// Fetch featured menu items
const { objects: items } = await cosmic.objects
  .find({ type: 'menu-items', 'metadata.featured': true })
  .depth(1)

// Fetch all locations
const { objects: locations } = await cosmic.objects
  .find({ type: 'locations' })
  .depth(1)
```

## Cosmic CMS Integration

This app reads from five object types:

- **site-settings** — brand name, hero content, mission, statements, contact info
- **menu-categories** — organizing menu items
- **menu-items** — name, story, price, image, dietary info, featured flag
- **locations** — name, address, hours, photo, maps link
- **reviews-press** — quotes, sources, type (review/press)

Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

- **Vercel** — Connect your repo and add environment variables in the dashboard
- **Netlify** — Set build command to `bun run build`

Set `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` in your hosting platform's environment variables.

<!-- README_END -->