import React from 'react';
import PinCodeField from '../../components/BusinessInputField/PinCodeField';


function PinCodePage(){
    return(
        <div className="min-h-screen p-6 b-gray-50">
            <h1 className="text-3xl text-center text-blue-500 font-bold mb-8">Pin Code Variations</h1>
            <PinCodeField />

        </div>
    );
}

export default PinCodePage;