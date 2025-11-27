import React from 'react';
import DateTimePickerField from '../../components/Standard_Form/DateTimePickerField';

function DateTimePickerPage(){

    return(
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className='text-3xl font-medium text-blue-400 text-center'>Date Time Picker Variations</h1>
            <DateTimePickerField />
        </div>

    );

}

export default DateTimePickerPage;