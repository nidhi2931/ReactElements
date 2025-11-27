import React, { useState } from 'react';
import { Plus , Minus } from "lucide-react";


function NumberField(){
    const [num1,setNum1] = useState("");
    const [num2,setNum2] = useState(0);
    const [num3,setNum3] = useState(50);
    const [num4,setNum4] = useState(1);
    const [num5,setNum5] = useState(1000);
    const [num6,setNum6] = useState("");
    const [num7,setNum7] = useState("");

    return(
        <div className="flex flex-col gap-10 w-full max-w-xl mx-auto mt-10">
            {/* Basic Number Field */}
            <div>
                <label className="block text-sm font-semibold mb-1">
                    Basic Number
                </label>
                <input type="number" placeholder="Enter a number" className="w-full border border-gray-300 rounded-md p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                value={num1} onChange={(e)=>setNum1(e.target.value)} />
            </div>

            {/* Number with step buttons */}
            <div>
                <label className="block text-sm font-semibold mb-1">
                Number with Step Buttons
                </label>
                <div className="flex items-center border border-gray-300 rounded-md overflown-hidden w-full">
                    <button type='button' className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
                    onClick={()=>setNum2((prev) => Math.max(prev-1, 0))}><Minus size={16} /></button>
                    <input type="number" className="flex-1 text-center p-2 outline-none border-x border-gray-200"
                    value={num2}
                    onChange={(e)=> setNum2(Number(e.target.value))} />
                    <button type="button" className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
                    onClick={()=>setNum2((prev)=>prev+1)}>
                        <Plus size={16} />
                    </button>
                </div>
            </div>

            {/* Range Slider */}
            <div>
                <label className="block text-sm font-semibold mb-1">
                    Range Slider({num3})
                </label>
                <input type="range" min="0" max="100" step="1" value={num3} onChange={(e)=>setNum3(e.target.value)}
                className="w-full accent-blue-500" />
            </div>

            {/* Number with Unit (e.g., KG, %) */}
            <div>
                <label className="block text-sm font-semibold mb-1">
                    Number with Unit
                </label>
                <div className="relative">
                    <input type="number" placeholder="Enter Weight" className='w-full border border-gray-300 rounded-md p-3 pr-12 focus:border-blue-500 focus:ring-blue-100 outline-none'
                    value={num4} onChange={(e)=>setNum4(e.target.value)} />
                    <span className="absolute right-4 top-3 text-gray-400 font-medium">Kg</span>
                </div>
            </div>
            {/* Formatted Number (with commas) */}
            <div>
                <label className="block text-sm font-semibold mb-1">
                    Formatted Number
                </label>
                <input type="text"
                placeholder="Enter Large Number"
                className="w-full border border-gray-300 rounded-md p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                    value={num5.toLocaleString()}
                    onChange={(e)=>{
                        const raw= e.target.value.replace(/,/g,"");
                        if(!isNaN(raw)) setNum5(Number(raw))
                    }}
               />
            </div>

            {/* Read Only/ Disabled */}
            <div>
                <label className="block text-sm font-semibold mb-1">
                    Disabled Field
                </label>
                <input type="number" value="12345" disabled className="w-full border border-gray-200 rounded-md p-3 bg-gray-100 cursor-no-allowed"
                />
            </div>

            {/* Currency Field */}
            <div>
                <label className="block text-sm font-semibold mb-1">Curreny Field</label>
                <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">Rs.</span>
                    <input type="number"
                    placeholder="Enter Amount"
                    className="w-full pl-8 border border-gray-400 rounded-md p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                    value={num6}
                    onChange={(e)=>setNum6(e.target.value)}

                        
                        />
                </div>
            </div>

            {/* Decimal/ Step */}

            <div>
                <label className="block text-sm font-semibold mb-1">Decimal Number Step(0.1)</label>
                <input type="number"
                step="0.5"
                placeholder="0.0"
                className="w-full border border-gray-300 rounded-md p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                value={num7}
                onChange={(e)=>setNum7(e.target.value)}/>
            </div>

        </div>
    )
}

export default NumberField;