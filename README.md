# WELLI Portfolio

A modern, responsive portfolio website showcasing business analysis and web development expertise. Built with **Vite** and **Vanilla JavaScript** for optimal performance and minimal dependencies.

## 🌐 Live Demo

**Website:** [WELLI Portfolio](https://creastein.github.io/portofolio)

---

## 📋 Features

- ✨ **Modern & Responsive Design** – Works seamlessly on desktop, tablet, and mobile
- ⚡ **Lightning-Fast** – Built with Vite for optimal performance
- 🎨 **Beautiful UI/UX** – Clean, professional design
- 📱 **Mobile-First Approach** – Optimized for all screen sizes
- 🔍 **SEO Friendly** – Proper meta tags and semantic HTML
- 📦 **PWA Ready** – Includes manifest.json for web app capabilities
- 🎯 **Zero Dependencies** – Vanilla JavaScript, no framework bloat

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Creastein/portofolio.git
cd portofolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 📦 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production (optimized)
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
portofolio/
├── index.html              # Main HTML entry point
├── package.json            # Project dependencies & scripts
├── package-lock.json       # Dependency lock file
├── vite.config.js          # Vite configuration (if present)
│
├── public/                 # Static assets
│   ├── manifest.json       # PWA manifest
│   ├── icons/              # App icons
│   ├── images/             # Image assets
│   └── vite.svg            # Vite logo
│
├── src/                    # Source files
│   ├── main.js             # Application entry point
│   ├── counter.js          # Counter component (demo)
│   ├── style.css           # Main stylesheet
│   ├── javascript.svg      # JavaScript icon
│   └── ...                 # Other modules
│
└── .gitignore             # Git ignore rules
```

---

## 🛠️ Tech Stack

- **Build Tool:** Vite
- **Language:** Vanilla JavaScript (ES6+)
- **Styling:** CSS3
- **Markup:** HTML5
- **Version Control:** Git + GitHub

---

## 🚀 Deployment

### GitHub Pages (Recommended)

The portfolio is automatically deployed to GitHub Pages on every push to the `main` branch using GitHub Actions.

**Deployed at:** `https://creastein.github.io/portofolio`

#### Manual Deployment Steps (if needed):

1. Build the project:
```bash
npm run build
```

2. The `dist/` folder is ready for deployment.

3. Push to GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

The GitHub Actions workflow will automatically build and deploy to `gh-pages`.

### Alternative Deployment Options

**Netlify:**
```bash
npm run build
# Drag & drop the dist/ folder to Netlify
```

**Vercel:**
```bash
vercel --prod
```

---

## 📝 Customization

### Update Portfolio Content

Edit `index.html` to add your:
- Project portfolio
- About section
- Contact information
- Social media links

### Styling

Modify `src/style.css` to customize:
- Colors and typography
- Layout and spacing
- Responsive breakpoints

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 About the Author

**WELLI** – Business Analyst & Developer

- 🌍 Portfolio: [welli.dev](https://welli.dev)
- 💼 LinkedIn: [linkedin.com/in/creastein](https://linkedin.com/in/creastein)
- 🐙 GitHub: [@Creastein](https://github.com/Creastein)
- 📧 Email: contact@welli.dev

---

## 📞 Support

If you have questions or encounter issues, please:

1. Check existing [issues](https://github.com/Creastein/portofolio/issues)
2. Create a new issue with a clear description
3. Include screenshots or error logs if applicable

---

## 🎯 Roadmap

- [ ] Add blog section
- [ ] Implement dark mode
- [ ] Add animations & transitions
- [ ] Improve SEO with structured data
- [ ] Add newsletter signup
- [ ] Implement contact form with backend

---

## ⭐ Show Your Support

If you find this portfolio useful, please consider:

- ⭐ Starring the repository
- 🔗 Sharing it with others
- 💬 Providing feedback or suggestions

---

**Last Updated:** December 13, 2025  
**Maintained by:** [Creastein](https://github.com/Creastein)
