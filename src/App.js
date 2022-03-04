import React, { useState } from 'react'
import Characters from './components/Characters'
import Header from './components/Header'
import useTheme from './context/useTheme'
import './App.css'
import { AppTheme } from './AppTheme'
export const ThemeContext = React.createContext({})

function App() {
  const { darkMode, toggleTheme, onSearchChangeHandler, search } = useTheme()
  const [theme, setTheme] = useState('dark')

  const themeStyle = {
    ...AppTheme.common,
    ...(theme === 'dark' ? AppTheme.dark : AppTheme.light)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${darkMode ? 'dark' : 'light'} container-fluid p-4`} style={themeStyle}>
        <Header onSearchChangeHandler={onSearchChangeHandler} search={search} />
        <Characters search={search} />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
