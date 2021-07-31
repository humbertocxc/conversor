import './app.scss';
import Conversor from "./components/Conversor";

function App() {
  return (
    <div className="app">
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
    </div>
  );
}

export default App;
