# Next.js - Official Tutorial

## Introduction

### About the Tutorial

- I am here now:
  https://nextjs.org/learn/dashboard-app/setting-up-your-database#create-a-postgres-database

- NOTE: Run in localhost:3000 using - `pnpm run dev` (not using `npm dev`)

- NOTE: Install\update everything using `PNPM`, not `NPM`

- This tutorial is from the official Vercel website - https://nextjs.org/learn

- Deployment: https://next-js-demo-2-two.vercel.app/dashboard

- NOTE: The `clsx` library is included in this project just in order to manage
  "conditional" classes. It's not an essential part of Next.js

## The Basics

### Next.js Folder Structure

- /app is where most of the code exists

### Client Components vs Server Components

- `use client` is used to indicate that a component should be rendered on the
  client side. A component needs to be a client component if it:

  - Uses state
  - Uses effects
  - Uses refs
  - Uses any other client-side APIs (like `window`, `document`, etc.)

- Any component is a "server component" by default, unless it has `use client`

- Any component that is a child of a client component is also a client
  component. This means that below a client component, all components are client
  components (in Next.js this is also called the "client-server boundary")

- Any component that queries data from the server needs to be a server component

- The entry point of the application is the `layout.tsx` file, which is always a
  server component

- In order to be interactive, any Next.js application needs to have at least one
  client component

### Page vs Layout vs Route

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

### Fonts and Images Management

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
  when transitioning between `pages`, and also makes the navigation faster

- The `root layout` is the top-level `layout.tsx` (directly under the "app"
  folder) that wraps around the entire application

- Any UI you add to the `root layout` will be shared across all pages in your
  application. You can use the root layout to modify the <html> and <body> tags,
  and to add metadata

### Links

- The `<Link>` component is used to create links between pages. We never use the
  `<a>` tag to create internal links in Next.js

- Part of what Next.js does behind the scenes is to "prefetch" the linked pages,
  but without rendering them. This enables fast, smooth navigation. It's called
  `client-side navigation` because there are no new requests to the server when
  navigating - the browser navigates between data that it has already loaded

- Next.js provides a hook called `usePathname()` that checks the current URL.
  This is useful for marking links as "active" (e.g., when the current page is
  equal to the linked page)

## Using a Database

### Setting up the Database

- The database used in this tutorial is PostgreSQL. It's connected using Vercel
  and Neon

- Instructions for connecting a DB\BaaS (like Neon or Supabase) to a Vercel
  project can be found in the Vercel dashboard

### Querying the Database

- The most common way to query data is using a REST API

- Another way is to use SQL queries in JS using a library like
  `@vercel/postgres`, the way we are doing in this tutorial

- The "sql" function that we import from `@vercel/postgres` in app/lib/data.ts
  allows us to execute SQL queries using JavaScript, rather than using the SQL
  language directly

- Using server components in Next.js to query data: There are a few benefits of
  doing that, like:

  - Server Components can use async/await syntax without needing useEffect,
    useState or other data fetching libraries
  - Server Components run on the server, so you can keep expensive data fetches
    and logic on the server, only sending the result to the client
  - Server Components can query the database directly without an additional API
    layer

- It's also possible to use GraphQL to query a database, but it's not done in
  this application

-
