import React from "react";
import SelectField from "../../components/Choice&SelectionField/SelectField";


function SelectPage(){
    return(
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl text-blue-400 font-semibold">Select Field Variations</h1>
            <SelectField />  

        </div>
    );
}

export default SelectPage;