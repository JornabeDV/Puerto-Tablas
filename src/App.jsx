import './style.css';
import NavBar from './components/header/NavBar'; 
import ContainerCardItems from './components/components Item/ContainerCardItems';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailsItem from './components/components item/DetailsItem';

function App () {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path= '/' element = { <ContainerCardItems/> } />
        <Route path= '/item/:idtem' element = { <DetailsItem/> } />
        <Route path= '/category/:idCategory' element = { <ContainerCardItems/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

