import React,{useState} from 'react';
import TimeDurationPickerField from '../../components/BusinessInputField/TimeDurationPickerField';


function TimeDurationPickerPage(){
    return(
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl text-center text-blue-500 font-medium mb-4">Time Duration Picker Variations</h1>
            <TimeDurationPickerField />
        </div>
    );

}

export default TimeDurationPickerPage;