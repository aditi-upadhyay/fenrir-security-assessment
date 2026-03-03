# Frontend Design Challenge – Fenrir Security

## Overview

This project is a fully interactive React application built as part of the Frontend Developer technical assessment.

The objective was to recreate three product screens based strictly on the provided design reference and implement a responsive, production-ready interface from scratch.

The focus of this implementation was:

* Clean and scalable component architecture
* Pixel-accurate UI recreation
* Responsiveness across all screen sizes
* Maintainable and well-structured code

---

## Tech Stack

* React (TypeScript)
* Vite
* Tailwind CSS
* Lucide React (for icons)

---

## Features

* Recreated three product screens based on the provided design reference
* Fully responsive layout (mobile, tablet, desktop)
* Reusable and modular component structure
* Interactive sidebar navigation
* Animated toast notification system
* SVG-based circular progress indicator
* Clean and structured state management using React hooks

---

## Project Structure

```
src
├── components      // Reusable UI components (Sidebar, Cards, Toast, etc.)
├── pages           // Individual screen implementations
├── constants       // Static configuration (e.g., sidebar items)
├── context         // Global state management (Toast Provider)
└── main.tsx        // Application entry point
```

The structure ensures separation of concerns and scalability for future enhancements.

---

## Responsive Behavior

* **Desktop:** Fixed sidebar with structured content layout
* **Tablet:** Adaptive grid and flexible spacing
* **Mobile:** Collapsible sidebar with smooth slide-in animation and overlay

Flexbox and Grid were used to maintain consistent spacing and alignment across breakpoints.

---

## Component Architecture

The UI was broken down into reusable components such as:

* Sidebar
* SidebarItem
* MetricCard
* ProgressIndicator
* Toast & ToastContainer

This approach improves maintainability and avoids repetition.

---

## Animations & UX Enhancements

* Smooth sidebar slide-in animation on mobile
* Toast notification entry animation with auto-dismiss
* Subtle hover states on interactive elements
* Clean transitions for layout adjustments

Animations were kept minimal and professional to enhance usability.

---

## Running the Project Locally

Install dependencies:

```
npm install
```

Start development server:

```
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

## Deployment

The live deployed URL - https://frerir-aditi-upadhyay.netlify.app and GitHub repository link - https://github.com/aditi-upadhyay/fenrir-security-assessment.git 

---

