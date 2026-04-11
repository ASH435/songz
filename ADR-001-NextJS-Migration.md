# ADR 001: Migration of Spotify Playlist Player to Next.js

## Status
Accepted

## Context
The original Spotify Playlist Player was built using vanilla HTML/CSS/JS. While functional, it lacked type safety, component modularity, and optimized asset handling. As the project grows, managing state and adding features like favorite lists or dark mode becomes increasingly complex.

## Decision
Migrate the project to Next.js 14+ using the App Router, TypeScript, and Tailwind CSS.

## Rationale
- **Next.js 14+:** Provides a modern, scalable framework with built-in optimizations for images, fonts, and scripts.
- **App Router:** Allows for better layout management and server components.
- **TypeScript:** Ensures type safety, reducing runtime errors and improving developer experience.
- **Tailwind CSS:** Enables rapid UI development with a utility-first approach and consistent styling.
- **Component Modularity:** Breaking the UI into `Sidebar`, `TrackList`, and `PlayerMain` makes the code easier to maintain and test.

## Alternatives Considered
- **React (Vite):** Lacks built-in server-side features and image optimizations provided by Next.js.
- **Vue.js:** The user requested a "full upgrade" which often implies moving to the industry standard for React (Next.js).

## Consequences
- **Positive:** Better performance, type safety, easier maintenance, and scalability.
- **Neutral:** Increased build complexity compared to vanilla JS.
- **Negative:** Requires Node.js and a build step for deployment.
