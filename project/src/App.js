import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarDes from './components/Navbar.jsx';
import LeftSidebar from './components/LeftSidebar.jsx';
import RightSidebar from './components/RightSidebar.jsx';

function App() {
  return (
    <>
      <NavbarDes/>
      <div className='Maindiv'>
        <div><LeftSidebar/></div>
        <div><RightSidebar/></div>
      </div>   
    </>
  );
}

export default App;
