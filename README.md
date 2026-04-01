# Personal Portfolio

A modern, interactive personal portfolio website showcasing my projects, skills, and services. 
Built with React and styled with Tailwind CSS, featuring smooth animations, dark mode support, and contact functionality.

## Features

- **Interactive Slide-Based Layout**: Smooth navigation through different sections (Hero, About, Services, Skills, Projects, Contact)
- **Dark Mode Support**: Toggle between light and dark themes with persistent state
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **PDF Viewer**: Display and interact with PDF documents (resume/CV)
- **Contact Form**: Integrated email functionality using EmailJS for direct communication
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Carousel Component**: Embla Carousel for displaying projects and content
- **Modern UI**: Custom UI components built with Radix UI primitives

## Tech Stack

- **React 18.2.0** - UI framework
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **EmailJS** - Email service integration
- **React PDF Viewer** - PDF viewing and interaction
- **Embla Carousel** - Carousel/slider component
- **Radix UI** - Headless UI component library
- **Lucide React** - Icon library

## Project Structure

```
src/
├── components/           # React components
│   ├── AboutSlide.jsx    # About section
│   ├── ContactSlide.jsx   # Contact form section
│   ├── FooterInfo.jsx     # Footer information
│   ├── HeroSlide.jsx      # Hero/landing section
│   ├── ProjectsSlide.jsx  # Projects showcase
│   ├── ServicesSlide.jsx  # Services offered
│   ├── SkillsSlide.jsx    # Skills section
│   ├── ThemeProvider.jsx  # Theme context provider
│   ├── ThemeToggle.jsx    # Dark mode toggle button
│   └── ui/                # Reusable UI components
│       ├── button.jsx
│       └── carousel.jsx
├── lib/
│   └── utils.js           # Utility functions
├── assets/                # Images and static files
├── App.js                 # Main app component
├── App.css                # Global styles
└── index.js               # Entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Yarn or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio
```

2. Install dependencies:
```bash
yarn install
```

### Available Scripts

#### Development
```bash
yarn start
```
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

#### Build
```bash
yarn build
```
Builds the app for production to the `build` folder.

#### Testing
```bash
yarn test
```
Runs the test suite.

## Configuration

### Environment Variables

Create a `.env` file in the root directory for EmailJS configuration:
```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### Customization

- **Theme Colors**: Modify colors in `tailwind.config.js`
- **Content**: Update individual slide components with your information
- **Social Links**: Configure links in relevant components
- **Projects**: Update projects data in `ProjectsSlide.jsx`

## Deployment

This project is configured for deployment on Vercel (see `vercel.json`). 

To deploy:
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy on every push

## License
Permission is hereby granted to use this work for reference or within your own projects, 
provided that clear attribution is given.

