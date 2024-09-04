import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Modal = ({ recipeId, closeModal }) => {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/recipes/${recipeId}`);
                setRecipe(response.data);
            } catch (error) {
                console.error('Error fetching recipe details:', error);
            }
        };

        fetchRecipeDetails();
    }, [recipeId]);

    if (!recipe) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="bg-white overflow-y-auto max-h-[90vh] w-full max-w-3xl p-6 rounded-md shadow-lg relative">
            <button onClick={closeModal} className="absolute top-2 right-4 text-black text-4xl hover:text-gray-600">
                &times;
            </button>
            <h1 className="text-2xl font-semibold uppercase mb-4">{recipe.name}</h1>
            <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-md mb-4" />
            <div className="flex w-full justify-between">
                <p className="font-semibold text-gray-700">Ingredients :</p>
                <p>🕒 {recipe.cookTimeMinutes} minutes</p>
            </div>
            <ul className="bg-[#fefae0] my-4 rounded-md text-center py-4 px-8 flex justify-start items-center flex-wrap gap-2">
                {recipe?.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-white p-2 rounded-md border-none bg-[#283618]">{ingredient}</li>
                ))}
            </ul>
            <p className="font-semibold text-gray-700">Instructions :</p>
            <div className="bg-[#e9edc9] my-4 rounded-md text-left py-4 px-8">
                <p className="text-black tracking-wide leading-8 p-2 rounded-md border-none">{recipe.instructions}</p>
            </div>
            <p className="font-semibold text-gray-700">Tags :</p>
            <div className="bg-[#d8e2dc] my-4 rounded-md text-center py-4 px-8 flex justify-start items-center flex-wrap gap-2">
            {recipe?.tags.map((tag, index) => (
                    <p key={index} className="text-white p-2 rounded-md border-none bg-[#283618]"># {tag}</p>
                ))}
            </div>
        </div>
    </div>
    );
};

export default Modal;
