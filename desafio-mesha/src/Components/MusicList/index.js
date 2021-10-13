import './style.css'
import { useState, useContext, useEffect } from 'react'
import { WeatherContext } from '../../context/WeatherContext'
import { getMusics } from '../../services'

function MusicList() {
  const { weather } = useContext(WeatherContext)
  const [musicList, setMusicList] = useState([])


  const getMusicList = async(gender) => {
   const response =  await getMusics(gender) 
   const musics = response.tracks.hits
   setMusicList(musics)
  }

  const saveMusicList = () => {
    console.log("teste")
    const currentStorageMusics = localStorage.getItem('MUSICS') || '{}'
    const gender = getMusicGender(weather.main.temp)
    const dataSaveStore = {
      [new Date()]: {
        gender,
        musics: musicList,
        city: weather.name,
        temp: weather.main.temp
      },
      ...JSON.parse(currentStorageMusics),
   }

   localStorage.setItem('MUSICS', JSON.stringify(dataSaveStore))
   console.log(dataSaveStore)
  }


  useEffect(() => {
    if(weather){
      const gender = getMusicGender(weather.main.temp)
      getMusicList(gender)
    }
  }, [weather])

  useEffect(() => {
    console.log(musicList)
  }, [musicList])


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
      
      {musicList.map(music => (
      <ul>
        <li className='music-list'>
          <a href={music.track.share.href}>{music.track.title}</a>
        </li>
      </ul>
       )
      )} 
     <button className='btn-save-musics' disabled={!musicList.length} onClick={saveMusicList}>Salvar lista</button>
    </div>
  )
}

export default MusicList
