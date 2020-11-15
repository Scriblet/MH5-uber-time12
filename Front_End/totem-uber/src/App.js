import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Initial from './component';
import QrCode from './component/qr_code';

const text = `
  solicite\n
  seu UBER\n
  Aqui!!
`;
function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={ Initial } />
      <Route exact path="/qr_code" component={ QrCode } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
