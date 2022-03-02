import React from 'react'
import useTheme from '../context/useTheme'
import '../styles/Characters.css'

const Card = ({ id, name, image, status, gender, species, location }) => {
    const { darkMode } = useTheme()

    return (
        <div className={`col-lg-3 col-md-3' col-sm-4 col-6`} key={id}>
            <div className={`card ${darkMode ? 'dark' : 'light'} my-2 box-shadow`} style={{ width: 'auto', height: 'auto' }}>
                <img src={image} className="card-img-top img-fluid" alt="character" />
                <div className="card-body p-0">
                    <div className="card-title pt-2">
                        <h6 className={`${darkMode ? 'character-name-dark' : 'character-name-light'}`}>{name.toUpperCase()}</h6>
                    </div>
                    <div className="card-text">
                        <p className={`m-0 ${darkMode ? 'dark' : 'light'}`}>{`${status === 'Dead' ? '💔'
                            : status === 'Alive' ? '💚' : '💙'} ${status}`}</p>
                        <p className={`m-0 ${darkMode ? 'dark' : 'light'}`}>{`${gender === 'Male' ? '👨' : '👩'} ${gender}`}</p>
                        <p className={`m-0 ${darkMode ? 'dark' : 'light'}`}>{species}</p>
                        <p className={`m-0 ${darkMode ? 'dark' : 'light'}`}><b>Location: </b>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card