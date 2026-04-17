# Travel Agency Booking System Landing Page

A high-converting Next.js landing page for a travel tech consultant offering booking system integration services.

## Features

- **Modern Dark Theme**: Bold, professional design with generous whitespace
- **Smooth Animations**: Framer Motion scroll animations for engaging user experience
- **Responsive Design**: Mobile-first approach, works beautifully on all devices
- **Calendly Integration**: Embedded booking widget for free audit calls
- **High Conversion**: Strategic CTAs, social proof, and trust elements throughout

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Calendly** (for booking integration)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Hero.tsx                    # Hero section
│       ├── InterestSection.tsx         # What Changes section
│       ├── TechnicalProof.tsx          # How It Works
│       ├── CaseStudies.tsx             # Case studies & testimonials
│       ├── CompetitiveAdvantage.tsx    # Comparison table
│       ├── AuditOffer.tsx              # Free audit offer with Calendly
│       ├── APIExpertise.tsx            # Integration experience
│       ├── FinalCTA.tsx                # Final call-to-action
│       └── Footer.tsx                  # Footer with contact info
```

## Customization

### Update Calendly Link

In `src/components/AuditOffer.tsx`, replace the Calendly URL:

```tsx
data-url="https://calendly.com/your-link"
```

### Update Contact Information

Edit contact details in `src/components/Footer.tsx`:

```tsx
<a href="mailto:your-email@example.com">
<a href="https://wa.me/your-number">
<a href="https://linkedin.com/in/your-profile">
```

### Customize Colors

Modify colors in `tailwind.config.ts`:

```ts
colors: {
  background: '#0a0a0a',
  accent: '#f97316',
  // ... add more colors
}
```

### Replace Images

The landing page uses Unsplash images. Replace them with your own in:
- Hero section (`Hero.tsx`)
- Case studies (`CaseStudies.tsx`)

## Design Inspiration

This landing page is inspired by [event.monetise.com/lp-1-o](https://event.monetise.com/lp-1-o), featuring:

- Large, bold typography
- High contrast dark theme
- Generous spacing between sections
- Smooth scroll animations
- Professional social proof elements
- Strategic CTAs throughout

## Performance

- Optimized images with Next.js Image component
- Lazy loading for sections below the fold
- Smooth scroll behavior
- Minimal JavaScript bundle size

## SEO

The landing page includes comprehensive SEO metadata:
- Title and description optimized for conversions
- Open Graph tags for social sharing
- Structured data ready
- Fast page load times

## License

This project is licensed under the MIT License.

## Support

For questions or customization help, contact the developer.
