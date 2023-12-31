/*Dependencies*/
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/detail/:id' element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
