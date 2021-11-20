import './App.css';
import {Menu} from './components/menu/Menu';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="*" element={<Menu/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;