import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
//pages and components
import Home from './pages/Home'
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <div className='pages'>
      <Routes>
        <Route
        path="/"
        element={ <Home/>}
        >

        </Route>
      </Routes>
     </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
