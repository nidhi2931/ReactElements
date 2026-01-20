import React from 'react';
import SliderField from '../../components/Interactive&UtilityField/SliderField';



function SliderPage(){
    return(
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl text-blue-500 text-center font-bold mb-8">
                Skier Variations
            </h1>
            <SliderField />
        </div>
    )
}


export default SliderPage;