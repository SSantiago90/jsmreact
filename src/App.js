import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Us from './pages/us'



function App() {
  return (
    <div>
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/Us" element = {<Us />}/>
      <Route path="/Shop" element={<ItemListContainer />} />
      <Route path="/category/:categoryid" element={<ItemListContainer />} />
      <Route path="/product/:itemid" element={<ItemDetailContainer />} />
    </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
