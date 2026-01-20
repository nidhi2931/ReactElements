import React from 'react';
import IconAdornmentField from '../../components/UIHelpersField/IconAdornmentField';

function IconAdornmentPage(){

    return(
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl text-center text-blue-500 mb-4 font-medium">
                Icon adornment Variations
            </h1>
            <IconAdornmentField />
        </div>
    )
}

export default IconAdornmentPage;