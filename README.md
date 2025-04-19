# Notes App

This is a [Next.js](https://nextjs.org/) based notes application deployed at [https://notes-ecru-three.vercel.app](https://notes-ecru-three.vercel.app)

## Features

- **Google Authentication** - Securely sign in with your Google account
- **Persistent Storage** - All your notes are saved to your account
- Simple and clean interface for note management
- Easily create, edit, and delete notes
- Responsive design that works on both desktop and mobile devices
- Quick access to your important thoughts and information

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the app by modifying `app/page.js`. The page auto-updates as you edit the file.

## How It Works

1. **Sign In** - Use your Google account to authenticate and access your notes
2. **Create Notes** - Add new notes with titles and content
3. **Manage Notes** - View, edit, and delete your saved notes
4. **Automatic Saving** - All changes are automatically saved to your account

## Tech Stack

This project uses:
- **Next.js** - React framework for production
- **React** - For building the user interface
- **NextAuth.js** - For Google authentication integration
- **Database Storage** - For saving user notes
- **CSS Modules** - For component-scoped styling
- **next/font** - To automatically optimize and load Inter, a custom Google Font

## Development

To contribute to this project:
1. Clone the repository
2. Install dependencies with `npm install`
3. Set up authentication credentials (see below)
4. Run the development server with `npm run dev`
5. Make your changes
6. Submit a pull request

### Authentication Setup

To use Google authentication in your local development environment:
1. Create a project in the [Google Developer Console](https://console.developers.google.com/)
2. Set up OAuth credentials
3. Create a `.env.local` file with your credentials:
```
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret
```

## Live Demo

Check out the live demo at [https://notes-ecru-three.vercel.app](https://notes-ecru-three.vercel.app)

## Learn More

To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial

## Deployment

This project is deployed on [Vercel](https://vercel.com/), the platform from the creators of Next.js.

For more information on deploying your own Next.js app, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).