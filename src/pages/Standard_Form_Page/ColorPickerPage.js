import React from 'react';
import ColorPickerField from '../../components/Standard_Form/ColorPickerField';

function ColorPickerPage(){

    return(
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl text-blue-400 text-center font-bold mb-8 ">Color Picker Variations</h1>
            <ColorPickerField />

        </div>
    );
}

export default ColorPickerPage;
