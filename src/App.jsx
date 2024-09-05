import React, { useState } from 'react';
import Recipes from './Components/Recipes';

function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState({ sortBy: 'name', order: 'asc' });

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSortChange = (event) => {
        const [sortBy, order] = event.target.value.split(',');
        setSortOption({ sortBy, order });
    };

    return (
        <div className='main w-full h-full bg-[#212121] px-4 md:px-36 flex flex-col justify-center items-center'>
            <div>
                <input
                    className='bg-transparent border-2 rounded-md border-rose-500 text-white outline-none w-96 lg:w-[600px] my-8 h-12 p-3'
                    type="text"
                    placeholder='Search Recipe by name'
                    value={searchQuery}
                    onChange={handleInputChange}
                />
            </div>
            <div className='flex justify-end w-full'>
                <select className='bg-transparent border-2  rounded-md border-rose-500 text-gray-400 px-4 py-2'
                    onChange={handleSortChange} >
                    <option className='bg-[#212121]' value="">Sort by value</option>
                    <option className='bg-[#212121]' value="cookTimeMinutes,asc">Sort by Cook Time (Low to High)</option>
                    <option className='bg-[#212121]' value="cookTimeMinutes,desc">Sort by Cook Time (High to Low)</option>
                    <option className='bg-[#212121]' value="rating,desc">Sort by Rating</option>
                    <option className='bg-[#212121]' value="difficulty,asc">Sort by Easiness (Low to High)</option>
                    <option className='bg-[#212121]' value="difficulty,desc">Sort by Easiness (High to Low)</option>
                </select>
            </div>
            <div className='w-full h-full flex flex-wrap justify-center py-10 md:justify-between gap-5 lg:gap-8 rounded-md lg:p-10 lg:px-16'>
                <Recipes searchQuery={searchQuery} sortOption={sortOption} />
            </div>
        </div>
    );
}

export default App;
