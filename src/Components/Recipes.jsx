import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import Modal from './Modal';

const Recipes = ({ searchQuery }) => {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipeId, setSelectedRecipeId] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/recipes/search?q=${searchQuery}`);
                setRecipes(response.data.recipes);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, [searchQuery]);

    const handleCardClick = (id) => {
        setSelectedRecipeId(id);
    };

    const closeModal = () => {
        setSelectedRecipeId(null);
    };

    return (
        <div className='w-full h-full flex flex-wrap justify-center py-10 md:justify-between gap-5 lg:gap-8 rounded-md lg:p-10 lg:px-16'>
            {recipes.length > 0 ? (
                recipes.map((recipe) => (
                    <Card key={recipe.id} recipe={recipe} onClick={() => handleCardClick(recipe.id)} />
                ))
            ) : (
                <p className="text-white text-2xl">No recipes found.</p>
            )}
            {selectedRecipeId && <Modal recipeId={selectedRecipeId} closeModal={closeModal} />}
        </div>
    );
};

export default Recipes;
