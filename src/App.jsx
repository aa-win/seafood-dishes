import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Meals from './components/Meals';
import MealDetails from './components/MealDetails';

// Main app component with routing
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the meals list */}
        <Route path="/" element={<Meals />} />
        {/* Route for meal details */}
        <Route path="/meals/:idMeal" element={<MealDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
