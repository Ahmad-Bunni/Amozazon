import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavbarMenu from './common/navbar-menu/NavbarMenu';
import Routing from './Routing';

function App() {
  return (
    <BrowserRouter>
      <NavbarMenu />
      <Routing />
    </BrowserRouter>
  );
}
export default App;
