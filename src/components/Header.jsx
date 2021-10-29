import React from 'react'
import '../styles/Header.css'

const Header = (props) => {
    const { darkMode, toggleTheme } = props;

    return (
        <div className={`${darkMode ? 'Header-dark' : 'Header-light'} d-flex m-4 justify-content-around row`}>
            <div className="col-12 col-sm-8 col-md-9 col-lg-10">
                <h1 className={darkMode ? 'title-dark' : 'title-light'}>React Hooks {'😄'}</h1>
            </div>
            <div className="col-12 col-sm-4 col-md-3 col-lg-2">
                <button className={darkMode ? 'css-button-dark' : 'css-button-light'} type="button" onClick={toggleTheme}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
            </div>
        </div>
    )
}

export default Header
