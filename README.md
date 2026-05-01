> A sanctuary built for stillness — the digital home of a wellness brand twelve years in the making.

A modern, editorial-style React website for a salon and spa, built with a focus on quiet luxury, refined typography, and conversion-driven booking flows. Every page is hand-crafted with attention to spacing, motion, and tone — no generic templates, no AI slop.

---

## ✨ Highlights

- **8 fully designed pages** — Home, About, Packages, Pricing, Testimonials, Blog, Booking, plus a 404
- **Multi-step booking flow** with live calendar, time slot availability, and sticky pricing summary
- **Editorial blog layout** with featured spreads, sidebar, newsletter signup, and trending posts
- **Animated transitions** powered by Framer Motion throughout
- **Fully responsive** — mobile drawer navigation, fluid breakpoints, mobile-first interactions
- **Sticky scroll-aware header** with announcement bar, active route highlighting, and persistent booking CTA
- **Production-ready footer** with newsletter, contact info, founder quote, and structured navigation

---

## 🛠️ Tech Stack

| Tool              | Purpose                                       |
| ----------------- | --------------------------------------------- |
| **React 18+**     | UI library                                    |
| **Vite**          | Build tool & dev server                       |
| **Tailwind CSS**  | Utility-first styling                         |
| **React Router**  | Client-side routing                           |
| **Framer Motion** | Page transitions, scroll-triggered animations |
| **Lucide React**  | Icon system                                   |

---

## 📁 Project Structure

src/
├── components/
│ ├── Header.jsx # Sticky nav with announcement bar & mobile drawer
│ ├── Footer.jsx # Newsletter, links, contact, social proof
│ ├── Counter.jsx # Animated number counter
│ └── Banner.jsx # Reusable hero banner
│
├── pages/
│ ├── Home/
│ │ ├── Section1.jsx # Welcome / trust pillars
│ │ ├── Section2.jsx # Wellness packages carousel
│ │ ├── Section3.jsx # Stats & social proof
│ │ └── Section4.jsx # Team / therapists
│ ├── About.jsx # Story, values, journey timeline
│ ├── Packages.jsx # Filterable packages + membership tiers
│ ├── Pricing.jsx # Service menu + comparison table + gift cards
│ ├── Testimonials.jsx # Featured carousel + masonry reviews wall
│ ├── Blog.jsx # Editorial layout with sidebar
│ └── Booking.jsx # 4-step booking flow with live summary
│
├── App.jsx # Route definitions
├── main.jsx # Entry point
└── index.css # Tailwind directives + global styles
public/
└── images/
└── webp/ # Optimized WebP imagery
├── mas1.webp ... mas12.webp # Treatment & ambient photos
└── user1.webp ... user3.webp # Therapist portraits

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/tania-spa.git
cd tania-spa

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

---

## 🎨 Design System

### Color Palette

The site uses a deliberately restrained three-color palette:

- **Red** (`#dc2626` / `red-600`) — Primary accent, CTAs, brand identity
- **Black** (`#000`) — Headlines, dark sections, contrast anchors
- **Cream** (`#faf7f5`) — Soft backgrounds for editorial sections

### Typography

- Headlines use bold weights with tight tracking (`tracking-tight`)
- Italic styling reserved for accent words within headlines (e.g., _"slowing down"_)
- Body copy uses comfortable line-height (`leading-relaxed`) for readability
- Uppercase labels use wide letter-spacing (`tracking-[0.2em]`) for editorial feel

### Layout Conventions

- All sections use `w-[90%]` containers for consistent horizontal rhythm
- Vertical rhythm via `pt-[5%] pb-[5%]` or fixed `py-` values for editorial sections
- Section headers follow a pattern: small red uppercase eyebrow → large bold headline
- Dark sections (black background) are used as visual punctuation, never decoratively

### Motion Principles

- Entrance animations use staggered delays (`i * 0.1`) for sequential reveals
- Scroll-triggered with `viewport={{ once: false, amount: 0.2 }}` for re-trigger on scroll
- Hover states prefer subtle transforms (`-translate-y-1`, `rotate-12`) over color flips
- Page transitions in the booking flow use `AnimatePresence` with directional X-axis slides

---

## 📄 Page Overview

### Home (`/`)

Multi-section homepage with hero banner, value pillars, packages carousel, statistics, and team showcase.

### About (`/about`)

Brand story, core values, founding timeline, founder quote, and CTA. Editorial layout with image+text splits.

### Packages (`/packages`)

Filterable wellness packages by category (Signature, Couples, Rituals, Express), membership tier comparison, and à la carte add-ons.

### Pricing (`/pricing`)

Searchable service menu organized by category (Massage, Facials, Body Care, Rituals, Wellness), monthly/yearly billing toggle, full membership comparison table, gift card tiles, FAQ accordion.

### Testimonials (`/testimonials`)

Animated featured testimonial carousel, video testimonial grid, masonry-style reviews wall, external platform ratings, and review submission CTA.

### Blog (`/blog`)

Editorial-style blog index with featured spread, category filter + search, two-column post grid, and a sidebar containing newsletter signup, trending posts, popular tags, and author info.

### Booking (`/booking`)

Four-step booking wizard:

1. **Service** — Pick service, duration, and optional add-ons
2. **Date & Time** — Live calendar with therapist selection and slot availability
3. **Your Details** — Contact form with first-visit consultation toggle
4. **Confirm** — Review summary with edit shortcuts

Includes a sticky live-pricing summary card that updates in real time as selections are made. Confirmation screen shows a unique booking code.

---

## 🔧 Customization

### Adding a new service

Edit the `Services` array in `src/pages/Pricing.jsx` (organized by category) and `src/pages/Booking.jsx`:

```jsx
{
  id: "your-service",
  icon: <Heart size={22} strokeWidth={1.5} color="#dc2626" />,
  name: "Your Service",
  desc: "Brief description.",
  durations: [
    { time: "60 min", price: 95 },
  ],
}
```

### Updating navigation

Modify the `navItems` array in `src/components/Header.jsx`:

```jsx
const navItems = [
  { name: "Home", link: "/" },
  // add or reorder items
];
```

### Replacing imagery

Drop new WebP files into `public/images/webp/` using the existing naming convention (`mas1.webp` through `mas12.webp` for treatments, `user1.webp` through `user3.webp` for staff). Replace one file at a time to maintain references across pages.

### Adjusting the brand color

The red accent (`red-600`) is used in ~200 places across the codebase. To rebrand:

1. Find/replace `red-600` → `your-color-600`
2. Find/replace `red-500`, `red-50` → corresponding shades
3. Update `#dc2626` hex references in inline styles and SVG fills
4. Adjust gradient overlays in CTA backgrounds

For a more maintainable approach, define a custom color in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      brand: {
        50: '#fef2f2',
        500: '#ef4444',
        600: '#dc2626',
      },
    },
  },
}
```

---

## 🌐 Routing

Routes are defined in `App.jsx` using `react-router`:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/packages" element={<Packages />} />
  <Route path="/pricing" element={<Pricing />} />
  <Route path="/testimonials" element={<Testimonials />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/booking" element={<Booking />} />
</Routes>
```

The header automatically highlights the active route based on `useLocation()`.

---

## 📱 Responsive Breakpoints

This project follows Tailwind's default breakpoint system with intentional choices:

| Breakpoint | Width  | Used for                         |
| ---------- | ------ | -------------------------------- |
| `sm`       | 640px  | Mobile-tablet boundary           |
| `md`       | 768px  | Tablet adjustments               |
| `lg`       | 1024px | **Header drawer collapse point** |
| `xl`       | 1280px | Desktop-only refinements         |

The header uses `lg` for mobile drawer because the desktop nav has 6 links + socials + CTA, which needs more horizontal room than `md` provides.

---

## 🚧 Known Limitations

This is a **frontend-only** demo project. The following features are visually implemented but not yet wired to a backend:

- Newsletter form submissions
- Booking confirmation (currently generates a fake code with `Math.random()`)
- Real-time slot availability (slots are statically marked unavailable)
- Search functionality (filters are client-side only)
- Review submission
- User authentication / membership accounts

To make this production-ready, you'll need to integrate with:

- A booking backend (e.g., Calendly API, custom Node/Express, or Supabase)
- An email service (SendGrid, Mailgun, Resend) for confirmations and newsletters
- A payment processor (Stripe) for membership tiers
- A CMS (Sanity, Contentful, or Strapi) for blog post management

---

## 📦 Build & Deployment

### Production build

```bash
npm run build
```

Output goes to `dist/`. The build is fully static and can be deployed anywhere.

### Recommended hosts

- **Vercel** — Zero-config, automatic Vite detection
- **Netlify** — Drag-and-drop the `dist/` folder, or connect the repo
- **Cloudflare Pages** — Generous free tier, fast global CDN

```bash
# Deploy to Vercel
vercel --prod

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

---

## 🧭 Design Philosophy

This site was built with a few stubborn principles:

1. **Restraint over flourish.** Every shadow, every animation, every color earns its place. When in doubt, remove it.
2. **Editorial over commercial.** Long-form headlines, italic accents, and quiet typography beat shouty CTAs.
3. **Progressive disclosure.** Show users what they need when they need it — see the booking flow's revealing form sections.
4. **Three-color discipline.** Red, black, cream. That's the whole palette. Limits make designs cohesive.
5. **Dark sections as punctuation.** The black backgrounds in the booking summary, footer, and testimonial CTAs aren't decoration — they're rhythm marks between lighter passages.

---

## 📝 License

This project is provided as a portfolio reference. If you'd like to use it commercially, please reach out.

---

## 🙏 Credits

- Icons by [Lucide](https://lucide.dev)
- Animations powered by [Framer Motion](https://www.framer.com/motion)
- Built with [Vite](https://vitejs.dev) + [React](https://react.dev) + [Tailwind CSS](https://tailwindcss.com)

---

Built with care, in the spirit of slow living.
