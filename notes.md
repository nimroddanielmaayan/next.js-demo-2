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

### More about Layouts

- `layouts` don't re-render when navigating between pages that they wrap. They
  can persist state, load data, and so on.

- The children of a `layout` are the pages that it wraps. As long as the URL
  contains one of the pages that the `layout` wraps, the `layout` will persist

- A child of a `layout` can also be another `layout`. This allows you to create
  nested layouts. For example, you can have a `dashboard` layout that wraps
  around a `settings` layout. This allows you to create a complex UI structure
  with multiple levels of navigation

- A `route` can also be a child of a `layout`

- One benefit of using `layouts` in Next.js is that on navigation, only the
  `page` components update while the `layout` won't re-render. This is called
  `partial rendering`, which preserves client-side React state in the `layout`
  when transitioning between `pages`

- The `root layout` is the top-level `layout.tsx` (directly under the "app"
  folder) that wraps around the entire application

- Any UI you add to the `root layout` will be shared across all pages in your
  application. You can use the root layout to modify the <html> and <body> tags,
  and to add metadata

### Next.js Links

- The `<Link>` component is used to create links between pages. We never use the
  `<a>` tag to create links in Next.js

- Part of what Next.js does behind the scenes is to "prefetch" the linked pages,
  but without rendering them. This enables fast, smooth navigation. It's called
  `client-side navigation` because there are no new requests to the server when
  navigating - the browser navigates between data that it already has
