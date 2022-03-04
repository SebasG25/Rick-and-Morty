import React from 'react'
import useTheme from '../context/useTheme'
import '../styles/Characters.css'

const Loading = () => {
  const { darkMode } = useTheme()

  return (
    <h3 className={`m-0 ${darkMode ? 'dark' : 'light'}`}>Loading...</h3>
  )
}

export default Loading
