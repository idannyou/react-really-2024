React Rally Advanced React Workshop

## Packages

- msw : mock server
- zod : run time validations
- concurrently: concurrently run multiple scripts:

```
    "start": "concurrently npm:start*",
```

## State Management timeline

- fetch in componentDidMount (2014)
- fetch in useEffect (2019)
- Custom useFetch hook (2020)

## json-server

- creates a mock server that returns a json mock data
- very easy to use and does not require backend modeling

## Other

- A ternery should not be longer than your screen height; you should be able to see the entire condition.
- Pull your maps out to a function so it is more readable; this may or may not be memoized.
- You need at least one error boundary in a react app.
- react query handles can abort a query fetch if the component stops rendering.
- type assertion is a code smell.
- Look at Cory House twitter video for refactor to useQuery.
- Leave query name as is vs. destructuring, foodsQuery vs. { data, ... }; because query name has a name space so that a second query does not need multiple re-naming when destructuring.
- use zod to do schema validation. Copilot can auto populate it.
- use `as const` type to make it not mutable:

```
export const foodTags = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
  "Drink",
  "Appetizer",
  "Spicy",
  "Vegetarian",
  "Alcoholic",
] as const;
```

- Once you use zod, you can just infer from zod types. It also runs on runtime and compile time via infer.
- React runs effects twice on strict mode.
- Any actions done on a page should be able to be duplicated via copy and paste url.
- Performance issues come from putting state in the wrong spot.
  - Keep state as local as possible.
  - Lift content up and return `{children}`
  - https://stackblitz.com/@DavidArutiunian
  - https://github.com/coryhouse/reactjsconsulting/issues/77
- Can use zustand for complicated state management, but would not mix this with react query.
  - https://github.com/pmndrs/zustand#async-actions
  - zustand is meant for client side state management
  - react query is meant for server side state management
  - run useEffect to merge the two, but you should "rarely" try syncing client and server
