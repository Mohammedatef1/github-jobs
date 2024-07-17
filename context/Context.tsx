"use client";
import { createContext, ReactNode, useState } from "react";

type ContextType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  fulltime: boolean;
  setFulltime: React.Dispatch<React.SetStateAction<boolean>>;
};

const Context = createContext<ContextType | undefined>(undefined);

type ContextProviderProps = {
  children: ReactNode;
};

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [fulltime, setFulltime] = useState(false);

  return <Context.Provider value={{ count, setCount, query, setQuery, location, setLocation, fulltime, setFulltime }}>{children}</Context.Provider>;
};

export default Context;
