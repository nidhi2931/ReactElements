import React from "react";
import TimePickerField from "../../components/Standard_Form/TimePickerField";

function TimePickerPage(){
    return(
        <div className="min-h-screen p-8 bg-gray-50 space-y-10 flex justify-center">
            <h1 className="text-3xl text-blue-400 font-semibold">Time Picker Variations</h1>
            <TimePickerField />
            
        </div>

    );
}

export default TimePickerPage;