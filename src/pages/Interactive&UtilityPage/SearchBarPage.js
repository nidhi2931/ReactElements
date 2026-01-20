import React from 'react';
import SearchBarField from '../../components/Interactive&UtilityField/SearchBarField';

function SearchBarPage(){
    return(
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl text-blue-500 text-center font-bold mb-8">
                Search Bar Variations
            </h1>
            <SearchBarField />
        </div>
    )
}

export default SearchBarPage;