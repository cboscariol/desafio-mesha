import './style.css';

function Header() {
  return (
    <div className='bg-header display-header'>
      <div>
        <button className='btn-check-musics'>Check your list</button>
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

