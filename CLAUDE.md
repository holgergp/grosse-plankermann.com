# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Holger Grosse-Plankermann (Software Engineer & Nerd), built with Astro as a static site. The site is a single-page design showcasing personal information, social media links, and projects (YouTube channel and podcast).

## Commands

### Development
```bash
npm run dev          # Start dev server at localhost:4321
npm run build        # Build production site to ./dist/
npm run preview      # Preview production build locally
npm run astro        # Run Astro CLI commands
```

### Deployment
- **Production Hosting**: statichost.eu (European hosting)
  - URL: https://holgergp-homepage.statichost.page/
  - Domain: grosse-plankermann.com (points to statichost.eu)
  - Automatic deployment via GitHub webhook on push/merge to main
- **Preview/PR Deployments**: Netlify (for GitHub PR previews only)
  - Automatic builds for pull requests
  - Not used for production
- **Build command**: `npm run build`
- **Publish directory**: `dist`

## Architecture

### Tech Stack
- **Framework**: Astro 5.x (static site generation)
- **Styling**: Tailwind CSS v4 (using @tailwindcss/vite plugin)
- **Font**: Geist (Google Fonts)
- **TypeScript**: Strict mode enabled
- **Node Version**: 20 (specified in netlify.toml)

### Project Structure
```
/
├── src/
│   ├── pages/
│   │   ├── index.astro          # Homepage
│   │   ├── impressum.astro      # Legal imprint (German requirement)
│   │   └── datenschutz.astro    # Privacy policy (GDPR)
│   ├── components/
│   │   ├── Header.astro          # Name, bio, and project links
│   │   ├── SocialLinks.astro     # Social media icons
│   │   └── Footer.astro          # Copyright footer
│   ├── layouts/
│   │   └── Layout.astro          # Base HTML layout with SEO meta tags
│   └── styles/
│       └── global.css            # Tailwind config and theme variables
├── public/                       # Static assets (favicon, og-image)
├── specs/
│   └── astro-migration-plan.md   # Original migration plan from WordPress
├── astro.config.mjs              # Astro configuration with sitemap
├── netlify.toml                  # Netlify deployment config
└── tsconfig.json                 # TypeScript config (strict mode)
```

### Component Architecture

All components are Astro components (.astro files) with no client-side JavaScript - fully static HTML generation.

**Layout.astro**: Base layout with SEO setup
- Includes Open Graph and Twitter Card meta tags
- JSON-LD structured data for Person schema
- Responsive viewport configuration
- Font loading from Google Fonts (Geist family)
- Canonical URL generation

**index.astro**: Single homepage composing all components
- Imports Layout, Header, SocialLinks, and Footer
- Provides title and description for SEO
- Uses Tailwind utility classes for spacing and responsive layout

**Header.astro**: Main content section
- Personal introduction with large typography (text-3xl to text-6xl responsive)
- Inline links to YouTube channel and podcast with hover effects
- Uses semantic header element

**SocialLinks.astro**: Social media icon links
- Icon-only design using inline SVG definitions
- Links to GitHub, Mastodon, Instagram, LinkedIn, Xing, SoundCloud
- 24x24px icons with hover color transitions
- Accessible aria-labels for screen readers

**Footer.astro**: Site footer
- Dynamic copyright year
- Credit to Astro framework
- Border-top separator with opacity

### Styling System

**Tailwind Configuration** (in global.css):
- Custom theme variables defined using @theme directive
- Font family: Geist with system font fallbacks
- Accent color: Purple (#8B5CF6 / #7C3AED for hover)
- Light mode: Light background (#FAFAFA), dark text (#1A1A1A)
- Dark mode: Dark background (#0A0A0A), light text (#FAFAFA)
- Automatic dark mode support using `prefers-color-scheme`

**Responsive Design**:
- Mobile-first approach using Tailwind breakpoints (md:, lg:)
- Generous spacing with responsive padding (px-18, px-20, px-22)
- Typography scales up from mobile to desktop
- No custom breakpoints defined - uses Tailwind defaults

### SEO & Performance

**SEO Features**:
- Comprehensive meta tags (title, description, canonical)
- Open Graph tags for social media sharing
- Twitter Card support
- JSON-LD structured data (Person schema)
- Sitemap generation via @astrojs/sitemap integration
- Semantic HTML structure

**Performance Characteristics**:
- Zero client-side JavaScript (fully static)
- HTML pre-rendered at build time
- Font loading from CDN with preconnect hints
- Minimal CSS footprint (Tailwind utilities only)
- Fast page loads optimized for Core Web Vitals

### Content & Brand

**Personal Information**:
- Name: Holger Grosse-Plankermann
- Tagline: "Software Engineer & Nerd"
- Bio: Likes specialty coffee, craft beer, records with crushing guitars
- YouTube: Papperlapapp (humor with brackets)
- Podcast: AutoWeird FM

**Social Media Profiles**:
- GitHub: holgergp
- Twitter: holgergp
- Mastodon: @holgergp@chaos.social
- Instagram: holgergp
- LinkedIn: in/holgergp
- Xing: profile/Holger_GrossePlankermann
- SoundCloud: holgergp

## Migration Context

This site was migrated from WordPress (Bjork theme) to modern Astro stack. See `specs/astro-migration-plan.md` for detailed migration rationale and implementation plan. Key drivers:
- Better performance (static vs dynamic)
- Lower maintenance (no WordPress updates)
- Version controlled content
- Free hosting on Netlify
- Modern development experience

## Development Notes

### Working with Components
- All components use Astro's component syntax (no frameworks like React/Vue)
- Props are defined in frontmatter using TypeScript interfaces where needed
- No client-side JavaScript required - everything is static HTML

### Styling Guidelines
- Use Tailwind utility classes for all styling
- Custom theme variables defined in global.css @theme block
- Dark mode handled automatically via prefers-color-scheme
- Maintain consistent spacing scale using Tailwind defaults

### Adding Content
- To update bio/description: Edit Header.astro and Layout.astro
- To add/remove social links: Modify socialLinks array in SocialLinks.astro
- To change colors: Update theme variables in global.css

### Deployment
- **Production**: Push to main branch triggers GitHub webhook to statichost.eu
  - Automatic build and deployment via statichost.eu
  - Domain grosse-plankermann.com points to https://holgergp-homepage.statichost.page/
  - SSL certificate managed by statichost.eu
  - Hosting in Europe
- **PR Previews**: Netlify used for automatic preview deployments
  - Push to PR branches triggers automatic Netlify preview builds
  - Preview URLs available in GitHub PR comments
  - Netlify not used for production
