import { Link } from 'react-router-dom';
import girlQr from '../img/Mulher_Celular.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="text-header">
          <h1 className="text-title">Solicite<br />seu UBER<br />Aqui!!</h1>
        </div>
        <div className="App-body">
          <img className="img-body" src={girlQr} alt="girl QR code"></img>
          <div className="text-btn-body">
            <h1 className="text-body">Viagem particular<br />a um preço<br />acessível</h1>
            <Link to={{ pathname: '/qr_code' }}><button className="btn_solicite">Solicitar agora</button></Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
