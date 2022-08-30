import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
    const [linea1, setLinea1] = useState('');
    const [linea2, setLinea2] = useState('');
    const [imagen, setImagen] = useState('');

    const onChangeLinea1 = function (evento) {
      setLinea1(evento.target.value)
    }

    const onChangeLinea2 = function (evento) {
      setLinea2(evento.target.value)
    } 

    const onChangeImagen = function (evento) {
      setImagen(evento.target.value)
    } 





  return (
    <div className="App">
    <select onChange={onChangeImagen}>
      <option value="futurama">Futurama</option>
      <option value="dinosaurio">dinosaurio</option>
      <option value="smartguy">Smart Guy</option>
      <option value="aliens">History</option>
      <option value="nenaenllamas">Nena en llamas</option>
      <option value="dicaprio">Di Caprio</option>
    </select><br/>
    <input onChange={onChangeLinea1} type="text" placeholder='Linea 1'/> <br/>
    <input onChange={onChangeLinea2}  type="text" placeholder='Linea 2'/> <br/>
    <button>Exportar</button>
    <div className='meme'>
      <span>{linea1}</span><br/>
      <span>{linea2}</span>
      <img src={'/img/'+ imagen +'.jpg'} alt='meme'/>
    </div>
    
    
    </div>
  );
}

export default App;
