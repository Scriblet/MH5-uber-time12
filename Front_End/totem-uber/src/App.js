import girlQr from './img/Mulher_Celular.svg';
import './App.css';
import btn_solicite from './components/btn_solicite';
const text = `
  solicite\n
  seu UBER\n
  Aqui!!
`
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="text-header">
          <p>{text}</p>
        </div>
        <div>
          <img src={girlQr} alt="girl QR code"></img>
          <btn_solicite />
        </div>
      </header>
    </div>
  );
}

export default App;
