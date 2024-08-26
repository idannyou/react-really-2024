## Counter App

The purpose of using zustand instead of React's useContext is the simplicity in managing client side state and the performance implications.

Zustand only re-renders the component that consumes the changing state. While useContext re-renders all the components that use it.

### Zustand Counter

![Only the counter gets re-rendered](./public/zustand.png)

### useContext Counter

![The counter and the button are re-rendered](./public/useContext.png)
