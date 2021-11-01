import { useState, createContext } from 'react'

export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(true)
    const [search, setSearch] = useState('')

    const toggleTheme = () => {
        setDarkMode(!darkMode)
    }

    const onSearchChangeHandler = (event) => {
        setSearch(event.target.value)
    }

    const contextValue = {
        darkMode,
        search,
        toggleTheme,
        onSearchChangeHandler,
    }

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}
