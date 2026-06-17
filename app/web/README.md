# ESPACE LINGA TERE - Cultural Heritage Website

A modern, responsive website dedicated to preserving and promoting Central African culture through arts, education, and community engagement.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation

1. **Clone or navigate to the project**
```bash
cd "ESPACE LINGA TERE SITE"
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The application will be available at `http://localhost:3001`

## 📦 Project Structure

```
app/web/
├── src/
│   ├── components/        # Reusable React components
│   │   ├── ui/           # Shadcn/ui components
│   │   ├── Header.jsx    # Navigation header
│   │   ├── Footer.jsx    # Footer with social links
│   │   └── ...
│   ├── pages/            # Page components
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ProgramsPage.jsx
│   │   ├── FounderPage.jsx
│   │   ├── GalleryPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── PrivacyPage.jsx
│   │   └── TermsPage.jsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.jsx           # Main app component with routes
│   └── main.jsx          # Entry point
├── public/               # Static assets
├── .env.example         # Environment variables template
├── .env.local           # Local environment variables (git ignored)
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Project dependencies
```

## 🛠 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start

# Run linter
npm run lint

# Show linting warnings
npm run lint:warn
```

## 🎨 Tech Stack

- **Frontend Framework**: React 18.3
- **Build Tool**: Vite 7.3
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Shadcn/ui with Radix UI
- **Routing**: React Router 6
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Type Validation**: Zod
- **Notifications**: Sonner
- **Meta Tags**: React Helmet

## 🌍 Routes

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/about` | About ESPACE LINGA TERE |
| `/programs` | Cultural programs overview |
| `/founder` | Vincent Mambachaka biography |
| `/gallery` | Photo gallery |
| `/contact` | Contact form |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## 📋 Features

✅ **Fully Responsive Design** - Mobile-first approach with Tailwind CSS breakpoints
✅ **Modern UI/UX** - Smooth animations with Framer Motion
✅ **SEO Optimized** - Meta tags and React Helmet integration
✅ **Contact Form** - Integrated form with validation
✅ **Dark Mode Ready** - CSS variables support for theme switching
✅ **Performance** - Vite for fast development and optimized builds
✅ **Accessibility** - Semantic HTML and ARIA labels
✅ **Legal Pages** - Privacy Policy and Terms of Service included

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
VITE_APP_NAME=ESPACE LINGA TERE
VITE_APP_URL=http://localhost:3001
VITE_API_URL=http://localhost:3000/api
VITE_CONTACT_EMAIL=contact@espacelinga.org
```

### Tailwind CSS Customization

Edit `tailwind.config.js` to customize colors, fonts, and breakpoints.

### Path Aliases

The `@` alias is configured to resolve to the `src` directory. Use it for cleaner imports:

```jsx
// Instead of:
import Header from '../../../components/Header'

// Use:
import Header from '@/components/Header'
```

## 🐛 Fixed Issues

✅ All React `.map()` keys use unique IDs instead of array indices
✅ Removed unused imports
✅ Fixed broken footer links (Privacy/Terms pages)
✅ Corrected social media URLs
✅ Added proper route handling for all pages
✅ Environmental configuration structure

## 📱 Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` directory.

### Deployment Platforms

The site can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

## 📞 Support & Contact

**ESPACE LINGA TERE**
- Address: Avenu Mbaîkoua, rue école Galabadja 2, Bangui RCA
- Phone: +236 75 00 05 79
- Email: contact@espacelinga.org

## 📄 License

All content and design © 2026 ESPACE LINGA TERE. All rights reserved.

## 🎯 Future Enhancements

- [ ] Backend API for contact form
- [ ] Newsletter subscription
- [ ] Event calendar
- [ ] Blog/News section
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] E-commerce for cultural products
- [ ] Live streaming for performances
