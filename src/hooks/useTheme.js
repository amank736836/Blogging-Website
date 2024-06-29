import React, { createContext, useContext } from "react";

const initialThemeMode = localStorage.getItem("themeMode") || "light";

export const ThemeContext = createContext({
  themeMode: initialThemeMode,
  toggleTheme: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;
//  ({ children }) => {
//   const [themeMode, setThemeMode] = React.useState(initialThemeMode);

//   const toggleTheme = () => {
//     const newThemeMode = themeMode === "light" ? "dark" : "light";
//     localStorage.setItem("themeMode", newThemeMode);
//     setThemeMode(newThemeMode);
//   };

//   return (
//     <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

export default function useTheme(){
  return useContext(ThemeContext)
}