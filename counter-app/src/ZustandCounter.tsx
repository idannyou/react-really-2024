import React from "react";
import create from "zustand";

interface CounterState {
  count: number;
  increment: () => void;
}

const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

const DisplayCounter: React.FC = () => {
  const count = useCounterStore((state) => state.count);
  console.log("DisplayCounter re-rendered");
  return <div>Zustand Count: {count}</div>;
};

const IncrementButton: React.FC = () => {
  const increment = useCounterStore((state) => state.increment);
  console.log("IncrementButton re-rendered");
  return <button onClick={increment}>Zustand Increment</button>;
};

const AppZustand: React.FC = () => {
  return (
    <>
      <div className="col-center">
        <DisplayCounter />
        <IncrementButton />
      </div>
    </>
  );
};

export default AppZustand;
