# TapTime Homepage Prototype

This is a minimal, standalone version of the TapTime homepage designed specifically for backend team review and integration.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

The homepage will be available at: **http://localhost:5174/** (or next available port)

## 📦 What's Included

### Core Components
- **HomePage.jsx** - Main homepage component with all sections
- **Header.jsx** - Responsive navigation header with dynamic color adaptation
- **ExpertCard.jsx** - Expert profile cards for carousels
- **SearchBar.jsx** - Animated search component with typing effects
- **ThemeToggle.jsx** - Light/dark theme switcher

### Features Implemented
- ✅ **Expert Carousel** - Shows 4.5 cards on desktop, 1.5 on mobile
- ✅ **Review Carousel** - Responsive customer testimonials
- ✅ **How It Works** - Glassmorphism cards with shimmer effects
- ✅ **Dynamic Header** - Changes color based on background sections
- ✅ **Edge-to-edge Mobile** - Carousels extend full width on mobile
- ✅ **Smooth Pagination** - One-card-at-a-time navigation
- ✅ **Back-to-top Button** - Floating glass button
- ✅ **Footer CTA** - Green background with professional styling
- ✅ **Responsive Design** - Mobile-first with Tailwind CSS
- ✅ **Theme Support** - Light/dark mode toggle

### Styling
- **CSS Modules + SCSS** for component-specific styles
- **Tailwind CSS** for utility classes and responsive design
- **Framer Motion** for smooth animations
- **Professional Color Scheme**: Green (#efffba) and Blue (#081d34)

## 🏗️ Architecture

```
src/
├── HomePage.jsx              # Main homepage component
├── App.jsx                   # Simple app wrapper
├── components/
│   ├── layout/
│   │   ├── Header.jsx        # Navigation header
│   │   └── Header.module.scss
│   ├── common/               # Reusable components
│   │   ├── ExpertCard.jsx
│   │   ├── SearchBar.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── ...
│   └── ui/
│       └── button.jsx        # Basic button component
├── data/
│   ├── homepage.json         # All homepage content
│   └── navigation.json       # Header navigation data
└── index.css                 # Global styles
```

## 🎯 Key Differences from Full App

This minimal package has been streamlined by:

- **Removed React Router** - All navigation links are placeholder anchors
- **Simplified UI Components** - Uses basic HTML elements instead of full shadcn/ui
- **No Full App Structure** - Focus only on homepage and essential components
- **Standalone Ready** - Can be easily integrated into any backend framework

## 🔧 Integration Notes

### For Backend Teams

1. **Content is Data-Driven** - All text and content comes from JSON files in `/src/data/`
2. **No External Dependencies** - Self-contained with minimal dependencies
3. **Modern React** - Uses React 18 with hooks
4. **Mobile Optimized** - Responsive design works on all screen sizes
5. **Production Ready** - Successfully builds with `npm run build`

### API Integration Points

The homepage is designed to easily connect with backend APIs:

- Expert data in `/src/data/homepage.json` can be replaced with API calls
- Search functionality in SearchBar component ready for backend integration  
- Navigation data in `/src/data/navigation.json` for dynamic menu generation

## 🚀 Production Build

```bash
npm run build
```

Creates optimized static files in `/dist/` folder ready for any web server.

---

**Note**: This is a presentation prototype focused on visual design and user experience. All functionality is frontend-only and ready for backend integration.