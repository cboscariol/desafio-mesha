
import './App.css';
import  Header  from './Components/Header'
import Weather from './Components/Weather';
import MusicList from './Components/MusicList';
import WeatherProvider from '../src/context/WeatherContext'

function App() {
  return (
    
    <WeatherProvider>
      <Header/>
      <Weather/>
      <MusicList/>
    </WeatherProvider>
  );
}

export default App;
