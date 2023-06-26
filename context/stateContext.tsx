"use client";

import React, { createContext, useEffect, useState } from "react";

export interface contextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TheContext = createContext<contextType | undefined>(undefined);

const ContextProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TheContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </TheContext.Provider>
  );
};

export { TheContext, ContextProvider };
