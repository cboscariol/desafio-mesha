import './style.css'
import close from '../../assets/close.png'

function SavedMusicList({ onClose }) {
  const dataLocalStorage = localStorage.getItem("MUSICS") || "{}"
  const data = JSON.parse(dataLocalStorage)

  


  return (
    <>
      <div className='shadowModal' onClick={onClose}></div>
      <div className='containerModal'>
        <img className='close-icon' src={close} alt="fechar" onClick={onClose} />
          <h3>Sua lista</h3>
          <ul>
            {Object.entries(data).map(([date, list]) => (
            <li className='music-list'>
              <p>
                {list.gender}
              </p>
            </li>

            ))}
          </ul>
      </div>
    </>
  )
}

export default SavedMusicList
