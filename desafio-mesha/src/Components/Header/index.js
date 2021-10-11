import './style.css';
import { useState } from 'react'
import SavedMusicList from '../SavedMusicList';


function Header() {
  const [openModal, setOpenModal] = useState(false)

  const handleModal = () => {
    setOpenModal(true)
  }

  const handleClose = () => {
    setOpenModal(false)
  }

  return (
    <div className='bg-header display-header'>
      {openModal && <SavedMusicList onClose={handleClose}/>}
      <div>
        <button className='btn-check-musics' onClick={handleModal}>Sua lista</button>
      </div>
      <div className='header-container'>
        <h1 className='h1-header'>Busque a temperatura da sua cidade preferida</h1>
        <input 
        className='input-search' 
        type="text" 
        placeholder='Cidade'
        />
      </div>
    </div>
  )
}

export default Header

