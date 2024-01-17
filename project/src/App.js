import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LeftSidebar from "./components/LeftSidebar.jsx";
import RightSidebar from "./components/RightSidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import { Card } from "./components/card.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="Maindiv">
        <LeftSidebar />
        <div className="col"><Card /></div>
        <RightSidebar />
      </div>
    </>
  );
}

export default App;
