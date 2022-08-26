import './App.scss';
import Home from './Components/Home';
import Header from './Components/Header';
import Inside from './Components/Inside';
import Name from './Components/Name';
import Character from './Components/Character';
import Create from './Components/Create';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/app" element={<Inside />} />
        <Route exact path="/app/anime" element={<Name />} />
        <Route exact path="/app/character" element={<Character />} />
        <Route exact path="/app/createNewQuote" element={<Create />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
