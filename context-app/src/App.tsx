import { createContext, useState } from "react"
import Component01 from "./components/Component01"
import Component02 from "./components/Component02"


export const ThemeContext = createContext<{ theme: string; setTheme: React.Dispatch<React.SetStateAction<string>>; }>(null!)

function App() {
  const [theme,setTheme]=useState("dark")
  
  return (
    <>
    <ThemeContext.Provider value={{theme,setTheme}}>

      <h1>Context</h1>
      <h2>{theme}</h2>
      <Component01/>
      <Component02/>
     </ThemeContext.Provider>
    </>
  )
}

export default App
