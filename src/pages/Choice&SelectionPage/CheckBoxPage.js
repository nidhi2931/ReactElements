import React from "react";
import CheckBoxField from '../../components/Choice&SelectionField/CheckBoxField';

function CheckBoxPage(){
    return(
        <div className="min-h-screen p-8 b-gray-50">
            <h1 className="text-3xl text-center text-blue-400">Check box Variations</h1>
            <CheckBoxField />

        </div>
    );
}

export default CheckBoxPage;