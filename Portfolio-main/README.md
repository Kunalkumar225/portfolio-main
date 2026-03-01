# 🚀 Kunal's Portfolio - Next-Gen Developer Showcase

A futuristic, high-performance portfolio built with cutting-edge web technologies to showcase professional expertise in Full-Stack Development, System Architecture, DSA, Critical Thinking, and Backend Development.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-4.1.0-646CFF?style=for-the-badge&logo=vite)
![Three.js](https://img.shields.io/badge/Three.js-0.149.0-000000?style=for-the-badge&logo=three.js)

---

## ✨ Features

- **🎨 Futuristic UI/UX**: Premium dark theme with glassmorphism, neon accents, and brand gradients
- **🌟 Smooth Animations**: Powered by Framer Motion for buttery-smooth micro-interactions
- **🎭 3D Graphics**: Interactive 3D elements using Three.js and React Three Fiber
- **📱 Fully Responsive**: Optimized for all screen sizes from mobile to 4K displays
- **⚡ Lightning Fast**: Built with Vite for instant hot module replacement (HMR)
- **🎯 SEO Optimized**: Proper meta tags, semantic HTML, and performance optimization
- **🔄 Dynamic Role Showcase**: Animated role transitions in the Hero section
- **📧 Contact Integration**: EmailJS integration for seamless communication

---

## 🛠️ Technology Stack

### **Core Framework**
- **React 18.2.0** - Modern UI library with hooks and concurrent features
- **Vite 4.1.0** - Next-generation frontend tooling for blazing-fast development

### **3D & Animation**
- **Three.js 0.149.0** - WebGL library for stunning 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **Framer Motion 9.0.7** - Production-ready motion library for React
- **GSAP 3.14.2** - Professional-grade animation platform

### **Styling & UI**
- **Tailwind CSS 3.2.6** - Utility-first CSS framework for rapid UI development
- **Vanilla CSS** - Custom animations and glassmorphism effects
- **React Icons** - Popular icon library
- **Lucide React** - Beautiful & consistent icon set

### **Utilities**
- **@studio-freight/lenis** - Smooth scroll library for premium UX
- **React Router DOM** - Client-side routing
- **React Tilt** - 3D tilt hover effects
- **EmailJS** - Email service integration
- **TypeScript** - Type safety for critical components

---

## 📦 Installation & Setup

### **Prerequisites**
Ensure you have the following installed:
- **Node.js** (v16.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### **Step 1: Clone the Repository**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### **Step 2: Install Dependencies**
```bash
npm install
```
**What this does:** Downloads and installs all required packages listed in `package.json`, including React, Vite, Three.js, Framer Motion, and Tailwind CSS.

---

## 🚀 Available Commands

### **Development Mode**
```bash
npm run dev
```
**What it does:**
- Starts the Vite development server
- Enables Hot Module Replacement (HMR) - changes reflect instantly without page reload
- Runs on `http://localhost:5173/` by default
- Provides detailed error messages and stack traces

**When to use:** During active development and testing

---

### **Production Build**
```bash
npm run build
```
**What it does:**
- Creates an optimized production bundle in the `dist/` folder
- Minifies JavaScript, CSS, and HTML
- Removes unused code (tree-shaking)
- Optimizes assets (images, fonts, etc.)
- Generates source maps for debugging

**When to use:** Before deploying to production (Vercel, Netlify, etc.)

---

### **Preview Production Build**
```bash
npm run preview
```
**What it does:**
- Serves the production build locally
- Allows you to test the optimized version before deployment
- Runs on `http://localhost:4173/` by default

**When to use:** To verify the production build works correctly

---

## 🎯 Why Each Technology?

### **React**
- **Component-based architecture** for reusable UI elements
- **Virtual DOM** for efficient updates
- **Hooks** for clean state management
- **Massive ecosystem** with extensive community support

### **Vite**
- **10-100x faster** than traditional bundlers (Webpack, Parcel)
- **Instant server start** - no bundling in development
- **Lightning-fast HMR** - changes reflect in milliseconds
- **Optimized builds** with Rollup under the hood

### **Three.js + React Three Fiber**
- **WebGL rendering** for hardware-accelerated 3D graphics
- **Declarative 3D** - write 3D scenes like React components
- **Performance** - 60fps animations even on complex scenes

### **Framer Motion**
- **Production-ready** animations with minimal code
- **Gesture support** - drag, hover, tap interactions
- **Layout animations** - automatic FLIP animations
- **Variants** - orchestrate complex animation sequences

### **Tailwind CSS**
- **Utility-first** - build custom designs without leaving HTML
- **Responsive by default** - mobile-first approach
- **Purge unused CSS** - tiny production bundles
- **Customizable** - full control over design tokens

### **Lenis (Smooth Scroll)**
- **Premium UX** - buttery-smooth scrolling experience
- **Performance** - uses `requestAnimationFrame` for 60fps
- **Cross-browser** - works on all modern browsers

---

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets (images, fonts, etc.)
├── src/
│   ├── assets/          # Images, icons, and media files
│   ├── components/      # React components
│   │   ├── CinematicHero.jsx    # Hero section with role animation
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── About.jsx            # Overview section
│   │   ├── Experience.jsx       # Work experience timeline
│   │   ├── Works.jsx            # Projects showcase
│   │   └── ...
│   ├── constants/       # Configuration and data
│   │   └── index.js     # Services, experiences, projects data
│   ├── hoc/             # Higher-order components
│   ├── utils/           # Utility functions
│   ├── styles.js        # Tailwind CSS utilities
│   ├── index.css        # Global styles and animations
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Entry point
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.cjs  # Tailwind CSS configuration
└── README.md            # This file
```

---

## 🎨 Customization Guide

### **Update Personal Information**
Edit `src/constants/index.js`:
- `services` - Your professional roles (Overview section)
- `experiences` - Work history
- `projects` - Portfolio projects
- `achievements` - Certifications and awards

### **Change Hero Roles**
Edit `src/components/CinematicHero.jsx`:
```javascript
const roles = ["Full-Stack Developer", "System Architect", "DSA Solver", "Critical Thinker", "Backend Developer"];
```

### **Modify Colors & Theme**
Edit `tailwind.config.cjs` and `src/index.css`:
- Brand colors
- Gradient definitions
- Animation timings

---

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push your code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Vercel auto-detects Vite and deploys

### **Netlify**
1. Build the project: `npm run build`
2. Drag the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)

### **GitHub Pages**
1. Install: `npm install gh-pages --save-dev`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

---

## 🐛 Troubleshooting

### **Port Already in Use**
```bash
# Kill process on port 5173
npx kill-port 5173
npm run dev
```

### **Build Fails**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### **3D Elements Not Rendering**
- Ensure WebGL is enabled in your browser
- Update graphics drivers
- Try a different browser (Chrome/Firefox recommended)

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## 📧 Contact

**Kunal Kumar**
- Portfolio: [Your Live URL]
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)

---

**Built with ❤️ using React, Vite, Three.js, and Framer Motion**
