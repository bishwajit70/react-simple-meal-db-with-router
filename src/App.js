import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import MealDetail from './Components/MealDetail/MealDetail';
import NotFound from './Components/NotFound/NotFound';
import Restaurent from './Components/Restaurent/Restaurent';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/Restaurent' element={<Restaurent />}></Route>
        <Route path='/meal/:idMeal' element={<MealDetail></MealDetail>}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
