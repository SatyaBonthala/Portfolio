# Satya Bonthala - Portfolio Website

A modern, aesthetic portfolio website featuring a black and green theme. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Optimized for all device sizes
- **Modern Stack** - Built with Next.js 14, TypeScript, and Tailwind CSS
- **Aesthetic Theme** - Black and green color scheme with smooth animations
- **Performance Optimized** - Fast loading and smooth interactions
- **SEO Ready** - Optimized for search engines

## 📋 Sections

1. **Hero** - Animated introduction with typewriter effect
2. **About** - Personal introduction and highlights
3. **Projects** - Showcase of GitHub projects:
   - AI Music Recommendation System
   - Customer Chatbot
   - Weather Detector
   - Web Scraper
   - Password Generator
   - Contact Book
4. **Skills** - Technical skills organized by categories
5. **Contact** - Get in touch section with GitHub link

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Inter (Google Fonts)

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn package manager

### Setup Steps

1. **Install Node.js** (if not already installed)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.ts`:
- Primary: `#00ff41` (Green)
- Background: `#000000` (Black)

### Content
- Update personal information in component files under `/components`
- Modify projects in `/components/Projects.tsx`
- Update skills in `/components/Skills.tsx`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The project can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📂 Project Structure

```
portfolio/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── About.tsx        # About section
│   ├── Contact.tsx      # Contact section
│   ├── Hero.tsx         # Hero section
│   ├── Navigation.tsx   # Navigation bar
│   ├── Projects.tsx     # Projects showcase
│   └── Skills.tsx       # Skills section
├── public/              # Static assets
├── .github/
│   └── copilot-instructions.md
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

## 🎯 Key Features

- **Smooth Scrolling** - Navigation links smoothly scroll to sections
- **Hover Effects** - Interactive hover states on all elements
- **Animations** - Glowing text effects and pulse animations
- **Custom Scrollbar** - Themed scrollbar matching the design
- **Typography** - Monospace font for code-like aesthetics

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Satya Bonthala**
- GitHub: [@SatyaBonthala](https://github.com/SatyaBonthala)

---

Built with ❤️ using Next.js, TypeScript & Tailwind CSS
