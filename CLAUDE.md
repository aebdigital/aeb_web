# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This repository contains a restructured and cleaned version of the AEB Digital website (Slovak digital agency) with modular component architecture:

```
/
├── index.html              # Main HTML file (home page only)
├── subpages/               # All subpages organized in folder
│   ├── blog.html           # Blog listing page
│   ├── kontakt.html        # Contact page (Slovak)
│   ├── o-nas.html          # About page (Slovak)
│   ├── portfolio.html      # Portfolio page
│   ├── sluzby.html         # Services page (Slovak)
│   ├── ecommerce-trendy-2025.html      # Blog article
│   ├── javascript-techniky-2025.html   # Blog article
│   ├── react-trendy-2025.html          # Blog article
│   ├── seo-strategia-2025.html         # Blog article
│   ├── ux-dizajn-prirucka.html         # Blog article
│   └── web-optimalizacia-rychlost.html # Blog article
├── styles/                 # Modular CSS architecture
│   ├── base.css            # Global variables, typography, buttons
│   ├── components/         # Reusable component styles
│   │   ├── header.css          # Header and navigation
│   │   ├── footer.css          # Footer and floating nav
│   │   ├── contact-form.css    # Contact form component
│   │   └── faq.css             # FAQ component
│   └── pages/              # Page-specific styles
│       ├── home.css            # Home page styles (includes gallery effects)
│       ├── about.css           # About page styles
│       ├── blog.css            # Blog page styles
│       ├── contact.css         # Contact page styles
│       ├── portfolio.css       # Portfolio page styles
│       └── services.css        # Services page styles
├── js/                     # JavaScript modules
│   ├── main.js             # Main application logic + gallery hover effects
│   ├── contact-form.js     # Contact form functionality
│   ├── faq.js              # FAQ accordion functionality
│   └── footer.js           # Footer component
├── sources/                # All media assets organized
│   ├── AEB LOGO.png        # Main AEB logo
│   ├── footimg.png         # Footer background image
│   ├── aeb-portfolio/      # Portfolio project screenshots
│   ├── client-logos/       # Client company logos and branding assets
│   ├── services/           # Service-related images
│   └── techstack/          # Technology stack icons and logos
├── send-contact-simple.php # Contact form handler
└── sitemap.xml             # SEO sitemap
```

## Technology Stack

- **HTML5**: Semantic, accessible markup
- **CSS3**: Modern CSS with custom properties, Flexbox, Grid, advanced animations
- **Vanilla JavaScript**: ES6+ features, no external dependencies
- **GSAP**: Animation library with ScrollTrigger for advanced scroll effects
- **Lenis**: Smooth scrolling library for enhanced UX
- **Responsive Design**: Mobile-first approach with progressive enhancement
- **Performance**: Optimized assets and clean code structure

## Website Architecture

Multi-page portfolio site with semantic sections and advanced interactive features:

### HTML Structure
- `<header>` - Fixed navigation with mobile menu
- `<main>` - Content sections (hero, gallery, services, stats, contact)
- `<footer>` - Company information

### Home Page Sections
1. **Hero Section** - Animated background sliders with portfolio images
2. **Client Logo Slider** - Infinite horizontal scrolling client logos (60s duration)
3. **Gallery Section** - Interactive category showcase with hover effects
4. **Services Section** - Sticky scroll services with stacking effect
5. **Stats Section** - Company statistics without animations
6. **Contact Info Section** - Contact cards with department information

### CSS Architecture (New Modular System)
- **CSS Custom Properties**: Centralized design tokens in `base.css`
- **Component-based**: Reusable components with dedicated CSS files
- **Page-specific**: Individual CSS files for each page's unique styles
- **Smart Loading**: Components automatically included where needed
- **Responsive Design**: Mobile-first media queries across all files
- **Performance**: Efficient selectors and component isolation

### Component System
- **Header Component**: Navigation, mobile menu, logo (JavaScript + CSS)
- **Footer Component**: Footer content, floating nav (JavaScript + CSS)
- **Contact Form Component**: Reusable contact form (JavaScript + CSS)
- **FAQ Component**: Accordion-style FAQ section (CSS only)
- **Gallery Component**: Interactive category showcase with cursor-following images
- **Smart Navigation**: Automatically adjusts paths for subpages vs. home page

### JavaScript Features (Modular Architecture)
- **Main Application** (`main.js`): Core application logic and initialization
- **GSAP Animations**: Scroll-triggered animations for sections and elements
- **Gallery Hover Effects**: Cursor-following images with zoom and jiggle animations
- **Contact Form Module** (`contact-form.js`): Dedicated contact form functionality and validation
- **FAQ Module** (`faq.js`): Accordion functionality for FAQ components
- **Footer Module** (`footer.js`): Footer component with smart path detection
- **Smart Navigation**: Automatically detects subpage location and adjusts all links
- **Mobile Menu**: Full-featured hamburger menu with logo and close button
- **Smooth Scrolling**: Lenis-powered smooth scrolling with GSAP integration
- **Form Handling**: Robust contact form validation and submission with PHP backend

## Gallery Section Features

The gallery section on the home page includes advanced interactive features:

### Structure
- **Two-column layout**: 10 industry categories (5 per column)
- **Categories**: Kovovýroba, Stolárstvo, Stavebníctvo, Lifestyle, Autoservisy, Inštalatérstvo, E-commerce, Farmácia, Vzduchotechnika, Fashion
- **Icons**: Each category has a relevant icon from Flaticon CDN
- **Hover Effects**: Multiple layered animations on hover

### Hover Effects
1. **Text Switching Animation**: Category names slide up/down on hover (inspired by button text switch effect)
2. **Background Color**: White → Pitch black (#000000) transition
3. **Text Color**: Black → White transition
4. **Icon Inversion**: Icons turn white using CSS filters
5. **Floating Image Preview**: Large cursor-following image with multiple effects

### Floating Image System
Located in `main.js` - `initGalleryHoverEffect()` function:

**CSS Properties** (`home.css`):
- Size: 560px × 350px (rectangular format)
- Position: Fixed, follows cursor 30px to the right, vertically centered
- Z-index: 9999 (appears above all sections)
- Initial state: `opacity: 0, scale(0.5), blur(2px), brightness(0.8)`
- Active state: `opacity: 1, scale(1), blur(0), brightness(1)`
- Glow effect: Teal shadow `rgba(0, 153, 125, 0.4)`
- Transitions: 0.5s with cubic-bezier spring effect

**JavaScript Logic**:
- Tracks cursor position with `mousemove` listener
- Positions image relative to cursor (viewport coordinates)
- Image switches with zoom out/in transition when changing categories
- Jiggle animation triggers after 50px of cursor movement
- Resets on `mouseleave`

**Animation Details**:
- **Zoom transition**: Scales from 0.5 to 1.0 with bouncy easing
- **Blur transition**: Starts blurred (2px) and becomes sharp
- **Brightness**: Fades from dark (0.8) to full (1.0)
- **Jiggle effect**: Rotates ±2deg when cursor moves rapidly
- **Image switching**: Zooms out to 0.5, swaps image, zooms back to 1.0 (200ms delay)

## Development Commands

### Local Development
```bash
# Simple HTTP server for development
python3 -m http.server 8000
# OR
python3 -m http.server 9001
# OR
npx http-server
```

### Code Quality
```bash
# HTML validation
npx html-validate index.html

# CSS validation
npx stylelint styles/**/*.css

# JavaScript linting
npx eslint js/main.js
```

## Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: 478px, 767px, 991px, 1024px
- Flexible grid system for portfolio items
- Adaptive typography scaling
- Gallery switches to single column on mobile
- Floating images disabled on mobile devices

### Performance Optimizations
- Semantic HTML for better SEO
- Optimized CSS with custom properties
- Debounced scroll events
- Efficient image loading strategies
- GSAP animations disabled on mobile for performance
- Component-based CSS for smaller file sizes

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Focus management for mobile menu
- ARIA labels for interactive elements

### Advanced Animations
- **GSAP ScrollTrigger**: Scroll-based animations for sections
- **Lenis Smooth Scrolling**: Native smooth scrolling enhancement
- **Text Switching**: Slide up/down effect on category hover
- **Floating Images**: Cursor-following with zoom, blur, and jiggle effects
- **Hero Sliders**: Vertical/diagonal animated background sliders
- **Stats Section**: No counter animations (displays immediately)

## Component Development Workflow

### When Adding New Components:
1. **Create CSS file** in `styles/components/[component-name].css`
2. **Add to JavaScript** if dynamic content is needed (like contact form)
3. **Include in HTML pages** that need the component
4. **Test across all pages** to ensure consistent behavior

### When Modifying Existing Components:
1. **Edit the component CSS file** (not individual page CSS)
2. **Update JavaScript constant** if HTML structure changes
3. **Test on home page AND subpages** (different path structures)
4. **Check mobile responsiveness**

### When Adding Gallery Categories:
1. **Update HTML**: Add new `<a class="gallery-item">` with icon and category container
2. **Add data attributes**: `data-category` and `data-image` for the preview
3. **Choose icon**: Find appropriate icon from Flaticon and add to gallery-icon div
4. **Test hover effects**: Ensure text switching, background, and floating image work
5. **Add portfolio image**: Place corresponding image in `sources/aeb-portfolio/`

### Path Structure Notes:
- **Home page**: Uses direct paths (`subpages/`, `styles/`, `js/`, `sources/`)
- **Subpages**: Use relative paths (`../styles/`, `../js/`, `../sources/`)
- **JavaScript**: Automatically detects location and adjusts paths in modular components
- **Images**: Must use correct relative paths from current page location
- **Blog Articles**: Located in `subpages/` with descriptive filenames
- **PHP Backend**: Contact form handler at root level (`send-contact-simple.php`)
- **External Icons**: Flaticon CDN for category icons (hotlinked)

## Development Best Practices

### CSS
- Use CSS custom properties for consistent theming
- Follow BEM-like naming conventions
- Mobile-first responsive design
- Avoid deep nesting and high specificity
- Use `overflow: visible` on sections containing floating elements
- Z-index hierarchy: Header (100), Floating elements (9999), Modals (10000)

### JavaScript
- Use modern ES6+ features
- Implement performance optimizations (debouncing)
- Handle errors gracefully
- Keep functions pure and modular
- Disable heavy animations on mobile devices
- Clean up event listeners on component removal

### Animations
- Use GSAP for complex scroll animations
- CSS transitions for simple hover effects
- Disable animations on mobile for performance
- Use `cubic-bezier` for custom easing curves
- Keep animation durations reasonable (0.3-0.5s for most effects)

### File Management
- Organize assets by type (css/, js/, images/)
- Use semantic, descriptive file names
- Maintain clean directory structure
- Keep component CSS separate from page CSS

## Content Management

### Adding Portfolio Items
Add new items to the `.portfolio-grid` in `portfolio.html`:
```html
<a href="#" class="portfolio-item"
   style="background-image: url('../sources/aeb-portfolio/filename.jpg');"
   aria-label="Project description"></a>
```

### Adding Gallery Categories
Add to the gallery columns in `index.html`:
```html
<a href="https://example.com" target="_blank" class="gallery-item"
   data-category="Category Name"
   data-image="sources/aeb-portfolio/image.jpg">
    <div class="gallery-icon">
        <img src="https://cdn-icons-png.flaticon.com/512/XXXX/XXXX.png" alt="Icon">
    </div>
    <div class="gallery-category-container">
        <span class="gallery-category" data-label="Category Name" data-alt="Category Name"></span>
    </div>
</a>
```

### Adding Blog Articles
Create new blog article files in the `subpages/` directory following the naming pattern:
- Use descriptive, SEO-friendly filenames (e.g., `topic-keyword-year.html`)
- Include proper meta tags and structured content
- Update `blog.html` to include links to new articles

### Updating Contact Information
Modify contact details in the contact page (`kontakt.html`) and update corresponding links.

### Adding Services
Add new service cards to the `.services-stacking` section in `index.html` following the existing pattern.

### Managing Assets
- **Portfolio Screenshots**: Place in `sources/aeb-portfolio/` (numbered XX.jpg format)
- **Client Logos**: Place in `sources/client-logos/` (various formats supported)
- **Service Images**: Place in `sources/services/`
- **Tech Stack Icons**: Place in `sources/techstack/`

## Known Issues & Limitations

- Gallery hover images require desktop browser (disabled on mobile)
- GSAP animations disabled on mobile for performance
- Client logo slider uses 60s duration (can be adjusted in `home.css`)
- Floating images use fixed positioning (works best with consistent cursor movement)

## Browser Support
- Modern browsers (Chrome 60+, Firefox 60+, Safari 12+, Edge 79+)
- Mobile browsers (iOS Safari 12+, Chrome Mobile 60+)
- Progressive enhancement for older browsers
- GSAP and Lenis require modern JavaScript support
