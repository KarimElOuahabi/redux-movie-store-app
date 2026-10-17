# Redux Movie Store

A learning project for **Redux** with Next.js and TypeScript. It's a movie list where you can add movies, add them to a basket and like them.

## What it demonstrates

- A store built with classic Redux: `createStore`, a reducer and action types (`ADD_MOVIE`, `ADD_TO_BASKET`, `ADD_TO_LIKED_MOVIES`)
- React Redux wiring in the Next.js App Router (`providers.tsx`, `useSelector`, `useDispatch`)
- Immutable state updates for lists (adding to and toggling items)

The goal is to migrate this store to Redux Toolkit (slices and async thunks). `@reduxjs/toolkit` is already installed, but the store in `main` still uses the legacy API.

## Tech stack

Next.js 16 · React 19 · TypeScript · Redux · Redux Toolkit · Tailwind CSS 4

## Running locally

```bash
cd redux-movie-store
npm install
npm run dev   # http://localhost:3000
```
