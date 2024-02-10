import React, { createContext, useContext, useState } from "react";

type ContextValue = {
  isDark: boolean,
  togleTheme: () => void
}

export const ThemeContext = createContext({} as ContextValue)

type ProviderProps = {
  children: React.ReactNode;
}

export const ThemeProvider = ({children}:ProviderProps) => {

  const [isDark,setIsDark] = useState(true)

  const togleTheme = () => {
    setIsDark(prev=>!prev)
  }

  return(
    <ThemeContext.Provider value={{
      isDark,
      togleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const UseTheme = () => {
  return useContext(ThemeContext);
}

