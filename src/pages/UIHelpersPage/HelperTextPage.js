import React, { useState } from 'react';
import HelperTextField from '../../components/UIHelpersField/HelperTextField';

function HelperTextPage(){

    return(
        <div className='min-h-screen bg-gray-50 p-8'> 
            <h1 className="text-3xl text-center text-blue-500 font-medium mb-4">Helper Text Variations</h1>
            <HelperTextField />
        </div>

    );

}

export default HelperTextPage;