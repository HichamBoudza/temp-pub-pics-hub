import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const userPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [isDarkTheme, setIsDarkTheme] = useState(userPreference);
  const [searchValue, setSearchValue] = useState("cats");
  // const [searchTerm, SetSearchTerm] = useState('cats');
  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  //   window
  //     .matchMedia("(prefers-color-scheme: dark)")
  //     .addEventListener("change", ({ matches }) => {
  //       if (matches) {
  //         console.log("change to dark mode!");
  //       } else {
  //         console.log("change to light mode!");
  //       }
  //     });
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);
  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        toggleDarkTheme,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);
