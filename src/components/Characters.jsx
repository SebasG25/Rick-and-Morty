import React, { useState, useEffect } from 'react'
import '../styles/Characters.css'

const Characters = (props) => {
    const [characters, setCharacters] = useState([])
    const { darkMode } = props;

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        fetch(`https://rickandmortyapi.com/api/character/`)
            .then(response => response.json())
            .then(data => setCharacters(data.results))
    }

    return (


        <div className="Characters p-4">
            <div className="row">
                {characters.map(character => (
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6" key={character.id}>
                        <div className={`card ${darkMode ? 'dark' : 'light'} my-2 box-shadow`} style={{ width: 'auto', height: 'auto' }}>
                            <img src={character.image} className="card-img-top img-fluid" alt="character" />
                            <div className="card-body p-0">
                                <div className="card-title pt-2">
                                    <h6 className={`${darkMode ? 'character-name-dark' : 'character-name-light'}`}>{character.name.toUpperCase()}</h6>
                                </div>
                                <div className="card-text">
                                    <p className={`m-0 ${darkMode ? 'dark' : 'light'}`}>{`${character.status === 'Dead' ? '💔'
                                        : character.status === 'Alive' ? '💚' : '💙'} ${character.status}`}</p>
                                    <p className={`m-0 ${darkMode ? 'dark' : 'light'}`}>{`${character.gender === 'Male' ? '👨' : '👩'} ${character.gender}`}</p>
                                    <p className={`m-0 ${darkMode ? 'dark' : 'light'}`}>{character.species}</p>
                                    <p className={`m-0 ${darkMode ? 'dark' : 'light'}`}><b>Location: </b>{character.location.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Characters
