# SPORE FALL - Frontend

A Next.js-based frontend application for SPORE FALL, a sci-fi narrative series. The city of Lionara is quarantined. A spore is rewriting human fate.

## Tech Stack

- **Next.js 16.1.3** - React framework with App Router
- **React 19.2.3** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **Prettier** - Code formatter
- **ESLint** - Code linter

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd spore-frontend-v1
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- `npm run dev` - Starts the development server (automatically formats code with Prettier)
- `npm run build` - Creates an optimized production build (automatically formats code with Prettier)
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint to check for code issues
- `npm run format` - Formats all files with Prettier
- `npm run format:check` - Checks if files are formatted correctly without making changes

## Code Formatting

This project uses Prettier for code formatting with the following configuration:

- **Print Width**: 120 characters
- **Tab Width**: 2 spaces
- **Single Quotes**: Enabled

Prettier automatically runs before `dev` and `build` commands to ensure consistent code style.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/          # Home page components
│   │   ├── result/        # Result page components
│   │   ├── about/         # About page components
│   │   ├── popups/        # Modal/popup components
│   │   └── shared/        # Shared components
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── result/
│   │   └── page.js        # Result page
│   ├── about/
│   │   └── page.js        # About page
│   ├── globals.css        # Global styles and Tailwind config
│   └── ExternalStyles.js  # External stylesheet loader
```

## Styling

The project uses Tailwind CSS with a custom dark sci-fi theme. Custom colors, fonts, and utility classes are defined in `globals.css`.

### Fonts

- **JetBrains Mono** - Monospace font for body text
- **Orbitron** - Display font for headings

### Custom CSS Classes

The project includes various custom utility classes for the sci-fi aesthetic:
- `grid-overlay` - Grid pattern overlay
- `text-glow` - Text glow effect
- `border-glow` - Border glow effect
- `scanline` - Scanline effect
- `dot-grid` - Dot grid pattern
- And more...

## Features

- **Multi-step Modal**: Interactive poll modal that auto-opens on the home page
- **Responsive Design**: Mobile-first responsive layout
- **Dark Theme**: Sci-fi inspired dark color scheme
- **Component-based Architecture**: Modular, reusable React components

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## Deploy

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
