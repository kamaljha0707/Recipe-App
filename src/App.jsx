import React, { useState } from 'react';
import Recipes from './Components/Recipes'; // Adjust the path to your Recipes component

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };
    

    return (
        <div className='main w-full h-full bg-[#212121] px-4 md:px-36 flex flex-col justify-center items-center'>
            <div >
                <input
                    className='bg-transparent border-2 rounded-md border-rose-500 text-white outline-none w-96 lg:w-[600px] my-8 h-12 p-3'
                    type="text"
                    placeholder='Search Recipe by name'
                    value={searchQuery}
                    onChange={handleInputChange}
                />
            </div>
            <div className='w-full h-full flex flex-wrap justify-center py-10 md:justify-between gap-5 lg:gap-8 rounded-md lg:p-10 lg:px-16'>
                <Recipes searchQuery={searchQuery} />
            </div>
        </div>
    );
}

export default App;
