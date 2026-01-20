import React, {useState} from 'react';


function TimeDurationPickerField(){
    const [hm,setHm] = useState({h:0,m:0});
    const [dropdown,setDropdown] = useState({h:"01",m:"30"});
    const [slider,setSlider] = useState(45);
    const [readonly] = useState({h:2,m:15});
    const [totalMinutes,setTotalMinutes] = new useState(0);


    // COnvert hours + minutes => total minutes
    const calculateTotal = (h,m) =>h*60 +m;

    return(
        <div>
            {/* 1. HOURS + MINUTES */}
            <div>
                <label className="block mb-2 font-medium">Hours and Minutes</label>
                <div className="flex gap-4 items-center">
                    <input type="number" min="0" value={hm.h} onChange={(e)=>setHm({...hm,h:Number(e.target.value)})}
                    className="w-20 border p-2 rounded" />
                    <span>hrs</span>
                    <input type="number" min="0" max="59" value={hm.m} onChange={(e)=>setHm({...hm,m:Number(e.target.value)})}
                    className="w-20 border p-2 rounded" />
                    <span>mins</span>

                </div>
                <p className="text-sm mt-2">
                    Total:{calculateTotal(hm.h,hm.m)} minutes
                </p>
            </div>


            {/* 2. DROPDOWN DURATION */}
            <div>
                <label className="block mb-2 font-medium">Dropdown Duration Picker</label>
                <div className="flex gap-4">
                    <select value={dropdown.h} onChange={(e)=>setDropdown({...dropdown,h:e.target.value})}
                    className="border p-2 rounded" >
                        {[...Array(24)].map((_,i)=>(
                            <option key={i} value={String(i).padStart(2,"0")}>{i} hrs</option>
                        ))}
                    </select>

                    <select value={dropdown.m} onChange={(e)=>setDropdown({...dropdown,m:e.target.value})}
                    className="border p-2 rounded">{[10,20,30,40].map((m)=>(
                        <option key={m} value={String(m).padStart(2,"0")}>
                            {m} mins
                        </option>
                    ))}</select>
                </div>
            </div>
            {/* 3. SLIDER DURATION */}
            <div>
                <label className="block mb-2 font-medium">Slider Duration(Minutes)</label>
                <input type="range" min="0" max="480" step="15" value={slider} onChange={(e)=>setSlider(Number(e.target.value))} 
                className="w-full" />
                <p className="text-sm mt-1">Selected:{Math.floor(slider/60)} hrs {slider % 60} mins</p>
            </div>

            {/* 4. QUICK PRESETS */}
            <div>
                <label className="block mb-2 font-medium">
                    QUICK PRESETS
                </label>
                <div className="flex gap-3 flex-wrap">
                    {[15,30,60,90,120].map((m)=>(
                        <button key={m} onClick={()=>setTotalMinutes(m)}
                        className="px-4 py-2 border rounded">
                            {m} mins
                        </button>
                    ))}
                </div>
                {totalMinutes >0 &&(
                    <p classname="mt-2 text-sm">
                        Selected:{Math.floor(totalMinutes/60)} hrs{" "}
                        {totalMinutes/60} mins
                    </p>                
                )}
            </div>


            {/* 5. READ ONLY DURATIONS */}
            <div>
                <label className="block mb-2 font-medium">
                    Read Only Duration
                </label>
                <div className="flex gap-4">
                    <input type="number" value={readonly.h} readOnly className="w-20 border p-2 rounded bg-gray-100" />
                    <span>hrs</span>
                    <input type="number" value={readonly.m} readOnly className="w-20 border p-2 rounded bg-gray-100" />
                    <span>mins</span>
                </div>
            </div>

            {/* 6. COMPACT SINGLE INPUT */}
            <div>
                <label className="block mb-2 font-medium">
                    Compact Duration Delay
                </label>
                <input type="text" value={`${hm.h}h ${hm.m}m`} readOnly
                className="border px-4 py-2 rounded w-40 bg-gray-100" />
            </div>
        </div>
    );
}

export default TimeDurationPickerField;