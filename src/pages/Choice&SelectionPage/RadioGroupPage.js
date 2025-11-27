import React from 'react';
import RadioGroupFields from '../../components/Choice&SelectionField/RadioGroupField';


function RadioGroupPage(){
    return(
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl text-blue-400 font-medium text-center">Radio Group Variations</h1>
            <RadioGroupFields />
            

        </div>
    );
}

export default RadioGroupPage;
