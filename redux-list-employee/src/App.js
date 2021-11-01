import './App.css';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import Home from './screens/home';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store = {store}>

        <Home />

      </Provider>
    </div>
  );
}

export default App;
