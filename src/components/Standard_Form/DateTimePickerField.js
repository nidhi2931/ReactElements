import React, {useState} from "react";
import { Calendar, Clock } from "lucide-react";

function DateTimePickerField(){
    const [custom,setCustom] = useState({
        date:"",
        hour:"12",
        minute:"00",
        period:"AM",
    });
    return(
        <div className="space-y-8 p-8">
            {/* Basic Date Picker */}
            <div>
                <label className="block mb-1 font-medium">Date Picker</label>
                <input type="date" className="border p-2 rounded w-full" />

            </div>

            {/* Basic Time Picker */}
            <div>
                <label className="block mb-1 font-medium">Time Picker</label>
                <input type="time" className="border p-2 rounded w-full" />
            </div>

            {/* Native DateTime Picker */}
            <div>
                <label className="block mb-1 font-medium">DateTime Picker</label>
                <input type="datetime-local" className="border p-2 rouded w-full"/>
                
            </div>

            {/* Date with min/max */}
            <div>
                <label className="block mb-1 font-medium">Date(min/max)</label>
                <input type="date" min="2024-01-01" max="2025-12-31" className="border p-2 rounded w-full" />
            </div>

            {/*  Time with steps */}
            <div>
                <label className="block mb-1 font-medium">Time (15 min steps)</label>
                <input type="time" step="900" className="border p-2 rounded w-full" />
            </div>

            {/* DateTime min-max */}

            <div>
                <label className="block mb-1 medium">DateTime (min/max)</label>
                <input type="datetime-local" min="2024-01-01T09:00"
                max="2025-12-31T18:00" className="border p-2 rounded w-full" />
            </div>


            {/* Separate Date + Time */}
            <div>
                <label className="block mb-1 font-medium">Separate Date + Time</label>
                <div className="flex gap-4">
                    <input type="date" className="border p-2 rounded w-full" />
                    <input type="time" className="border p-2 rounded w-full" />
                </div>
            </div>

            {/* Date Range Picker */}

            <div>
                <label className="block mb-1 font-medium">Date Range</label>
                <div className="flex gap-4">
                    <input type="date" className="border p-2 rounded" />
                    <span>to</span>
                    <input type="date" className="border p-2 rounded" />
                </div>
            </div>

            {/* DateTime Range Picker */}
            <div>
                <label className="block mb-1 font-medium">DateTime Range</label>
                <div className="flex gap-4">
                    <input type="datetime-local" className="border p-2 rounded" />
                    <span>to</span>
                    <input type="datetime-local" className="border p-2 rounded" />
                </div>
            </div>

            {/* DateTime with Calendar + time icon */}
            <div className="relative">
                <label className="block mb-1 font-medium">With Icons</label>
                <span className="absolute left-3 top-10 text-gray-500"><Calendar className="h-5 w-5" /></span>
                <span className="absolute left-3 top-10 text-gray-500"><Calendar className="h-5 w-5" /></span>
                <input type="datetime-local" className="border p-2 pl-10 pr-10 rounded w-full" />
            </div>

            {/* Custom Dropdown DateTime */}
            <div>
                <label className="block mb-1 font-medium">Custom DropDown</label>
                <div className="flex gap-3">
                    {/* Date  */}

                    <input type="date" value={custom.date} onChange={(e)=>setCustom((prev)=>({...prev,date:e.target.value}))}
                    className="border p-2 rounded" />


                    {/* Hour */}
                    <select value={custom.hour}
                    onChange={(e)=>setCustom((prev)=>({...prev, hour:e.target.value}))}
                    className="border p-2 rounded">
                        {[...Array(12)].map((_,i)=>(
                            <option key={i}>{String(i+1).padStart(2,"0")}</option>
                        ))}
                    </select>

                    {/* Minute */}
                    <select value={custom.minute} onChange={(e)=>setCustom((prev)=>({...prev,minute:e.target.value}))}
                    className="border p-2 rounded">
                        {["00","15","30","45"].map((m)=>(
                            <option key={m}>{m}</option>
                        ))}
                    </select>


                    {/* AM/PM */}
                    <select value={custom.period} onChange={(e)=>setCustom((prev)=>({...prev,period:e.target.value}))}
                    className="border p-2 rounded">
                        <option>AM</option>
                        <option>PM</option>
                    </select>
                </div>

            </div>
            {/* Card Style Date +Time */}
            <div>
                <label className="p-4 border rounded-lg shadow">
                    Card UI Date + Time
                </label>
                <input type="date" className="border p-2 rounded w-full mb-3" />
                <input type="time" className="border p-2 rounded w-full mb-3" />

            </div>

            {/* Disabled DateTime Picker */}
            <div>
                <label className="block mb-1 font-medium">Disabled</label>
                <input type="datetime-local" disabled className="border p-2 rounded w-full b-gray-200" />

            </div>

            {/* ReadOnly DateTime Picker */}

            <div>
                <label className="block mb-1 font-medium">ReadOnly</label>
                <input type="datetime-local" readOnly value="2025-01-01T12:00"
                className="border p-2 rounded w-full bg-gray-100" />
            </div>
            


        </div>

    );

}

export default DateTimePickerField;