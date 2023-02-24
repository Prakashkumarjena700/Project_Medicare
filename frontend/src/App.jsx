import "./App.css";
import Footer from "./Components/Footer/Footer";
import CategoryBar from "./Components/Navbar/CategoryBar";
import Navbar from "./Components/Navbar/Navbar";


import AllRoutes from "./Router/AllRoutes";

function App() {
  return (
    <div className="App">

     <Navbar/>
       <CategoryBar/>
        <AllRoutes />


    </div>
  );
}

export default App;
