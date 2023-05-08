import logo from './logo.svg';
import './App.css';
import Componenteb from './components/componente-b';
//import componenteA from '../../forms/componente-a';

function App() {

  const contacto_p = {
    nombre: 'Luis Felipe',
    apellido: 'Hernandez Ortiz',
    email: 'ortizddee2356@gmail.com',
    conectado: false,
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Componenteb contacto_p={contacto_p}></Componenteb>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
