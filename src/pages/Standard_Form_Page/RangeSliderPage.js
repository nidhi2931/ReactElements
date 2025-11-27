import React from 'react';
import RangeSliderField from '../../components/Standard_Form/RangeSliderField';

function RangeSliderPage(){
    return(
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl text-blue-400 font-medium mb-4">Range Slider Variations</h1>
            <RangeSliderField />


        </div>
    );
}

export default RangeSliderPage;