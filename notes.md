# Next.js - Official Tutorial

## Introduction

### About the Tutorial

- I am here now:
  https://nextjs.org/learn/dashboard-app/error-handling#adding-trycatch-to-server-actions

- NOTE: Run in localhost:3000 using - `pnpm run dev` (not using `npm dev`)

- NOTE: Install\update everything using `PNPM`, not `NPM`. That means using
  "pnpm add" instead of "npm install" in the terminal

- This tutorial is from the official Vercel website - https://nextjs.org/learn

- Deployment: https://next-js-demo-2-two.vercel.app/dashboard

- NOTE: The `clsx` library is included in this project just in order to manage
  "conditional" classes. It's not an essential part of Next.js

- Important note: There are some things that need to be considered when using
  Zustand or Redux along with Next.js:

  - Zustand: https://zustand.docs.pmnd.rs/guides/nextjs
  - Redux: https://redux.js.org/usage/nextjs

- This tutorial includes CRUD operations (Create, Read, Update, Delete) using
  server actions in Next.js, as well as URL-based search and pagination

- Note: We can use `sql` in Next.js because it's a full-stack framework that
  runs both on the server and on the client simultaneously, unlike "regular"
  React.js. Next.js has "server commands" capabilities, just as if we were
  writing code for a Node.js server application (and Next.js actually does run
  an instance of Node.js under the hood). This is a major feature of Next.js,
  and it's the main thing that sets it apart from "regular" React.js

- Next.js is not just "enhanced React". It's something different. It shouldn't
  be used instead of React in any scenario, but only when it's features are
  actually necceesary. Not every web application really needs to run on the
  client and on the server simultaneously

- This is why Next.js can be used in an architecture that includes only itself
  and a database, without any need for a standalone server application (like
  Node.js or Flask) or for an API layer. But, such an architecture is only
  recommended for certain use cases

- In some cases, just React is a better choice than Next.js. For example, when
  there's a need for strict and clear separation between the server application
  and the client application (or several client applications\platforms). In
  general, React is more "universal" than Next.js. Not every web application
  needs its own instance of Node.js for server-side rendering and for server
  actions (which is what Next.js provides)

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

- Note: When using `console.log` in a server component, the log will be
  displayed in the terminal, NOT in the browser

- Using server components in Next.js to query data - there are a few benefits of
  doing that, like:

  - Server Components can use async/await syntax without needing useEffect or
    other data fetching libraries like `react-query`
  - Server Components run on the server, so you can keep expensive data fetches
    and logic on the server, only sending the result to the client
  - Server Components can query the database directly without an additional API
    layer

- Note that client components can't query the database directly like server
  components, so the best practice is to query the data in the server component
  and then pass it to the client component (if not using a data store like
  Zustand or Redux)

- It's also possible to use GraphQL to query a database, but it's not done in
  this application

## Static and Dynamic Rendering

### Definitions

- `Static Rendering`: The front end is generated at build time, on the server.
  It's also often called `pre-rendering`. Good for parts of the application that
  don't change often

- `Dynamic Rendering`: The front end is generated at request time, on the
  browser. Good for parts of the application that change often, or that contain
  dynamic data

- A common problem in web development is that with `Dynamic Rendering`, your
  application is only as fast as your slowest data fetch. If any data fetch
  takes too long, the entire application won't load until it's done. And yet,
  `Dynamic Rendering` is sometimes necessary. To try to solve this problem in
  Next.js, we have `streaming` and `suspense`

## Streaming and Suspense

- The basic idea in `streaming` is to break down the app's UI into `chunks` and
  to stream them from the server to the client as they become ready

- Any React component, group of components, or even the entire route can be a
  `chunk`

- While the `streaming` is happening, the user can already interact with the UI
  that is already rendered - typically the layout, headers, footers, sidebars,
  etc

- There are two ways you implement streaming in Next.js:

  - At the page level, with the loading.tsx file (which creates a `<Suspense>`
    component for us behind the scenes)
  - At the component\component group level, using `<Suspense>` components, for
    more granular control

### Streaming an entire route

- If any route has a `loading.tsx` file, the entire route will show the contents
  of that file until the data is fetched (for example - the "dashboard" route in
  this tutorial)

- Any subroute of a route with a `loading.tsx` file will also show the contents
  of that file until the data is fetched. To avoid this, we can create a
  separate `loading.tsx` file for the subroutes, or to use the `route groups`
  feature in Next.js

- A `route group` is a way to group multiple routes together in a logical way,
  without affecting the URL hirarchy. To use it, we need to simply wrap the
  folder name in parentheses - like (overview) for the top level of the
  dashboard route. these folders won't be displayed in the URL path

- Loading Skeletons:A common UX pattern is to show an animated "loading"
  skeleton while the data is being fetched

### Streaming a single component

- This can be done by using the built-in `<Suspense>` component, which has a
  buil-in 'fallback' prop

- The `<Suspense>` component is wrapped around the component that we want to
  stream, and the fallback is the `skeleton` UI or some other form of "loading"
  indicatior, like an animation

- Grouping components, for streaming purposes: Sometimes we'll want to group
  multiple components together and stream them as a single unit, to make the
  user experience less confusing. This is done simply by wrapping the relevant
  components with a single "meta component" , and then wrapping the "meta
  component" with the `<Suspense>` component

- The decision where to place `suspense boundaries` depends on how we want the
  user experience to be. In general, it's good practice to move data fetches
  down to the components that need it, and then wrap those components in
  `<Suspense>`.

- In different scenarios, we might want to `stream` individual components,
  groups of components, or even the entire route. It's ok to experiment and see
  what works best

## Partial Prerendering (PPR)

- Note: I'm not sure id in Next.js version 15 and above, `Partial Prerendering`
  is already a stable feature or still experimental. If it's still experimental,
  it shouldn't be used in production yet

- It's recommended (for now) to use the `ppr: 'incremental'` option in the
  `next.config` file in order to incrementaly adopt `Partial Prerendering` for
  specific routes

- `Partial Prerendering` doesn't rewuire us to change the code to use it. As
  long as we're using `Suspense` to wrap the dynamic parts of the route, Next.js
  will know which parts of the route are static and which are dynamic, and
  handle prerendering accordingly to improve load times

## Search and Pagination

### General

- Next.js uses several APIs for search and pagination: `useSearchParams`,
  `usePathname`, and `useRouter`

- `search` and `pagination` patterns are different in Next.js from what we may
  be used to when working with client-side React. But there are benefits to
  using URL search params and to "lifting state to the server"

### Search

- The recommended way to implement search in Next.js is to use URL search
  params. This way, a single search can be done on both the server side and on
  the client side at the same time. That's something unique to Next.js. And it
  allows sharing, bookmarking, server-side rendering, analytics and tracking

- Search client hooks:

  - `useSearchParams`: Access the parameters of the current URL. They are
    returned as an object
  - `usePathname` - Returns the current URL's pathname
  - `useRouter`- navigates between routes within client components,
    programmatically

- `useRouter`'s methods:

  - `router.push(href: string, { scroll: boolean })`: Perform a client-side
    navigation to the provided route. Adds a new entry into the browser’s
    history stack
  - `router.replace(href: string, { scroll: boolean })`: Perform a client-side
    navigation to the provided route without adding a new entry into the
    browser’s history stack
  - `router.refresh()`: Refresh the current route. Making a new request to the
    server, re-fetching data requests, and re-rendering Server Components. The
    client will merge the updated React Server Component payload without losing
    unaffected client-side React (e.g. useState) or browser state (e.g. scroll
    position)
  - `router.prefetch(href: string, options?: { onInvalidate?: () => void })`:
    Prefetch the provided route for faster client-side transitions. The optional
    onInvalidate callback is called when the prefetched data becomes stale.
  - `router.back()`: Navigate back to the previous route in the browser’s
    history stack
  - `router.forward()`: Navigate forwards to the next page in the browser’s
    history stack

- Common implementation of search in Next.js:

  - Capture the user's input
  - Update the URL with the search params
  - Keep the URL in sync with the input field
  - Update the table to reflect the search query

- A detailed example of how to implement search in Next.js can be seen here:
  https://nextjs.org/learn/dashboard-app/adding-search-and-pagination

- The result is a search box that's dynamically synched with both the browser's
  URL params and with the data table (that shows the filtered data)

- NOTE: The `useSearchParams()` hook is used to access the URL search params on
  a client component, while the `searchParams` prop is used to access the URL
  search params on a server component.

- The `searchParams` and `params` built-in Next.js props that a page can receive
  from the URL, if it wants to. `searchParams` includes all the URL search
  params, and `params` includes the dynamic route parameters (like `[post-name]`
  in `[post-name].tsx`)

- Search debouncing: `debouncing` is a technique used to delay the execution of
  the search query until the user pauses. It's a very common technique, and we
  implement it here using the library `use-debounce`

### Pagination

- Note: The `<Pagination>` component here is a client component, so we don't
  want to fetch data on it (since the database secrets would be exposed this
  way). We're not using an API here, but rather fetching data directly in the
  server, using server components (in which the database secrets are not sent to
  the client). After fetching the data, we pass it to the client component

- A typical implementation of a `pagination` pattern in Next.js can be seen in:
  https://nextjs.org/learn/dashboard-app/adding-search-and-pagination

## Mutating Data

### Basic Terms

- `React Server Actions` are a way to mutate data on the server

- The native `FormData` object is used to capture data from a form

- The `revalidatePath API` is used to revalidate a path

- The `redirect` function is used to redirect the user to a new path (typically,
  after a successful action)

### React Server Actions

- `Server Actions` allow us to run asynchronous code directly on the server. The
  SQL commands that we have been using in this application are an example of
  `React Server Actions`

- `Server Actions` can be used to mutate data on the server\on the database,
  without an API layer. They can be invoked from both server and client
  components

- A major advantage of `Server Actions` is security. They include features like
  encrypted closures, strict input checks, error message hashing, host
  restrictions, and more

- It's recommended to create a single "actions.ts" file in the `app/lib` folder
  of the application, and to export all the actions from there. This file needs
  to start with "use server" at the top of the file, to mark all the exported
  functions within the file as Server Actions

- `Server Actions` can be invoked from both server and client components

- It's also possible to write `Server Actions` in any component, and in this
  case we'll have to expressively add 'use server' to that file

- Behind the scenes, `Server Actions` create a "POST" API endpoint, to send data
  to the server. This is why we don't need to create API endpoints manually when
  using `Server Actions`

- In React, the "action" attribute in the `<form>` HTML element is a special
  prop, that can receive a function that can be a `Server Actions`, like we do
  here

- In this tutorial, we'll use Zod, a TypeScript-first validation library, to
  validate data

- Tip: It's usually good practice to store monetary values in cents, in order to
  avoid errors

- After updating data in the database, it's a good practice to revalidate the
  path using the Next.js `revalidatePath` function. This clears the cached data
  for the path so that the data is refetched from the database

- `Dynamic Routes` - a way to generate URLs with parameters, like `[id].tsx` or
  `[blog-post].tsx`. Used for blog posts, products, invoices, etc.

- The JS `bind` function is used in this tutorial to ensure that any values
  passed to the Server Action are encoded

## Handling Errors

### Try\Catch in Server Actions

- ...

### The error.tsx File

- ...
