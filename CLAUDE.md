# Davies Portfolio - Next.js Documentation

## Project Overview

This is a high-performance Next.js portfolio website, converted from an HTML template to leverage Next.js features for better SEO, performance, and user experience. The site features advanced GSAP animations, smooth scroll effects, and a modern, professional design.

**Live URL**: http://localhost:3000 (development)

## Tech Stack

- **Framework**: Next.js 16.2.1 (with Turbopack)
- **Runtime**: React 19.2.4
- **Language**: TypeScript 5
- **Styling**: Custom CSS + Bootstrap 5
- **Animations**: GSAP 3.14.2 with ScrollTrigger
- **Fonts**: Custom fonts (Outfit, Space Grotesk)
- **Package Manager**: npm

## Project Structure

```
portfolio/
├── public/
│   ├── fonts/          # Custom web fonts
│   ├── images/         # Static images (work samples, awards, icons)
│   ├── media/          # Video files (nexbot.mp4, davies-video.mp4)
│   └── js/             # Static JavaScript files
├── src/
│   ├── app/
│   │   ├── layout.tsx  # Root layout with metadata
│   │   ├── page.tsx    # Main homepage component
│   │   └── globals.css # Global CSS reset
│   ├── components/
│   │   ├── Clock.tsx        # Live time display component
│   │   ├── CursorTrail.tsx  # Custom cursor effect
│   │   └── SmoothScroll.tsx # Smooth scroll wrapper
│   ├── styles/
│   │   ├── fonts.css         # Font-face declarations
│   │   ├── style.css         # Core template styles
│   │   ├── bootstrap.min.css # Bootstrap framework
│   │   ├── swiper-bundle.min.css # Swiper carousel
│   │   ├── animate.css       # Animation utilities
│   │   ├── odometer.min.css  # Number counter styles
│   │   └── styles.css        # Main template styles + custom overrides
│   └── fonts/          # Font files
├── CLAUDE.md           # This file - AI assistant documentation
├── AGENTS.md           # Next.js agent rules
├── package.json        # Dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

## Page Sections

The homepage (`src/app/page.tsx`) contains these sections in order:

1. **Preloader** - Animated loading bars with GSAP
2. **Hero Banner** - Full-screen video background with animated text
3. **Selected Work** - Stacking cards animation (Nexbot, Landa, Brandon)
4. **About Me** - Video section with experience timeline
5. **Tech Stack** - Grid of technologies (Figma, Framer, Webflow)
6. **Services** - Accordion with 3 services (Branding, Web Design, No-Code)
7. **Brands & Partners** - Horizontal scrolling brand logos
8. **Awards** - Flip card animation with 6 award images
9. **Testimonials** - Carousel with client reviews
10. **Stats/Indicators** - Animated counters (Projects, Satisfaction, Experience)
11. **Pricing** - 3-tier pricing with Monthly/Annual toggle
12. **FAQ** - 5 expandable questions
13. **Contact Form** - Multi-field contact form
14. **Footer** - Links, social media, live clock

## Key Features

### GSAP Animations

All animations are powered by GSAP and defined in `src/app/page.tsx`:

- **Preloader Animation**: Loading bars that animate sequentially
- **Fade Effects**: `effectFade` with variants (fadeUp, fadeDown, fadeLeft, fadeRight, fadeZoom)
- **Stack Element**: Work items that pin and scale on scroll
- **Text Color Change**: Text animates from gray to white on scroll
- **Infinite Slide**: Auto-scrolling headers and text
- **Flip Images**: Award cards fan out on scroll trigger
- **Mouse Hover**: Custom cursor that follows mouse movement

### Interactive Components

- **Mobile Menu**: Full-screen offcanvas menu (`showMobileMenu` state)
- **Scroll-to-Top**: Button with circular progress indicator
- **Pricing Tabs**: Toggle between Monthly/Annual pricing
- **FAQ Accordion**: Expandable questions (`activeFaq` state)
- **Service Accordion**: Expandable service details (`activeService` state)

### Performance Optimizations

- **Next.js Image Optimization**: Using native `img` with `loading="lazy"`
- **Video Optimization**: `autoPlay`, `muted`, `loop`, `playsInline`
- **Code Splitting**: Automatic via Next.js
- **Turbopack**: Fast build and hot reload
- **SSR/SSG Ready**: Server-side rendering for SEO

## Custom CSS Modifications

Custom styles added to `src/styles/styles.css`:

### Full-Screen Work Items
```css
/* Lines 7420-7470 approx */
.section-selected-work-v2 .stack-element-main .element {
  min-height: 100vh !important;
  height: 100vh !important;
}
```

### Full-Width Container
```css
.section-selected-work-v2 .container {
  max-width: none !important;
  width: 100% !important;
  padding: 0 40px !important;
}
```

## State Management

React state hooks used in `src/app/page.tsx`:

```typescript
const [isLoaded, setIsLoaded] = useState(false);           // Preloader
const [hasMounted, setHasMounted] = useState(false);       // Hydration
const [activeService, setActiveService] = useState<number | null>(0);  // Service accordion
const [activePricing, setActivePricing] = useState<'monthly' | 'annual'>('monthly');
const [activeFaq, setActiveFaq] = useState<number>(1);     // FAQ accordion
const [showMobileMenu, setShowMobileMenu] = useState(false);
const [showScrollTop, setShowScrollTop] = useState(false);
const [scrollProgress, setScrollProgress] = useState(0);   // Scroll percentage
```

## Important Notes

### React-Specific Changes from HTML

1. **Select Elements**: Use `defaultValue=""` instead of `selected` attribute
2. **Apostrophes in Strings**: Escape or use different quotes to avoid syntax errors
3. **className**: Use `className` instead of `class`
4. **Suppressed Hydration**: `suppressHydrationWarning` on html/body for SSR
5. **onClick Handlers**: Convert all `onclick` to `onClick={handler}`

### Known Issues & Solutions

**Issue**: React warning about `selected` on `<option>`
**Solution**: Use `defaultValue` on `<select>` element (line ~995)

**Issue**: Apostrophe syntax errors in strings
**Solution**: Use double quotes or escape apostrophes (FAQ section, line ~921)

**Issue**: Work items not full screen
**Solution**: Custom CSS with `!important` overrides (styles.css end)

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
- **Netlify**: Connect GitHub repo, build command: `npm run build`
- **Cloudflare Pages**: Same configuration
- **AWS Amplify**: Use Next.js SSR configuration

## Environment Variables

No environment variables currently required. Add `.env.local` for:
- Analytics IDs
- Form submission endpoints
- API keys

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android

## Performance Metrics

Target metrics (Lighthouse):
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Customization Guide

### Change Colors
Edit CSS variables in `src/styles/styles.css`:
```css
:root {
  --primary: #07C42C;  /* Green accent */
  --white: #ffffff;
  --black: #000000;
}
```

### Update Content
All content is in `src/app/page.tsx` - search for text to modify

### Add New Section
1. Create section JSX in `page.tsx`
2. Add animations with GSAP in `useGSAP` hook
3. Style in `src/styles/styles.css`

### Change Fonts
1. Add font files to `public/fonts/`
2. Declare in `src/styles/fonts.css`
3. Update font-family in CSS

## Assets

### Required Images
- `work-5.jpg`, `work-6.jpg` - Work samples
- `award-1.jpg` to `award-6.jpg` - Award images
- `tes-v2-1.jpg` to `tes-v2-3.jpg` - Testimonials
- `brandv2-1.svg` to `brandv2-10.svg` - Brand logos
- `agency.png` - Footer image
- Various SVG icons

### Required Videos
- `nexbot.mp4` - Work sample video
- `davies-video.mp4` - About section video

## Git Workflow

```bash
# Current branch
git branch  # master

# Stage changes
git add .

# Commit
git commit -m "Description"

# Push
git push origin master
```

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000 (Windows)
npx kill-port 3000

# Or use different port
PORT=3001 npm run dev
```

### TypeScript Errors
```bash
# Clean Next.js cache
rm -rf .next
npm run dev
```

### GSAP Not Working
- Check if `gsap.registerPlugin(ScrollTrigger)` is called
- Ensure animations run after component mounts (`hasMounted` check)
- Verify elements exist before animating

## Contact & Support

For issues or questions about this project:
1. Check this documentation
2. Review Next.js 16 documentation
3. Check GSAP documentation for animation issues

## Version History

- **v1.0.0** (Current) - Initial Next.js conversion from HTML template
  - Full GSAP animation implementation
  - All sections completed
  - Mobile responsive
  - SEO optimized
  - Production ready

---

**Last Updated**: March 26, 2026
**Built by**: Claude AI Assistant
**Template**: Davies Personal Portfolio HTML Template
