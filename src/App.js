import { Provider } from 'react-redux';
import './App.css';
import Greeting from './components/Greeting';

import store from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Greeting />
    </div>
    </Provider>
  );
}

export default App;
