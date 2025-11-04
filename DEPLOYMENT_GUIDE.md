# Deployment Guide for grosse-plankermann.com

Your Astro site migration is complete! Here's everything you need to deploy to Netlify.

## What's Been Built

### Site Features
- **Modern Astro-based site** with TypeScript support
- **Dark mode** with automatic system preference detection
- **Albert Sans font** (your preferred choice)
- **Purple accent color** (#8B5CF6)
- **Responsive design** (mobile-first)
- **SEO optimized** with Open Graph tags and JSON-LD structured data
- **Automatic sitemap** generation

### Components Created
- `Header.astro` - Name and bio section
- `SocialLinks.astro` - All your social media connections
- `Projects.astro` - YouTube channel and podcast
- `Footer.astro` - Copyright and credits
- `Layout.astro` - Base layout with meta tags

### Build Configuration
The `netlify.toml` file is ready with:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "20"
```

## Deployment to Netlify

### Option 1: Deploy via Netlify UI (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Complete Astro site migration"
   git push origin initialMigration
   ```

2. **Sign in to Netlify**
   - Go to https://app.netlify.com
   - Sign in with your GitHub account

3. **Create New Site**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select the `grosse-plankermann.com` repository
   - Select branch: `initialMigration` (or merge to main first)

4. **Configure Build Settings**
   - Build command: `npm run build` (auto-detected from netlify.toml)
   - Publish directory: `dist` (auto-detected from netlify.toml)
   - Click "Deploy site"

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
ntl login

# Initialize and deploy
ntl init
ntl deploy --prod
```

## Custom Domain Configuration

### Step 1: Add Domain in Netlify

1. In Netlify dashboard, go to "Domain management" → "Custom domains"
2. Click "Add custom domain"
3. Enter: `grosse-plankermann.com`
4. Also add: `www.grosse-plankermann.com`
5. Choose primary domain (with or without www)

### Step 2: Configure DNS

**Option A: Use Netlify DNS (Recommended)**

1. In Netlify domain settings, click "Set up Netlify DNS"
2. Netlify will provide nameservers like:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```
3. Update nameservers at your domain registrar
4. Wait for DNS propagation (24-48 hours, usually faster)
5. Netlify handles SSL automatically

**Option B: Keep Existing DNS Provider**

Add these DNS records at your DNS provider:

For apex domain (grosse-plankermann.com):
```
Type: A
Name: @ (or leave blank)
Value: 75.2.60.5
TTL: 3600
```

For www subdomain:
```
Type: CNAME
Name: www
Value: your-site-name.netlify.app
TTL: 3600
```

### Step 3: Enable HTTPS

1. SSL certificate auto-provisions after DNS propagation
2. Enable "Force HTTPS" in domain settings
3. Verify at https://grosse-plankermann.com

## Post-Deployment Tasks

### Immediate Tasks
- [ ] Verify site loads at Netlify URL
- [ ] Configure custom domain
- [ ] Wait for DNS propagation
- [ ] Verify HTTPS certificate
- [ ] Test site at https://grosse-plankermann.com

### Content Updates Needed
- [ ] Update AutoWeird FM podcast URL in `src/components/Projects.astro:15`
- [ ] Verify all social media URLs are correct in `src/components/SocialLinks.astro`
- [ ] Create a proper og-image.png (current is placeholder SVG at 1200x630px)
- [ ] Update JSON-LD structured data if needed in `src/layouts/Layout.astro`

### Optional Enhancements
- [ ] Add analytics (Plausible, Fathom, or Netlify Analytics)
- [ ] Set up email notifications for build failures
- [ ] Add more projects or content sections
- [ ] Create custom 404 page

## Local Development

Test locally before deploying:

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Continuous Deployment

Once connected to GitHub, Netlify will:
- Deploy automatically on every push to main branch
- Create preview deployments for pull requests
- Send build notifications

## Project Structure

```
/
├── src/
│   ├── pages/
│   │   └── index.astro          # Homepage
│   ├── components/
│   │   ├── Header.astro          # Name and bio
│   │   ├── SocialLinks.astro     # Social media links
│   │   ├── Projects.astro        # YouTube/Podcast
│   │   └── Footer.astro          # Footer
│   ├── layouts/
│   │   └── Layout.astro          # Base layout
│   └── styles/
│       └── global.css            # Global styles
├── public/
│   ├── favicon.svg               # Favicon
│   └── og-image.svg              # Social sharing image
├── astro.config.mjs              # Astro configuration
├── netlify.toml                  # Netlify deployment config
├── package.json                  # Dependencies
└── tsconfig.json                 # TypeScript config
```

## Troubleshooting

**Build fails on Netlify:**
- Check build logs in Netlify dashboard
- Ensure all dependencies are in package.json
- Verify Node version matches (v20)

**DNS not propagating:**
- Check with: `dig grosse-plankermann.com`
- Wait 24-48 hours for full propagation
- Clear browser cache

**SSL certificate issues:**
- Ensure DNS is properly configured
- Wait a few hours after DNS propagation
- Contact Netlify support if needed

## Performance

Your site should achieve excellent Lighthouse scores:
- Performance: 95-100
- Accessibility: 90-100
- Best Practices: 95-100
- SEO: 95-100

Run Lighthouse in Chrome DevTools to verify.

## Support

- Astro Docs: https://docs.astro.build
- Netlify Docs: https://docs.netlify.com
- Tailwind CSS: https://tailwindcss.com/docs

---

Ready to deploy! Let me know if you need any clarification or adjustments before going live.
