import './style.css';
import { useState } from 'react'
import SavedMusicList from '../SavedMusicList';
import {getWeather} from '../../services'


function Header() {
  const [openModal, setOpenModal] = useState(false)
  const [value, setValue] = useState({local: ''})
  const [weather, setWeather] = useState()

  const handleModal = () => {
    setOpenModal(true)
  }

  const handleClose = () => {
    setOpenModal(false)
  }

   const handleSubmit = (event) => {
   event.preventDefault();
   getWeatherData()
 }

  const handleChange = (event) => {
   setValue({ ...value, [event.target.name]: event.target.value })
 }

 const getWeatherData = async () => {
		const result = await getWeather(value.local)
    setWeather(result)
    console.log(result)
		
	}



  return (
    <div className='bg-header display-header'>
      {openModal && <SavedMusicList onClose={handleClose}/>}
      <div>
        <button className='btn-check-musics' onClick={handleModal}>Sua lista</button>
      </div>
      <div className='header-container'>
        <h1 className='h1-header'>Busque a temperatura da sua cidade preferida</h1>
        <form type='submit' onSubmit={handleSubmit}>
          <input 
          className='input-search' 
          type="text" 
          placeholder='Cidade'
          name='local'
          onChange={ handleChange }
          />
        </form>
        
      </div>
    </div>
  )
}

export default Header

