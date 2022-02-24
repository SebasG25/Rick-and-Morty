import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react'
import '../styles/Characters.css'
import { animateScroll as scroll } from 'react-scroll';
import useTheme from '../context/useTheme'
import Card from './Card'

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { darkMode, search } = useTheme()
    const arrayOfCharacters = []

    useEffect(() => {
        loadAllCharacters()
        fetchData()
    }, [])

    const fetchData = async () => {
        setIsLoading(true)
        for (let i = 1; i <= 4; i++) {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${arrayOfCharacters}`)
            setCharacters(response.data)
        }
        setIsLoading(false)
    }

    const loadAllCharacters = () => {
        for (let i = 1; i <= 50; i++) {
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
                {isLoading ? <h3 className={`m-0 ${darkMode ? 'dark' : 'light'}`}>Loading...</h3>
                    : filteredUsers.length === 0 ?
                        <h3 className={`m-0 ${darkMode ? 'dark' : 'light'}`}>No characters found with name: {search}</h3>
                        : filteredUsers.map(character => (
                            <Card 
                            id={character.id} 
                            name={character.name}
                            image={character.image}
                            status={character.status}
                            gender={character.gender}
                            species={character.species}
                            location={character.location.name}
                            />
                        ))
                }
                <button className={`up-${darkMode ? 'dark' : 'light'}`} onClick={onClickUp}>^</button>
            </div>
        </div>
    )
}

export default Characters
