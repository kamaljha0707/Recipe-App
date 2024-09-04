import React from 'react'

function Card({ recipe , onClick}) {
    
    return recipe ? (
        <div className="w-[300px] shadow-lg hover:shadow-gray-700/50 rounded-md hover:scale-105 transition ease-in-out delay-150" onClick={onClick}>
            <img
                src={recipe.image}
                alt="recipe"
                className="h-[200px] w-full rounded-md object-cover bg-gradient-to-t from-gray-900 to-transparent"
            />
            <div className="p-4">
                <div className='w-full flex justify-between items-center'>
                <h1 className="text-lg text-white w-4/5  font-semibold">{recipe.name}</h1> 
                <button className='text-white bg-gray-700 p-1 px-2 rounded-sm'>{recipe.difficulty}</button>
                </div>
                <p className='text-yellow-500'>Rating {recipe.rating}</p>
                <p className="mt-3 text-sm text-gray-300">
                {recipe.description}
                </p>
                <button className="transition ease-in-out delay-150 text-white bg-rose-500 hover:bg-rose-600 rounded-sm px-3.5 my-4 py-2 hover:-translate-y-1 hover:scale-110  duration-300 ...">
                    Recipe details
                </button>
            </div>
        </div>
    ) : <h2 className='text-white text-center'>Loading...</h2> 
}

export default Card
