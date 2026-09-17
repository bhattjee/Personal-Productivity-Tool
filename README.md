# Life Flow

A comprehensive personal productivity and life optimization application built to help you track habits, manage tasks, monitor fitness, and achieve your goals.

## Features

Life Flow includes the following modules:

- Dashboard - Overview of your daily progress, streaks, and AI-powered insights
- To-Do List - Task management with completion tracking
- Habit Tracker - Build and maintain positive habits with streak tracking
- Morning Alarm - Set and manage alarms for your morning routine
- Daily Journal - Reflect on your day with journaling capabilities
- Gym Stats - Track your workout sessions and progress
- Running - Monitor running activities and performance
- Bedtime - Sleep tracking and bedtime routine management
- Streaks - Visualize and celebrate your consistency streaks
- Daily Quotes - Get inspired with motivational quotes and favorites
- Expense Tracker - Manage your finances and expenses
- Lists - Create and manage custom lists for various purposes

## Tech Stack

React 18 - UI framework
TypeScript - Type-safe development
Vite - Fast build tool and dev server
Tailwind CSS - Utility-first styling
shadcn/ui - High-quality UI components built on Radix UI
React Router - Client-side routing
TanStack Query - Data fetching and state management
Lucide React - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (18 or higher)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd music-facsimile

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ui/          # shadcn/ui components
│   └── Sidebar.tsx  # Main navigation sidebar
├── pages/           # Page components for each feature
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── assets/          # Static assets
└── App.tsx          # Main application component with routing
```

## Security Note

This project does not contain any sensitive data such as:
- API keys
- Secret tokens
- Database credentials
- Environment variables

All data is currently stored in component state (client-side only). If you plan to add backend functionality or external API integrations, ensure you:
1. Use environment variables for sensitive configuration
2. Add `.env` files to `.gitignore`
3. Never commit secrets to version control

## Development

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Add navigation item in `src/components/Sidebar.tsx`

### Customizing Theme

The application uses Tailwind CSS with custom theme defined in `tailwind.config.ts`. You can customize colors, fonts, and other design tokens there.

## License

This project is private.
