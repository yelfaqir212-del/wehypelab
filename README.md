# We Hype Lab - Influencer Training Agency Website

A modern, animated React website for We Hype Lab, an influencer training agency that helps content creators grow their audience and amplify their influence.

## 🎨 Features

- **Sophisticated Animations**: Structured animations using Framer Motion with hexagons, lines, and geometric patterns
- **Light/Dark Theme**: Seamless theme switching with smooth transitions
- **Responsive Design**: Fully responsive across all devices
- **Corporate & Creative Design**: Professional yet creative aesthetic perfect for an influencer training agency
- **Smooth Scrolling**: Enhanced navigation with smooth scroll behavior
- **Animated Components**: Hexagons, lines, and decorative elements with structured animations
- **Performance Optimized**: Efficient animations with proper will-change properties

## 🚀 Tech Stack

- **React 18.2** - Modern React with hooks
- **Framer Motion 10.16** - Advanced animations and transitions
- **React Intersection Observer** - Scroll-triggered animations
- **React Router DOM** - Navigation (if needed)
- **CSS Variables** - Dynamic theming
- **Custom Fonts** - Inter & Space Grotesk from Google Fonts

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd wehypelab
```

2. **Add Founder Images:**
   - Place the founder images in the `src/assets/` folder
   - Name them `founder1.jpg` and `founder2.jpg`
   - The second founder image will automatically have a black and white filter applied

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🏗️ Project Structure

```
wehypelab/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── animations/
│   │   │   ├── AnimatedHexagon.jsx
│   │   │   ├── AnimatedHexagon.css
│   │   │   ├── AnimatedLines.jsx
│   │   │   └── AnimatedLines.css
│   │   ├── Navigation.jsx
│   │   ├── Navigation.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── Services.jsx
│   │   ├── Services.css
│   │   ├── ThemeToggle.jsx
│   │   └── ThemeToggle.css
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎯 Key Sections

1. **Hero Section** - Eye-catching introduction with animated hexagons and statistics (40+ Brands, 1.7M+ Audience Reached, 98% Success Rate)
2. **Founders Section** - Meet the team behind We Hype Lab with animated founder cards and hexagonal image frames
3. **Services** - 6 comprehensive training programs with animated cards
4. **About** - Mission, vision, and values presentation
5. **Process** - 5-step timeline of the training methodology
6. **Testimonials** - Client success stories
7. **Contact** - Contact form and information
8. **Footer** - Links and company information

## 🎨 Animation Features

### Hexagons
- Floating animated hexagons with rotation
- Hover effects with scale and rotation
- Staggered entrance animations
- Used as decorative elements and icons

### Lines
- Animated line drawing effects
- Grid patterns with fade-in animations
- Connecting lines between elements
- Decorative diagonal lines

### Transitions
- Smooth page scroll animations
- Element fade-in on scroll
- Staggered children animations
- Parallax effects in hero section

## 🌓 Theme System

The website includes a complete light/dark theme system:

- Theme toggle button with animated icon transitions
- Smooth color transitions
- Persistent theme preference (localStorage)
- System preference detection
- CSS variables for easy customization

## 🎭 Color Scheme

### Light Theme
- Primary Background: `#ffffff`
- Secondary Background: `#f5f5f5`
- Text Primary: `#000000`
- Text Secondary: `#333333`

### Dark Theme
- Primary Background: `#0a0a0a`
- Secondary Background: `#1a1a1a`
- Text Primary: `#ffffff`
- Text Secondary: `#e0e0e0`

## 📱 Responsive Breakpoints

- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: 480px - 767px
- Small Mobile: < 480px

## 🔧 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner in interactive watch mode

### `npm eject`
Ejects from Create React App (one-way operation)

## 🎨 Customization

### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #000000;
  /* ... other variables */
}
```

### Animations
Adjust animation timings in component files or global keyframes in `src/index.css`

### Content
Update text, images, and data in component files:
- `Hero.jsx` - Main headline and stats (40+ Brands, 1.7M+ Audience Reached, 98% Success Rate)
- `Founders.jsx` - Founder information, names, roles, bios, and expertise
- `Services.jsx` - Service offerings
- `App.jsx` - About, Process, Testimonials, Contact sections

### Founder Images
To update founder images:
1. Replace `src/assets/founder1.jpg` with your first founder image
2. Replace `src/assets/founder2.jpg` with your second founder image (will be displayed in black and white)
3. Update founder names, roles, and bios in `src/components/Founders.jsx`

## 🌟 Best Practices

- Semantic HTML for accessibility
- ARIA labels on interactive elements
- Focus states for keyboard navigation
- Reduced motion support for accessibility
- Performance-optimized animations with `will-change`
- Lazy loading and code splitting ready

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, reach out to hello@wehypelab.com

---

**Built with ❤️ for We Hype Lab**