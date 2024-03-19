import React, { useContext } from 'react'
import { ThemeContext } from '../../App'

function Component02() {

   const {theme,setTheme}= useContext(ThemeContext) 
  
   return (
    <>
    <h2>Component02</h2>
    <button onClick={()=>setTheme('light')}>set To light</button>
    </>
  )
}

export default Component02