# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/naveenc-04/portfolio-n.git
cd portfolio-n
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deployment Options

You can deploy this portfolio to any of these platforms:

### Vercel (Recommended)
- Most optimized for Vite/React projects
- [Deploy with Vercel](https://vercel.com/new)
- Connect your GitHub repo and deploy with one click

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
npm run build
# Push the dist folder to your gh-pages branch
```

### Railway
- Connect your GitHub repo at [railway.app](https://railway.app)
- Set build command: `npm run build`
- Set start command: `npm run preview`

### Other Platforms
- AWS Amplify
- Firebase Hosting
- Cloudflare Pages
- Any static hosting service

## Project Structure

- `src/components/` - All portfolio sections
- `src/App.tsx` - Main application
- `tailwind.config.js` - Tailwind CSS configuration
- `vite.config.ts` - Vite configuration

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React Icons
