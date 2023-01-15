import { BrowserRouter, Routes,Route } from "react-router-dom";
import "./App.css";
import Derivative from "./pages/Derivative";
import Underlying from "./pages/Underlying";

function App() {
  return (
    // <div>
    //   <h2>Websocket page</h2>
    //   <Underlying />
    // </div>
    <div>
      <BrowserRouter>
        <Routes>
          <Route 
          path='/' 
          element={<Underlying />}
          />
          <Route 
          path='/derivatives' 
          element={<Derivative />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
