import girlQr from './img/Mulher_Celular.svg';
import './App.css';

const text = `
  solicite\n
  seu UBER\n
  Aqui!!
`;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="text-header">
          <h1 className="text-title">{text}</h1>
        </div>
        <div className="App-body">
          <img className="img-body" src={girlQr} alt="girl QR code"></img>
          <div className="text-btn-body">
            <h1 className="text-body">Viagem particular<br />a um preço<br />acessível</h1>
            <button className="btn_solicite">Solicitar agora</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
