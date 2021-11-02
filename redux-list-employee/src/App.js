import './App.css';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import Home from './screens/home';
import User from './screens/user';
const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store = {store}>

        <Home />

        <User />

      </Provider>
    </div>
  );
}

export default App;
