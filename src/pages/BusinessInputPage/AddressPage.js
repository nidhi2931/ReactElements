import React from 'react';
import AddressField from '../../components/BusinessInputField/AddressField';

function AddressPage(){

    return(
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl text-center text-blue-500 font-bold mb-8">Address Page Variations</h1>
            <AddressField />
        </div>
    );
}

export default AddressPage;