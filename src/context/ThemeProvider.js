import { useState, createContext } from 'react'

export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(true)

    const toggleTheme = () => {
        setDarkMode(!darkMode)
    }

    const contextValue = {
        darkMode,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}
