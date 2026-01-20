import React from 'react';
import RatingInputField from '../../components/Interactive&UtilityField/RatingInputField';

function RatingInputPage(){

    return(
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl text-blue-500 text-center font-bold mb-8">
                Rating Input Variations
            </h1>
            <RatingInputField />
        </div>

    );

}

export default RatingInputPage;