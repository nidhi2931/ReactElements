import React from 'react';


function LabelField(){
    return(

       <div className="space-y-10 p-6 bg-white rounded shadow">

        {/* 1. BASIC LABEL */}
        <div>
            <label className="block mb-1 font-medium"></label>
             <input type="text" placeholder="Basic Input" className="border p-2 rounded w-full" />

        </div>
       
       

        {/*    2. INLINE LABEL */}
        <div className="flex items-center gap-4">
            <label className="font-medium w-32">
                Inline Label
            </label>
            <input type="text" placeholder="Inline Input" className="border p-2 rounded flex-1" />

        </div>

        {/* 3. FLOATING LABEL */}
        <div className="relative">
            <input type="text" placeholder=" " className="peer border p-2 rounded w-full focus:outline-none" />

            <label className="absolute left-2 top-2 text-gray-400 text-sm transition-all
            peer-placeholder-shown:top-2.5
            peer-placeholder-shown :text-base
            peer-placeholder-shown:text-gray-400
            peer-focus:top-1 
            peer-focus:text-sm
            peer-focus:text-blue-500">Floating Label</label>

        </div>

        {/* 4. REQUIRED LABEL */}
        <div>
            <label className="block mb-1 font-medium">
                Required Label <span className="text-red-500">*</span>
            </label>
            <input type="text" className="border p-2 rounded w-full" />
        </div>

        {/* 5. OPTIONAL LABEL */}
        <div>
            <label className="block mb-1 font-medium text-gray-600">Optional Label 
                <span className="text-sm">(optional)</span>
            </label>
            <input type="text" className="border p-2 rounded w-full" />
        </div>

        {/* 6. ICON LABEL */}
        <div>
            <label className="flex items-center gap-2 mb-1 font-medium">
                 🔍 Search Label
            </label>
            <input type="text" placeholder="Search..." className="border p-2 rounded w-full" />
        </div>

        {/* 7. Label with descriptions */}
        <div>
            <label className="block font-medium">Label with Helper Text</label>
            <p className="text-sm text-gray-500 mb-1">
                This text helps the user understand the input.
            </p>
            <input type="text" className="border p-2 rounded w-full" />

        </div>

        {/* 8. ERROR LABEL */}
        <div>
            <label className="block mb-1 font-medium text-red-600">Error Label</label>
            <input type="text" className="border border-red-500 p-2 rounded w-full" />
            <p className="text-sm text-red-500 mt-1">This field has an error.</p>
        </div>

        {/* 9. SUCCESS LABEL */}
        <div>
            <label className="block mb-1 font-medium text-green-600">Success Label</label>
            <input type="text" className="border border-green-500 p-2 rounded w-full" />
            <p className="text-sm text-green-500 mt-1">Looks good!</p>
        </div>

        {/* 10. DISABLED LABEL */}
        <div>
            <label className="block mb-2 font-medium text-green-600">Disabled Label</label>
            <input type="text" disabled className="border p-2 rounded w-full bg-gray-100 cursor-not-allowed" />
        </div>

        {/* 11. CHECKBOX/RADIO LABEL */}
        <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label className="font-medium">
                Checkbox Label
            </label>
        </div>

        {/* 12. GROUP LABEL */}
        <fieldset className="border p-4 rounded">
            <legend className="font-medium px-2">Group Label</legend>
            <input type="text" placeholder="Grouped Input" className="border p-2 rounded w-full" />
        </fieldset>

        {/* 13. TOOLTIP LABEL */}
        <div>
            <label className="flex items-center gap-2 font-medium">ToolTip Label
                <span className="text-gray-400 cursor-help" title="More Information">ℹ️</span>

            </label>
            <input type="text" className="border p-2 rounded w-full" />
        </div>

    </div>
    );

}

export default LabelField;