# Angular Portfolio

A modern, responsive portfolio website built with Angular 15, featuring smooth animations, interactive components, and a clean design.

## Features

- Responsive design that works on all devices
- Smooth page transitions and animations
- Interactive particle background
- Dark/Light theme support
- Modern UI with Bootstrap and custom SCSS
- Optimized performance with lazy loading
- SEO-friendly routing
- Contact form integration
- Project showcase with detailed descriptions
- Skills section with progress indicators
- Experience timeline
- Certificate gallery

## Tech Stack

- **Frontend Framework**: Angular 15
- **Styling**: SCSS, Bootstrap 5
- **Animations**: GSAP, AOS (Animate On Scroll)
- **Icons**: Font Awesome
- **Build Tool**: Angular CLI
- **Deployment**: Vercel

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── experience/
│   │   ├── footer/
│   │   ├── home/
│   │   ├── loader/
│   │   ├── navbar/
│   │   ├── particles/
│   │   ├── projects/
│   │   ├── scroll-to-top/
│   │   └── skills/
│   ├── services/
│   ├── animations/
│   └── app-routing.module.ts
├── assets/
│   └── images/
└── environments/
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Angular CLI

### Installation

1. Clone the repository
```bash
git clone https://github.com/RaunakKumar-byte/Protfolio.git
cd Protfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

### Build for Production

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/angular-portfolio` directory.

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Angular configuration
4. Your site will be deployed and available at a Vercel URL

## Available Scripts

- `ng serve` - Start development server
- `ng build` - Build for production
- `ng test` - Run unit tests
- `ng e2e` - Run end-to-end tests

## Components

### Home
Landing page with hero section, introduction, and call-to-action buttons.

### About
Personal information, background, and professional summary.

### Skills
Technical skills with progress indicators and proficiency levels.

### Projects
Portfolio of completed projects with descriptions, technologies used, and live links.

### Experience
Professional work experience timeline with detailed descriptions.

### Contact
Contact form and social media links for reaching out.

## Customization

### Adding New Projects
1. Add project images to `src/assets/images/projects/`
2. Update the projects array in `projects.component.ts`
3. Include project details, technologies, and links

### Modifying Content
- Update personal information in respective component files
- Replace profile image in `src/assets/images/profile.jpg`
- Update resume PDF in `src/assets/images/resume.pdf`

### Styling
- Main styles are in `src/styles.scss`
- Component-specific styles are in individual `.scss` files
- Bootstrap classes are used for responsive design

## Performance Optimizations

- Lazy loading for routes
- Optimized images and assets
- Tree-shaking for unused code
- Production build optimizations
- CDN delivery for static assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Raunak Kumar
- GitHub: [@RaunakKumar-byte](https://github.com/RaunakKumar-byte)
- Email: [Your Email]
- LinkedIn: [Your LinkedIn Profile]

## Acknowledgments

- Angular team for the amazing framework
- Bootstrap for the responsive design system
- Font Awesome for the icon library
- GSAP for smooth animations
- AOS for scroll animations