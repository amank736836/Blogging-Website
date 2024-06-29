import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import authService from "./appwrite/auth";
import { Header, Footer, InitialLoader } from "./components/index.js";
import { login, logout } from "./store/authSlice";
import { ThemeContextProvider } from "./hooks/useTheme.js";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  
  useEffect(() => {
    authService
    .getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
    })
    .finally(() => setLoading(false));
  }, []);
  
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("themeMode") || "light"
  );
  
  useEffect(() => {
    document.documentElement.className = themeMode;
    // document.documentElement.setAttribute("data-theme", themeMode);
    // document.documentElement.dataset.theme = themeMode;
    // document.querySelector("html").classList.remove("dark", "light");
    // document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    const newThemeMode = themeMode === "light" ? "dark" : "light";
    localStorage.setItem("themeMode", newThemeMode);
    setThemeMode(newThemeMode);
  };

  return (
    <>
      <ThemeContextProvider value={{ themeMode, toggleTheme }}>
        {loading ? (
          <InitialLoader />
        ) : (
          <div className="flex flex-wrap content-between min-h-screen text-center bg-gray-100 dark:bg-gray-900">
            <div className="block w-full">
              <Header />
              <main className="h-4/">
                {/* TODO :  */}
                <Outlet />
              </main>
                <Footer />
            </div>
          </div>
        )}
      </ThemeContextProvider>
    </>
    // <div>Loading...</div>
  );
}

export default App;