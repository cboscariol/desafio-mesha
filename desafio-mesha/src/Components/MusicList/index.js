import './style.css'

function MusicList() {
  return (
    <div className='container-music-list'>
      <h3 className='h3-music-list'>Lista de músicas sugeridas a partir da temperatura</h3>
      <ul>
        <li className='music-list'>
          <p >
            music track
          </p>
        </li>
      </ul>
      <button className='btn-save-musics'>Salvar lista</button>
    </div>
  )
}

export default MusicList
