import React, { useState } from 'react';
import {Clock} from "lucide-react";

function TimePicker(){

    const [customTime,setCustomTime] = useState({
        hour:"12",
        minute:"00",
        period:"AM"
    });

    return(
        <div className="space-y-8 p-6">

            {/* Basic Time Picker */}
            <div>
                <label className="block mb-1 font-medium">Basic Time Picker</label>
                <input type="time" className="border p-2 rounded w-full" />
            </div>


            {/* Time Picker with Seconds */}
            <div>
                <label className="block mb-1 font-medium">Time Picker +Seconds</label>
                <input type='time' step='1' className="border p-2 rounded w-full" />
            </div>

            {/* 12- Hour Format (AM/PM) */}
            <div>
                <label className="block mb-1 font-medium">12 Hour Format</label>
                <input type="time" className="border p-2 rounded w-full" />

            </div>

            {/* 24 Hour Format */}
            <div>
                <label className="block mb-1 font-medium">24 Hour Format</label>
                <input type="time" className="border p-2 rounded w-full" />
            
            </div>

            {/* Time Range Picker */}
            <div>
                <label className="block mb-1 font-medium">Time Range Picker</label>
                <div className="flex items-center gap-2">
                    <input type="time" className="border p-2 rounded" />
                        <span>to</span>
                        <input type="time" className="border p-2 rounded" />
                </div>
            </div>

            {/* Time Rane Picker wih Steps */}
            <div>
                <label className="block mb-1 font-medium" >Time Range(15-minute Steps)</label>
                <input type="time" step="900" className="border p-2 roundede w-full" />
            </div>
             
             {/* Time Picker with Icon */}
             <div className="relative">
                <label className='block mb-1 font-medium'>With Clock Icon</label>
                <span className="absolute left-3 top-10text-gray-500"><Clock className="w-5 h-5" /></span>
                <input type="time" className="border p-2 pl-10 rounded w-full" />
             </div>

             {/* Custom DropDown TimePicker */}
             <div>
                <label className="block mb-1 font-medium">Custom DropDown Time Picker</label>
                <div className="flex gap-2">
                    {/* Hours */}
                    <select value={customTime.hour}
                    onChange={(e)=>setCustomTime((prev)=>({...prev, hour:e.target.value}))}
                    className="border rounded p-2" >
                        {[...Array(12)].map((_,i)=>(
                            <option key={i}>{String(i+1).padStart(2,"0")}</option>
                        ))}
                    </select>


                    {/* Minutes */}
                    <select value={customTime.minute}
                    onChange={(e)=>setCustomTime((prev)=>({...prev, minute:e.target.value}))}
                    className="border rounded p-2">
                        {["00","15","30","45"].map((m,i)=>(
                            <option key={i}>{m}</option>
                        ))}
                    </select>

                    {/* AM/PM */}
                    <select value={customTime.period}
                    onChange={(e)=>setCustomTime((prev)=>({...prev, period:e.target.value}))}
                    className="border rounded p-2">
                        <option>AM</option>
                        <option>PM</option>
                    </select>
                </div>
             </div>

             {/* Disabled Time Picker */}
             <div>
                <label className="block mb-1 font-medium">Disabled Time Picker</label>
                <input type="time" value="10:30 PM" className="border p-2 rounded w-full bg-gray-100" disabled />
             </div>

             <div>
                <label className="block mb-1 font-medium">ReadOnly Time Picker</label>
                <input type='time' className="border p-2 rounded w-full bg-gray-100" readOnly />
             </div>


        </div>

    );

}

export default TimePicker;