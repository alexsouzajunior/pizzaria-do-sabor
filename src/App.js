import Navigation from './components/Navigation/Navigation';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./components/Main/main";
import CardapioPage from './components/Pages/Cardapio/cardapio';
import Footer from './components/Footer/footer';

function App() {
  return (
    <BrowserRouter> 
      <Navigation />
      
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/cardapio" element={<CardapioPage />} />
          </Routes>
      <Footer />
      </BrowserRouter>
    
  )
}

// createRoot(document.getElementById('root')).render(
//   <App />
// )
export default App;