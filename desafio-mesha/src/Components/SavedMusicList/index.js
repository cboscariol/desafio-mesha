import './style.css'
import close from '../../assets/close.png'

function SavedMusicList({ onClose }) {
  return (
    <>
      <div className='shadowModal' onClick={onClose}></div>
      <div className='containerModal'>
        <img className='close-icon' src={close} alt="fechar" onClick={onClose} />
          <h3>Sua lista</h3>
          <ul>
            <li className='music-list'>
              <p>
                music track
              </p>
            </li>
          </ul>
      </div>
    </>
  )
}

export default SavedMusicList
