## Counter App

The purpose of using zustand instead of React's useContext is the simplicity in managing client side state and the performance implications.

Zustand only re-renders the component that consumes the changing state. While useContext re-renders all the components that use it.

The reason all consuming components re-render is because React can't determine which parts of the context are being used by each component. So, when the context value updates, React assumes that all components that rely on that context might need to update as well. This blanket re-rendering can lead to performance issues, particularly in large applications with many components relying on the same context.

Zustand handles this differently by allowing components to subscribe to only the specific parts of the state they need. When a piece of state changes, only the components that depend on that specific state re-render, improving performance by avoiding unnecessary updates.

### Zustand Counter

![Only the counter gets re-rendered](./public/zustand.png)

### useContext Counter

![The counter and the button are re-rendered](./public/useContext.png)
