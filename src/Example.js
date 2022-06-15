import React, { useContext } from "react";
import { ThemeContext } from './App';



const Example = () => {
  const darkTheme = useContext(ThemeContext);
  console.log(darkTheme)

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#ccc',
    color: darkTheme ? '#ccc' : '#333',
    padding: '2rem',
    margin: '2rem'
  }
  return (
    <div style={themeStyles}>Example</div>
  )
}

export default Example;