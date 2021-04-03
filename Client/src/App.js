import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header'
import { BrowserRouter as  Route } from 'react-router-dom';
import Maincover from './components/maincover/maincover';
import SearchBar from './components/search/search';

function App() {

return (
  <div>
  <div className="maindiv">
  <Header/>
  <Maincover/>
  <Footer/>
  </div>
  </div>
 )
}

export default App;
