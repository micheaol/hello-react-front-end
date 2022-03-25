import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Greeting from './components/Greeting';

import store from './redux/store/store';


function App() {
  return (
    <Provider store={store}>
     <Router>
          <Routes>
            <Route exact path="/" element={<Greeting />} />
          </Routes>
        </Router>
    </div>
    </Provider>
  );
}

export default App;
