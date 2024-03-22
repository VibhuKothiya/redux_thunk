
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AddUser from './pages/AddUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        {/* <Route path='/AddUser' exact element={<AddUser/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
