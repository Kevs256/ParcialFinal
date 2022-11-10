import { BrowserRouter, Route, Routes } from "react-router-dom";
import navbar from "./componentes/navbar";
import carR from "./paginas/cartR";
import indexR from "./paginas/indexR";
import searchR from "./paginas/searchR";




function App(){
    return(
      <div className="App">
        <Router>
            <Navbar/>
        </Router>
      </div>  
    );
}

export default App;