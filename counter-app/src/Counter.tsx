import React, {
  useState,
  useContext,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface CounterContextType {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

interface CounterProviderProps {
  children: ReactNode;
}

const CounterProvider: React.FC<CounterProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

const DisplayCounter: React.FC = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("DisplayCounter must be used within a CounterProvider");
  }
  const { count } = context;
  console.log("DisplayCounter re-rendered");
  return <div>Provider Count: {count}</div>;
};

const IncrementButton: React.FC = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("IncrementButton must be used within a CounterProvider");
  }
  const { setCount } = context;
  console.log("IncrementButton re-rendered");
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
  );
};

const AppUseState: React.FC = () => {
  return (
    <CounterProvider>
      <div className="col-center">
        <DisplayCounter />
        <IncrementButton />
      </div>
    </CounterProvider>
  );
};

export default AppUseState;
