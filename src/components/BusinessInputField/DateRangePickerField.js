import { LucideArrowDownRightFromSquare } from 'lucide-react';
import React, {useState} from 'react';


function DateRangePickerField(){
    const [range,setRange] = useState({from:"",to:""});
    const [inlineRange,setInlineRange] = useState({from:"",to:""});
    const [preset,setPreset] = useState("");
    const [readonly] = useState({
        "from":"2025-01-01",
        "to":"2025-01-01",
    });

    // preset handler
    const applyPreset=(type)=>{
        const today=new Date();
        let from, to;

        if(type==="today"){
            from=to=today.toISOString().slice(0,10);

        }
        
        if(type="last7"){
            to=today.toISOString().slice(0,10);
            today.setDate(today.getDate() -7);
            from = today.toISOString().slice(0,10);
        }

        if(type==="thisMonth"){
            from = new Date(today.getFullYear(),today.getMonth(),1)
            .toIOString()
            .slice(0,10);
            to = new Date(today.getFullYear(),today.getMonth()+1,0)
            .toIOString()
            .slice(0,10);
        }
        setPreset(type);
        setRange({from,to});

    };

    return(
        <div className="space-y-10 p-6 bg-white rounded shadow">

            {/* 1. BASIC DATE RANGE */}
            <div>
                <label className='block mb-2 font-medium'>Basic Data Range</label>
                <div className="flex gap-4">
                    <input type="date" value={range.from} onChange={(e)=>setRange({...range,from:e.target.value})}
                    className="border px-3 py-2 rounded" />
                    <input type="date" value={range.from} onChange={(e)=>setRange({...range,from:e.target.value})}
                    className="border px-3 py-2 rounded" />
                    <input type="date" value={range.to} onChange={(e)=>setRange({...range,to:e.target.value})}
                    className="border px-3 py-2 rounded"/>
                </div>
            </div>

            {/* 2. INLINE DATE RANGE */}
            <div>
                <label className="block mb-2 font-medium">
                    Inline Date Range
                </label>
                <div className="grid grid-cols-2 gap-4 max-w-md">
                    <input type="date" value={inlineRange.from}
                    onChange={(e)=>setInlineRange({...inlineRange,from:e.target.value})}
                    className="border px-3 py-2 rounded" />
                    <input type="date" value={inlineRange.to} onChange={(e)=>setInlineRange({...inlineRange,to:e.target.value})}
                    className="border px-3 py-2 rounded" />
                </div>
            </div>

            {/* 3. PRESET DATE RANGES */}
            <div>
                <label className="block mb-2 font-medium">
                    Preset Ranges
                </label>
                <div className="flex gap-3 flex-wrap">
                    <button onClick={()=>applyPreset("today")}
                    className="px-4 py-2 border rounded">Today</button>
                    <button onClick={()=>applyPreset("last7")}
                    className="px-4 py-2 border rounded">Last 7 Days</button>
                    <button onClick={()=>applyPreset("thisMonth")}
                    className="px-4 py-2 border rounded">This Month</button>
                </div>
                {preset && (
                    <p className="mt-2 text-sm">
                        Selected:{range.from} to {range.to}
                    </p>
                )}
            </div>

            {/* 4. SINGLE INPUT (From - to) */}
            <div>
                <label className="block mb-2 font-medium">
                    Single Input (From -> To)
                </label>
                <input type="text" value={`${range.from || "YYYY-MM-DD"} to ${range.to ||"YYYY-MM-DD"}`} readOnly 
                className="border px-4 py-2 rounded w-full max-w-md bg-gray-100" />

            </div>

            {/* 5. READ ONLY RANGE */}
            <div>
                <label className="block mb-2 font-medium">
                    Read Only Date Range
                </label>
                <div className="flex gap-4">
                    <input type="date" value={readonly.from} readOnly className="border px-3 py-2 rounded bg-gray-100" />
                    <input type="date" value={readonly.to} readOnly className="border px-3 py-3 rounded bg-gray-100" />
                </div>
            </div>

            {/* 6. LIBRARY READY (COMMENTED) */}
            {/* <DateRangePicker value={[startDate,endDate]} onChange={(dates)=>setRange({from:dates[0],to:dates[1]})} /> */}

        </div>
    )
 }

 export default DateRangePickerField;