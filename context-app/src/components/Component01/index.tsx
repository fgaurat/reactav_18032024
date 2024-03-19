import React, { useContext } from 'react'
import { ThemeContext } from '../../App'

function Component01() {

   const {theme,setTheme}= useContext(ThemeContext) 
  
   return (
    <>
    <h2>Component01</h2>
    {theme}
    </>
  )
}

export default Component01