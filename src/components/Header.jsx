import React from 'react'
import '../styles/Header.css'

const Header = (props) => {
    const { darkMode, toggleTheme } = props;

    return (
        <div className={`${darkMode ? 'Header-dark' : 'Header-light'} d-flex m-4 justify-content-around`}>
            <h1 className={darkMode ? 'title-dark':'title-light'}>React Hooks {'😄'}</h1>
            <button className={darkMode ? 'css-button-dark' : 'css-button-light'} type="button" onClick={toggleTheme}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
        </div>
    )
}

export default Header
