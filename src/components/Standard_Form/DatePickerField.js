import React, {useState} from 'react';


function DatePickerField(){
    return(

        <div className="space-y-8 p-6">
            {/* 1. Simple Date Picker */}
            <div>
                <label className="block mb-1 font-medium">Simple Date Picker</label>
                <input type="date"
                className="border p-2 rounded w-full" />
            </div>

            {/* Date Range Picker */}
            <div>
                <label className="block mb-1 font-medium">Date Range Picker</label>
                <div className="flex items-center gap-2">
                    <input type="date" className="border p-2 rounded" />
                    <span>to</span>
                    <input type="date" className="border p-2 rounded" />
                </div>
            </div>

            {/* 3. Month Picker */}
            <div>
                <label className="block mb-1 font-medium">Month Picker</label>
                <input type="month" className="border p-2 roounded w-full" />

            </div>

            {/* Year Picker */}
            <div>
                <label className="block mb-1 font-medium">Year Picker</label>
                <input type="number" min="1900" max="2100" placeholder="Enter Year"
                className="border p-2 rounded w-full" />
            </div>

            {/* DateTime Picker */}

            <div>
                <label className="block mb-1 font-medium">Date Time Picker</label>
                <input type="datetime-local" className="border p-2 rounded w-full" />
            </div>

            {/* Time Picker */}
            <div>
                <label className="block mb-1 font-medium">Time Picker</label>
                <input type="time" className="border p-2 rounded w-full" />
            </div>

            {/* Week  Picker*/}
            <div>
                <label className="block mb-1 font-medium">Week Picker</label>
                <input type="week" className="border p-2 rounded w-full" />
            </div>

            {/* Custom Calendar Popup */}
            <div>
                <label className='block mb-1 font-medium'>Popup Calendar Picker</label>
                <input type="date" className="border p-2 rounded w-full cursor-pointer" />
            </div>

        </div>
    );

}

export default DatePickerField;
