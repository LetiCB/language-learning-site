import React, { createContext, useContext, useState } from "react";

type ProgressContextType = {
  correctItems: number;
  placedItems: string[];
  totalItems: number;
  addCorrectItem: () => void;
  addPlacedItem: (id: string) => void;
  setTotalItems: (total: number) => void;
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [correctItems, setCorrectItems] = useState(0);
  const [placedItems, setPlacedItems] = useState<string[]>([]);
  const [totalItems, setTotalItems] = useState(0);

  const addCorrectItem = () => setCorrectItems((prev) => prev + 1);
  const addPlacedItem = (id: string) => setPlacedItems((prev) => [...prev, id]);

  return (
    <ProgressContext.Provider
      value={{
        correctItems,
        placedItems,
        totalItems,
        addCorrectItem,
        addPlacedItem,
        setTotalItems,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) throw new Error("useProgress must be used within a ProgressProvider");
  return context;
};
