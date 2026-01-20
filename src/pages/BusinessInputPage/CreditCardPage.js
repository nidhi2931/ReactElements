import React from 'react';
import CreditCardField from '../../components/BusinessInputField/CreditCardField';


function CreditCardPage(){
    return(
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl text-center text-blue-500">Credit Card Varitations</h1>
            <CreditCardField />
        </div>
    );
}

export default CreditCardPage;