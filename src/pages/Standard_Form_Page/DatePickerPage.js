import React from 'react';
import DatePickerField from '../../components/Standard_Form/DatePickerField';

function DatePickerPage(){

    return(
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl text-center text-blue-400">
                <DatePickerField />

            </h1>
        </div>

    );


}

export default DatePickerPage;