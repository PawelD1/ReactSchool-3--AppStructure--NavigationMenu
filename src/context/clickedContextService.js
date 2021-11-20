import React, { createContext, useState } from 'react';

export const ClickedContext = createContext();

export const ClickedContextProvider = ({ children }) => {
  const [isActive, setIsActive] = useState("");

  return (
    <ClickedContext.Provider
      value={{
        isActive,
        setIsActive
      }}
    >
      {children}
    </ClickedContext.Provider>
  );
};