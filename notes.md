# Next.js - Official Tutorial

## Introduction

### About the Tutorial

- This tutorial is from the official Vercel website - https://nextjs.org/learn

- I am here now:
  https://nextjs.org/learn/dashboard-app/creating-layouts-and-pages#creating-the-dashboard-layout

## The Basics

### Next.js Folder Structure

- /app is where most of the code exists

### Next.js: Page vs Layout vs Route

- A `page` is a React component that is exported from a file in the `app`
  directory. It is used to define a route\URL in the application (like "pages"
  in WordPress)

- A `layout` is a React component that "wraps around" your pages. It is used to
  define the structure and design of your application. Layouts can be nested,
  allowing you to create complex UI structures (like "theme\theme parts" in
  WordPress)

- Layouts are used to share "special components" across multiple pages, such as:
  Headers, footers, sidebars and so on. They can also be used to manage state
  and data fetching for the pages that they wrap

- A `route` is used to define dynamic URLs in the application. It's defined
  using square brackets in the file name (e.g. `[id].tsx`).

- `colocation`: A Next.js term that refers to the practice of placing related
  files (like components, styles, and tests) in the same directory as the page
  or component that uses them. This helps to keep the code organized. Only the
  two `routable` components will be accessible to the users: `pages` and
  `layouts`. The others will remain internal to the app

### Fonts and Images Management in Next.js

- In Next.js, there should be a file named `fonts.ts` under the `app\ui` folder.
  This file is used to manage the fonts and to export them (including weights,
  subsets and so on) to other components. The `layout.tsx` file should import
  the main font and place it in the `<body>` tag

- Next's special `<Image>` component is used to manage images and to manage
  their optimization
