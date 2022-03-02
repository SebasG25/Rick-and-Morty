import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react'
import '../styles/Characters.css'
import { animateScroll as scroll } from 'react-scroll';
import InfiniteScroll from 'react-infinite-scroll-component';
import useTheme from '../context/useTheme'
import Card from './Card'
import Loading from './Loading'

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const { darkMode, search } = useTheme()

    useEffect(() => {
        console.log(page)
        fetchData()
    }, [page])

    const fetchData = async () => {
        setIsLoading(true)
        try {
            let { data } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
            setCharacters(prevCharacters => prevCharacters.concat(data.results))
            setHasMore(data.info.next)
        } catch (error) {
            console.error(error.message)
        }
        setIsLoading(false)
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
        <InfiniteScroll
            dataLength={filteredUsers.length}
            next={() => setPage(prevPage => prevPage + 1)}
            hasMore={hasMore}
            loader={<Loading />}
            style={{ overflow: 'hidden' }}
        >
            <div className="Characters p-4">
                <div className="row">
                    {filteredUsers.length === 0 ?
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
        </InfiniteScroll>
    )
}

export default Characters
