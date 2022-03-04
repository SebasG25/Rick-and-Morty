import React, { useState, useContext } from 'react'
import useTheme from '../context/useTheme'
import styles from '../styles/Header.module.css'
import Switch from 'react-switch'
import { ThemeContext } from '../App'
import { AppTheme } from '../AppTheme'

const Header = () => {
  const { darkMode, toggleTheme, onSearchChangeHandler, search } = useTheme()
  const { theme, setTheme } = useContext(ThemeContext)

  const handleSwitchChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const themeStyle = {
    ...AppTheme.common,
    ...(theme === 'dark' ? AppTheme.dark : AppTheme.light)
  }

  return (
    <div className='d-flex m-4 justify-content-around row' style={themeStyle}>
      <div className='col-12 col-sm-7 col-md-9 col-lg-10' style={{ width: 'fit-content' }}>
        <div className='d-flex'>
          <h1 className={`${styles.header}`}>Using React Hooks</h1>
          <h1>😄</h1>
        </div>
      </div>
      <div className='col-12 col-sm-1 col-md-1 col-lg-1 align-self-center'>
        <input
          type='text' className={`${styles.input}`} value={search} placeholder='Search a character'
          onChange={onSearchChangeHandler} maxLength='30'
        />
      </div>
      <div className='col-12 col-sm-4 col-md-2 col-lg-1 align-self-center'>
        <Switch
          onChange={handleSwitchChange}
          onColor={'#eee'}
          checkedIcon='☀️'
          uncheckedIcon='🌑'
          checked={theme === 'light'} />
      </div>
    </div>
  )
}

export default Header
