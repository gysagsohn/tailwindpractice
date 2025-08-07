<p align="center">
  <a href="https://github.com/gysagsohn/tailwindpractice">
    <img src="https://img.shields.io/github/stars/gysagsohn/tailwindpractice?style=social" alt="GitHub stars">
  </a>
  <a href="https://gy-tailwind-practice.netlify.app">
    <img src="https://img.shields.io/netlify/939154c6-9299-49cc-950e-908b9560f2e3?label=Netlify%20Deploy&logo=netlify" alt="Netlify frontend">
  </a>
  <img src="https://img.shields.io/badge/status-live-brightgreen" alt="App status">
</p>

# Tailwind Practice Project (React + Vite)

A responsive frontend project built with:

- **React**
- **Vite**
- **Tailwind CSS v4+**

---

## Purpose

This project was created to help me:

- Learn and apply the fundamentals of **Tailwind CSS**
- Customize my own **design system** using CSS variables
- Build a **multi-page app** with responsive layouts
- Practice **modals**, **flexbox**, and **component reusability**
- Improve UI/UX with real-world components like popups, buttons, icons, and more

---

##  Live Site

Check it out here:  
🔗 [https://gy-tailwind-practice.netlify.app](https://gy-tailwind-practice.netlify.app)

---

## Project Features

 3 responsive pages built with React Router:

- **Dashboard**  
  Cards with modal previews and action buttons (primary, warning, success)

- **Profile**  
  User avatar, update modal, and styled user info

- **Contact**  
  Styled form with alert-based interactivity  
  Social media links via **LinkedIn** and **Instagram** icons

Custom color system defined using Tailwind CSS v4+ with `@theme` in CSS:

```css
@import "tailwindcss";

@theme {
  --font-sans: "Inter", sans-serif;

  --color-default: #F9FAFB;
  --color-card: #FFFFFF;

  --color-primary: #1A1A1A;
  --color-secondary: #4B5563;
  --color-placeholder: #9CA3AF;
  --color-link: #3B82F6;

  --color-cta: #3B82F6;
  --color-cta-hover: #2563EB;

  --color-warning: #F87171;
  --color-success: #34D399;

  --color-border-muted: #E5E7EB;
}
```