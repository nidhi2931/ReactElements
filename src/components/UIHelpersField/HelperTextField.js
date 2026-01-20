import React, { useState } from 'react';

function HelperTextField(){
    const [value,setValue] = useState("");
    const [count,setCount] = useState(0);

    return(
        <div className="space-y-10 p-8 bg-white rounded shadow">

            {/* 1. BASIC HELPER TEXT */}
            <div>
            <label className="block mb-1 font-medium">Basic Helper Text</label>
            <input type="text" className="border p-2 rounded w-full" />
            <p className="text-sm text-gray-500 mt-1">This is basic helper text.</p>
            </div>

            {/* 2. DYNAMIc HELPER TEXT */}

            <div>
                <label className="block mb-1 font-medium">Dynamic Helper Text</label>
                <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} className="border p-2 rounded w-full" />
                <p className="text-sm text-gray-500 mt-1">
                    {value?`{you typed:${value}}`:"Start writing to see helper text." }
                </p>
            </div>

            {/* 3. CHARACTER COUNT */}

            <div>
                <label className="block mb-1 font-medium">Character Count</label>
                <input type="text" value={value} maxLength={50} onChange={(e)=>{setValue(e.target.value); setCount(e.target.value.length)}}
                className="border p-2 rounded w-full"/>

                <p className="text-sm text-gray-500 mt-1">
                    {count}/50 characters.
                </p>
            </div>

            {/* 4. REQUIERD FIELD HINT */}
            <div>
                <label className="block mb-1 font-medium">Required Field Hint<span className="text-red-500">*</span></label>
                <input type="text" className="border p-2 rounded w-full" />
                <p className="text--sm text-red-500 mt-1">This field is required.</p>
            </div>

            {/* 5. ERROR HELPER TEXT */}
            <div>
                <label className="block mb-1 font-medium text-red-600">Error State</label>
                <input type="text" className="border border-red-500 p-2 rounded w-full" />
                <p className="text-sm text-red-500 mt-1">Invalid input provided.</p>
            </div>

            {/* 6. SUCCESS HELPER TEXT */}
            <div>
                <label className="block mb-1 font-medium text-green-600">Success Helper Text</label>
                <input type="text" className="border border-green-500 w-full rounded"/>
                <p className="text-sm text-green-500 mt-1">Looks good!</p>
            </div>

            {/* 7. INFO HELPER TEXT */}
            <div>
                <label className="block mb-1 font-medium">Info Helper Text</label>
                <input type="text" className="border p-2 rounded w-full" />
                <p className="text-sm text-blue-500 mt-1"> ℹ️ We will never share your data.</p>
            </div>

            {/* 8. WARNING HELPER TEXT */}
            <div>
                <label className="block mb-1 font-medium">Warning Helper Text</label>
                <input type="text" className="border p-2 rounded w-full" />
                <p className="text-sm text-yellow-600 mt-1">  ⚠️ Be careful while entering this value.

                </p>
            </div>

            {/* 9. DISABLED HELPER TEXT */}
            <div>
                <label className="block mb-1 font-medium">Disabled Helper Text</label>
                <input type="text" className="border p-2 rounded w-full bg-gray-100" disabled/>
                <p className="text-sm text-gray-500 mt-1">This field is disabled.</p>
            </div>

            {/* 10. TOOLTIP HELPER */}
                <div>
                    <label className="block mb-1 font-medium">Tooltip header</label>
                    <input type="text" className="border p-2 rounded w-full" />
                    <p className="text-sm text-gray-500 mt-1 cursor-help" title="More information shown on hover">Hover to see more info.</p>
                </div>

            {/* 11. INLINE HELPER  */}
            <div className="flex items-center gap-3">
                <input type="text" className="border p-2 rounded flex-1" />
                <span className="text-sm text-gray-500">Inline Helper</span>
            </div>

            {/* 12. PASSWORD RULES */}
            <div>
                <label className="block mb-1 font-medium">Password</label>
                <input type="password" className="border p-2 rounded w-full" />
                <ul className="text-sm text-gray-500 mt-1 list-disc ml-4">
                    <li>Atleast 8 charaters</li>
                    <li>One uppercase letter</li>
                    <li>One Number</li>
                </ul>
            </div>
        </div>

    );
}


export default HelperTextField;