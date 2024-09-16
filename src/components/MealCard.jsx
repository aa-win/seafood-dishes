import React from 'react';

// MealCard component displays meal info and a button to view details
const MealCard = ({ meal, onViewDetails }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm mx-auto hover:shadow-lg transition-shadow duration-300">
            {/* Meal image */}
            <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="rounded-md mb-4 w-full h-40 object-cover"
            />
            {/* Meal name */}
            <h2 className="text-lg font-semibold mb-2 text-center truncate">{meal.strMeal}</h2>
            {/* View details button */}
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200 block mx-auto"
                onClick={() => onViewDetails(meal.idMeal)}
            >
                View Details
            </button>
        </div>
    );
};

export default MealCard;
