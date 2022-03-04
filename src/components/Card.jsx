import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import { AppTheme } from '../AppTheme'
import styles from '../styles/Card.module.css'

const Card = ({ id, character }) => {
  const { name, image, status, gender, species, location } = character
  const { theme } = useContext(ThemeContext)

  const themeStyle = {
    ...AppTheme.common,
    ...(theme === 'dark' ? AppTheme.dark : AppTheme.light)
  }

  return (
    <div className='col-lg-3 col-md-3 col-sm-4 col-6' key={id}>
      <div className='card my-2 box-shadow position-relative' style={{ width: 'auto', height: 'auto', ...themeStyle }}>
        <img src={image} className={`${styles.image} card-img-top img-fluid`} alt='character' />
        <div className='card-body p-0'>
          <div className='card-title pt-2'>
            <h6 style={themeStyle}>{name.toUpperCase()}</h6>
          </div>
          <div className='card-text'>
            <p className='m-0' style={themeStyle}>{`${status === 'Dead'
              ? '💔'
              : status === 'Alive' ? '💚' : '💙'} ${status}`}
            </p>
            <p className='m-0' style={themeStyle}>{`${gender === 'Male' ? '👨' : '👩'} ${gender}`}</p>
            <p className='m-0' style={themeStyle}>{species}</p>
            <p className='m-0' style={themeStyle}><b>Location: </b>{location.name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
