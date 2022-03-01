import React from 'react'
import useTheme from '../context/useTheme'
import '../styles/Header.css'

const Header = () => {
    const { darkMode, toggleTheme, onSearchChangeHandler, search } = useTheme()

    return (
        <div className={`${darkMode ? 'Header-dark' : 'Header-light'} d-flex m-4 justify-content-around row`}>
            <div className="col-12 col-sm-7 col-md-9 col-lg-10" style={{width: 'fit-content'}}>
                <h1 className={`${darkMode ? 'title-dark' : 'title-light'}`}>React Hooks {'😄'}</h1>
            </div>
            <div className="col-12 col-sm-1 col-md-1 col-lg-1 align-self-center">
                <input type="text" className="input" value={search} placeholder='Search a character hola bbsito' 
                onChange={onSearchChangeHandler} maxLength='30'/>
            </div>
            <div className="col-12 col-sm-4 col-md-2 col-lg-1">
                <button className={darkMode ? 'css-button-dark' : 'css-button-light'} type="button" onClick={toggleTheme}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
            </div>
        </div>
    )
}

export default Header
