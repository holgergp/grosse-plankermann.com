# grosse-plankermann.com

Personal portfolio website for Holger Grosse-Plankermann - Software Engineer & Nerd.

A single-page static site showcasing personal information, projects, and social media presence.

## Tech Stack

- **Framework**: [Astro 5.x](https://astro.build) - Static site generation with zero client-side JavaScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) - Utility-first CSS framework
- **Font**: [Geist](https://vercel.com/font) - Modern sans-serif typeface family
- **TypeScript**: Strict mode for type safety
- **Node**: v20

## Features

- Fully static HTML generation (no client-side JavaScript)
- Responsive design with mobile-first approach
- Automatic dark mode support using `prefers-color-scheme`
- Comprehensive SEO with Open Graph and Twitter Card meta tags
- JSON-LD structured data (Person schema)
- Sitemap generation
- Optimized for Core Web Vitals

## Development

```bash
# Install dependencies
npm install

# Start dev server at localhost:4321
npm run dev

# Build production site to ./dist/
npm run build

# Preview production build locally
npm run preview
```

## Deployment

### Production Hosting

The site is hosted on [statichost.eu](https://statichost.eu) (European hosting) with automatic deployment via GitHub webhook.

- **Hosting**: statichost.eu (Variable Object Assignment, Stockholm, Sweden)
- **URL**: https://holgergp-homepage.statichost.page/
- **Domain**: [grosse-plankermann.com](https://grosse-plankermann.com)
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 20
- **Deployment**: Push to main branch triggers GitHub webhook to statichost.eu for automatic build and deployment

### Preview Deployments

[Netlify](https://www.netlify.com) is used for automatic preview deployments on pull requests.

- Preview URLs are automatically generated for each PR
- Netlify configuration is maintained in `netlify.toml`
- Not used for production hosting

## Project Structure

```
/
├── src/
│   ├── pages/
│   │   ├── index.astro          # Homepage
│   │   ├── impressum.astro      # Legal imprint (German requirement)
│   │   └── datenschutz.astro    # Privacy policy (GDPR)
│   ├── components/
│   │   ├── Header.astro          # Main content section
│   │   ├── SocialLinks.astro     # Social media links
│   │   └── Footer.astro          # Copyright footer
│   ├── layouts/
│   │   └── Layout.astro          # Base HTML layout with SEO
│   └── styles/
│       └── global.css            # Tailwind config and theme
├── public/                       # Static assets
└── astro.config.mjs              # Astro configuration
```

## Migration Context

This site was migrated from WordPress to Astro for better performance, lower maintenance overhead, and modern development experience. See `specs/astro-migration-plan.md` for details.
