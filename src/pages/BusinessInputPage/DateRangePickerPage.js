import React from 'react';
import DateRangePickerField from '../../components/BusinessInputField/DateRangePickerField';
function DateRangePickerPage(){

    return(
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl text-center font-bold mb-8 text-blue-500">Date Range Picker Variations</h1>
            <DateRangePickerField />
            
        </div>
    );

}

export default DateRangePickerPage;