## Main Takeaways

### Best practices

- For complex client side state management use zustand. See `counter-app`.
- For "server" state management use React Query. See `advanced-react-workshop-react-rally`.

  - A common mistake is when people try syncing up client and server states; you rarely do this unless you create an Edit form, etc. When you do this use `useEffect` for syncing.

- The purpose of using a custom DevTool is to easily replicate configurations that would be difficult or time-consuming to create manually. See `custom-dev-tool`
- Use `json-server` for mock data. It is much simpler to use, because all it returns is the json payload vs. mocking out a "semi" backend with mock-server. I guess we can still use mock-server to return json only. See `advanced-react-workshop-react-rally`.

### Side Note

- The hot thing right now is “React Server Components” (RSCs).
  They are good for faster state-less FE components.
  This is because RSCs saturate their components with backend data before sending it to the frontend. Because it is state-less, you cannot use it with useState
  RSC can also send use client FE code as code splitted JavaScript to the FE.
  And fun fact, we can use Nest.js to send RSCs!
