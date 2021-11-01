import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react'
import '../styles/Characters.css'
import { animateScroll as scroll } from 'react-scroll';

const Characters = (props) => {
    const [characters, setCharacters] = useState([])
    const { darkMode, search } = props;
    const arrayOfCharacters = []

    useEffect(() => {
        loadAllCharacters();
        fetchData();
    }, [])

    const fetchData = async () => {
        for (let i = 1; i <= 4; i++) {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${arrayOfCharacters}`)
            setCharacters(response.data)
        }
    }

    const loadAllCharacters = () => {
        for (let i = 1; i <= 671; i++) {
            arrayOfCharacters.push(i);
        }
    }

    const onClickUp = () => {
        scroll.scrollToTop();
        setCharacters(filteredUsers)
    }

    const filteredUsers = useMemo(() =>
        characters.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase())
        })
        ,
        [characters, search]
    )

    return (
        <div className="Characters p-4">
            <div className="row">
                {filteredUsers.length === 0 ?
                    <h3 className={`m-0 ${darkMode ? 'dark' : 'light'}`}>No characters found with name: {search}</h3>
                    :filteredUsers.map(character => (
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
                    ))
                }
                <button className={`up-${darkMode ? 'dark' : 'light'}`} onClick={onClickUp}>^</button>
            </div>


        </div>
    )
}

export default Characters
