import './App.css';
import Forecast from './components/Forecast';
import Weather from './components/Weather';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Weather />}> </Route>
          <Route path='/forecast' element={<Forecast />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
