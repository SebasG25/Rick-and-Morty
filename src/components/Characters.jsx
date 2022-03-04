import axios from 'axios'
import React, { useState, useEffect, useMemo, useContext } from 'react'
import '../styles/Characters.css'
import { animateScroll as scroll } from 'react-scroll'
import InfiniteScroll from 'react-infinite-scroll-component'
import Card from './Card'
import Loading from './Loading'
import { ThemeContext } from '../App'
import useTheme from '../context/useTheme'
import { AppTheme } from '../AppTheme'


const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const { theme } = useContext(ThemeContext)
  const { search } = useTheme()

  const themeStyle = {
    ...AppTheme.common,
    ...(theme === 'dark' ? AppTheme.dark : AppTheme.light)
  }

  useEffect(() => {
    fetchData()
  }, [page])

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      setCharacters([...characters, ...data.results])
      setHasMore(data.info.next)
    } catch (error) {
      console.error(error.message)
    }
    setIsLoading(false)
  }

  const onClickUp = () => {
    scroll.scrollToTop()
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
      <div className='Characters p-4' style={themeStyle}>
        <div className='row' style={themeStyle}>
          {filteredUsers.length === 0
            ? <h3 className={'m-0'}>No characters found with name: {search}</h3>
            : characters.map(character => (
              <Card
                key={character.id}
                character={character}
                name={character.name}
                image={character.image ?? '../images/noImage.jpeg'}
                status={character.status}
                gender={character.gender}
                species={character.species}
                location={character.location.name}
              />
            ))}
          <button className='up-dark' style={themeStyle} onClick={onClickUp}>^</button>
        </div>
      </div>
    </InfiniteScroll>
  )
}

export default Characters
