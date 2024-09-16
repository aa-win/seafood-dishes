import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

// Component to display details of a selected meal
const MealDetails = () => {
    const { idMeal } = useParams(); // Get the meal ID from URL
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMealDetails = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
                setMeal(response.data.meals[0]);
            } catch (error) {
                console.error('Error fetching meal details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMealDetails();
    }, [idMeal]);

    if (loading) {
        return <div className="text-center text-xl font-semibold text-gray-700">Loading details...</div>;
    }

    if (!meal) {
        return <div className="text-center text-xl font-semibold text-gray-700">Meal not found</div>;
    }

    return (
        <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
            {/* Back to Meals Button */}
            <Link to="/" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg mb-6 hover:bg-blue-800 transition-transform transform hover:scale-105">
                Back to Meals
            </Link>

            <div className="flex flex-col md:flex-row items-center p-6 space-y-4 md:space-y-0 md:space-x-8">
                {/* Meal Image */}
                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-full md:w-1/3 h-64 md:h-auto object-cover rounded-lg shadow-md"
                />

                <div className="flex flex-col md:flex-1">
                    <div className="text-center md:text-left mb-6">
                        <h2 className="text-4xl font-bold mb-4 text-gray-800">{meal.strMeal}</h2>
                        <p className="mb-2 text-lg text-gray-600"><strong>Category:</strong> {meal.strCategory}</p>
                        <p className="mb-4 text-lg text-gray-600"><strong>Area:</strong> {meal.strArea}</p>
                        <div className="text-gray-700 leading-relaxed">
                            <strong className="text-xl">Instructions:</strong>
                            <p className="mt-2 text-base">{meal.strInstructions}</p>
                        </div>
                    </div>

                    {/* YouTube link */}
                    <a
                        href={meal.strYoutube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center md:justify-start text-red-600 hover:text-red-700 transition-colors space-x-2"
                    >
                        {/* YouTube icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M23.498 6.186c-.289-1.086-1.143-1.94-2.229-2.23C19.376 3.416 12 3.416 12 3.416s-7.376 0-9.269.54C1.646 4.246.792 5.1.503 6.186.001 7.76.001 12 .001 12s0 4.24.502 5.814c.289 1.086 1.143 1.94 2.229 2.23 1.893.54 9.269.54 9.269.54s7.376 0 9.269-.54c1.086-.29 1.94-1.144 2.229-2.23.502-1.574.502-5.814.502-5.814s0-4.24-.502-5.814zm-13.498 9.108v-6.588l5.916 3.294-5.916 3.294z" />
                        </svg>
                        <span className="text-lg">Watch on YouTube</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MealDetails;
