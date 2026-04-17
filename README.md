# Search Results Page

## Project Overview
This project is a React TypeScript application built with Vite. The goal of this task was to create a Search Results page that accepts a search query through the URL, fetches matching products from an external API, and displays them in a clean card layout.

## Task Goal
The task required building a `SearchResults` page that:
- Accepts a query parameter `q` from the URL (e.g. `/search?q=phone`)
- Fetches matching products from DummyJSON API on page mount using `useEffect`
- Displays the message "Showing results for: {q}"
- Shows each product's Title, Price and Category
- Maps to a `/search` route using React Router

## Tech Stack
- React
- TypeScript
- Vite
- React Router DOM
- DummyJSON API

## How To Run The Project
1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`
4. Open your browser and go to:
http://localhost:5173/search?q=lipstick
You can replace `lipstck` with any search term.

## Project Structure
   src/
├── pages/
│   └── SearchResults.tsx
├── App.tsx
└── main.tsx

## Concepts Used
- `useEffect` — to fetch data when the page loads
- `useState` — to store the list of products
- `useSearchParams` — to read the `q` query parameter from the URL
- React Router `BrowserRouter`, `Routes`, `Route` — to set up the `/search` route
- TypeScript types — to define the shape of the product data
- Fetch API — to get data from DummyJSON

---

## References

React Training (2024). *React Router: Declarative Routing for React*. [online] Available at: https://reactrouter.com [Accessed 17 April 2026].


Microsoft (2024). *TypeScript: JavaScript with syntax for types*. [online] Available at: https://www.typescriptlang.org [Accessed 17 April 2026].

React Training (2024). *useSearchParams hook documentation and usage examples*. [online] Available at: https://reactrouter.com/en/main/hooks/use-search-params [Accessed 15 April 2026].

Stack Overflow (2024). *How to use useSearchParams in React Router v6*. [online] Available at: https://stackoverflow.com/questions/70031839 [Accessed 14 April 2026].

Stack Overflow (2024). *Module has no default export error in TypeScript React component*. [online] Available at: https://stackoverflow.com/questions/39801643 [Accessed 15 April 2026].

Stack Overflow (2024). *Cannot find module or its corresponding type declarations in Vite React TypeScript*. [online] Available at: https://stackoverflow.com/questions/40382842 [Accessed 17 April 2026].

Stack Overflow (2024). *Fetch API returns undefined when trying to access nested JSON object property*. [online] Available at: https://stackoverflow.com/questions/37555031 [Accessed 12 April 2026].

Stack Overflow (2024). *React state not updating immediately after setState call inside useEffect*. [online] Available at: https://stackoverflow.com/questions/54069253 [Accessed 13 April 2026].

Stack Overflow (2024). *How to get query string parameters from URL in React Router v6*. [online] Available at: https://stackoverflow.com/questions/65865518 [Accessed 14 April 2026].

Stack Overflow (2024). *How to pass query parameters in URL and read them with useSearchParams hook*. [online] Available at: https://stackoverflow.com/questions/68911432 [Accessed 14 April 2026].

Stack Overflow (2024). *Query parameter "q" undefined when fetching API with dynamic search term in React*. [online] Available at: https://stackoverflow.com/questions/58701538 [Accessed 16 April 2026].

