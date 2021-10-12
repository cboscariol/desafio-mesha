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
            {Object.entries(data).map(([date, list]) => (
             <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    {date}
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    {list.gender}
                    {list.city}
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
