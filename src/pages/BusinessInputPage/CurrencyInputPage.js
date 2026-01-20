import React from 'react';
import CurrencyInputField from '../../components/BusinessInputField/CurrencyInputField';

function CurrencInputPage(){

    return(
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl text-blue-500 text-center font-bold mb-8"> Currency Input Variations</h1>
            <CurrencyInputField />
        </div>
    );
}

export default CurrencInputPage;