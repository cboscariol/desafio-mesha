import './style.css'
import { useState } from 'react'
import close from '../../assets/close.png'
import music from '../../assets/music.svg'
import trash from '../../assets/trash.svg'

function SavedMusicList({ onClose }) {
  const [dataLocalStorage, setDataLocalStorage] = useState(localStorage.getItem("MUSICS"))
  const data = JSON.parse(dataLocalStorage || "{}")



  const deleteDataLocalStorage = () => {
    setDataLocalStorage(null)
    localStorage.removeItem("MUSICS")
  }

  return (
    <>
      <div className='shadowModal' onClick={onClose}></div>
      <div className='containerModal'>
        <img className='close-icon' src={close} alt="fechar" onClick={onClose} />
          <h3>Sua lista <img src={music} alt="icone-nota-musical" /></h3>
            {dataLocalStorage && <button onClick={deleteDataLocalStorage}  type="button" class="btn btn-outline-danger delete-btn">Deletar seleção musical <img src={trash} alt="" /></button>}            {Object.entries(data).map(([date, list]) => (
             <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    {date.slice(4, -38)}
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse hide" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p> Cidade buscada: {list.city}</p>
                    <p> Temperatura : {list.temp} ºC</p>
                    <p> Gênero musical: {list.gender}</p>
                    <p> Lista de músicas sugeridas:</p>
                    <ul>
                        {list.musics.map((music) => (
                          <li>
                            {music.track.title}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            ))}
         
      </div>
    </>
  )
}

export default SavedMusicList
