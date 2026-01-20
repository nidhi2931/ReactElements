import React from 'react';
import TextAreaField from '../../components/Textual&AdvancedField/TextAreaField';


function TextAreaPage(){
    return(
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl text-center text-blue-400">Text Area Input </h1>
            <div>
                <TextAreaField />
            </div>
        </div>
    );
}

export default TextAreaPage;