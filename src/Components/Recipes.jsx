import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import Modal from './Modal';

const Recipes = ({ searchQuery, sortOption }) => {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipeId, setSelectedRecipeId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const sortRecipes = (recipes) => {
        const { sortBy, order } = sortOption;
        return [...recipes].sort((a, b) => {
            let comparison = 0;
            if (sortBy === 'cookTimeMinutes') {
                comparison = a.cookTimeMinutes - b.cookTimeMinutes;
            } else if (sortBy === 'rating') {
                comparison = a.rating - b.rating;
            } else if (sortBy === 'difficulty') {
                comparison = a.difficulty - b.difficulty;
            }
            return order === 'asc' ? comparison : -comparison;
        });
    };

    useEffect(() => {
        const fetchRecipes = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`https://dummyjson.com/recipes/search?q=${searchQuery}`);
                const sortedRecipes = sortRecipes(response.data.recipes);
                setRecipes(sortedRecipes);
            } catch (error) {
                console.error('Error fetching recipes:', error);
                setRecipes([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchRecipes();
    }, [searchQuery, sortOption]);

    const handleCardClick = (id) => {
        setSelectedRecipeId(id);
    };

    const closeModal = () => {
        setSelectedRecipeId(null);
    };

    return (
        <div className='w-full h-full flex flex-wrap justify-center py-10 md:justify-between gap-5 lg:gap-8 rounded-md lg:p-10 lg:px-16'>
            {isLoading ? (
                <p className="text-white text-2xl">Loading...</p>
            ) : recipes.length > 0 ? (
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
