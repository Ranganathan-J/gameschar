import { useEffect, useState } from "react";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    setTheme(localStorage.getItem('theme'))
  },[])
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div className={`${theme} ${theme === "dark" ? "bg-slate-900" : null} min-h-[100vh]`} >
      <Header />
      <Home />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
