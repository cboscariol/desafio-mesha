import './style.css'
import { useState, useContext, useEffect } from 'react'
import { WeatherContext } from '../../context/WeatherContext'
import { getMusics } from '../../services'

function MusicList() {
  const { weather } = useContext(WeatherContext)
  const [musicList, setMusicList] = useState([])

  const getMusicList = async(gender) => {
   const response =  await getMusics(gender) 
   setMusicList(response.tracks.hits)
   console.log(response)
  }


  useEffect(() => {
    if(weather){
      const gender = getMusicGender(weather.main.temp)
      getMusicList(gender)
    }
  }, [weather])


 const getMusicGender = (weather) => {
    if (weather > 35) {
        return "Rock"
    }
    if (weather > 24) {
      return "Pop"
    }
    if (weather > 16) {
      return "Classica"
    }
     if (weather < 16) {
      return "Lofi"
    }

  }

  return (
    <div className='container-music-list'>
      <h3 className='h3-music-list'>Lista de músicas sugeridas a partir da temperatura</h3>
      
      {musicList.length && musicList.map(music => (
      <ul>
        <li className='music-list'>
          <p>
            {music.track.title}
          </p>
        </li>
      </ul>
       )
      )} 
      
      <button className='btn-save-musics'>Salvar lista</button>
    </div>
  )
}

export default MusicList
