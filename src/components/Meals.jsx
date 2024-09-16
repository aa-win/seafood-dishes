import { useState, useEffect } from 'react';
import axios from 'axios';
import MealCard from './MealCard';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';

// Component to display a list of seafood dishes
const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
                setMeals(response.data.meals);
            } catch (error) {
                console.error('Error fetching meals:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMeals();
    }, []);

    const handleViewDetails = (idMeal) => {
        navigate(`/meals/${idMeal}`);
    };

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Seafood Dishes</h1>
            {loading ? (
                <Loading />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {meals.map((meal) => (
                        <MealCard key={meal.idMeal} meal={meal} onViewDetails={handleViewDetails} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Meals;
