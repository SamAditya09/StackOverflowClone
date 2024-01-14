import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavbarDes from './components/Navbar.jsx';
import LeftSidebar from './components/LeftSidebar.jsx';
import RightSidebar from './components/RightSidebar.jsx';
import Navbar from './components/Navbar.jsx';
import { Card } from './components/card.jsx';

function App() {
  return (
    <>
      {/* <NavbarDes/> */}
      <Navbar/>
      <div className='Maindiv'>
        <div><LeftSidebar/></div>
        <div><RightSidebar/></div>
      </div>   
      <Card/>
    </>
  );
}

export default App;
