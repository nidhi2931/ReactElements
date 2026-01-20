import React from 'react';
import LabelField from '../../components/UIHelpersField/LabelField';

function LabelPage(){
    return(
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl text-center text-blue-500 font-bold mb-2">Label Variations</h1>
            <LabelField />
        </div>

    );
}

export default LabelPage;