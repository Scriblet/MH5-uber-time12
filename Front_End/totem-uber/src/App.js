import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Initial from './component';
import QrCode from './component/qr_code';
import PackPlans from './component/packPlans.js'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Initial } />
        <Route exact path="/qr_code" component={ QrCode } />
        <Route exact path="/qr_code/result" component={ PackPlans } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
