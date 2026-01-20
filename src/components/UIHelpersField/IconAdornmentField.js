import React, {useState} from 'react';
import {FiEye, FiEyeOff, FiSearch, FiMail,FiUser} from "react-icons/fi";



function IconAdornmentField(){
    const [showPwd,setShowPwd] = useState(false);
    return(
        <div className='space-y-10 p-6 bg-white rounded shadow'>

            {/* 1. LEFT ICON */}
            <div>
                <label className="block mb-1 font-medium">Left Icon</label>
                <div className="relative">
                    <FiUser className='absolute left-3 top-3 text-gray-400' />
                    <input type="text" placeholder='Username' className="pl-10 border p-2 rounded w-full" />

                </div>
            </div>

            {/* 2. RIGHT ICON */}
            <div>
                <label className="block mb-1 font-medium">Right Icon</label>
                <div className="relative">
                    <input type='email' placeholder="Email" className='pr-10 border p-2 rounded w-full' />
                    <FiMail className="absolute right-3 top-3 text-gray-400" />
                </div>
            </div>


            {/* 3. CLICKABLE ICON BUTTON */}
            <div>
                <label className="block mb-1 font-medium">Clickable Icon</label>
                <div className="relative">
                    <input type={showPwd?"text":"password"} placeholder="Password" className="pr-10 border p-2 rounded w-full" />
                    <button type='button' onClick={()=>setShowPwd(!showPwd)} className="absolute right-3 top-2.5 text-gray-500">
                        {showPwd?<FiEyeOff />:<FiEye />}
                    </button>
                </div>
            </div>

            {/* 4. SEARCH BAR ICON */}
            <div>
                <label className="block mb-1 font-medium">Search Input</label>
                <div className="relative">
                    <FiSearch className="absolute left-3 top-3 text-gray-400"/>
                    <input type="search" placeholder="Search" placeholder="Search..." className="pl-10 border p-2 rounded w-full" />

                </div>
            </div>

            {/* 5. ICON WITH BORDER SEPARATOR */}
            <div>
                <label className="block mb-1 font-medium">Icon Separator</label>
                <div className="flex border rounded overflown-hidden">
                    <span className="px-3 flex items-center bg-gray-100 text-gray-500 border-r">$</span>
                    <input type="number" placeholder="Amount" className="flex-1 p-2 outline-none" />

                    </div>
            </div>

            {/* 6. MULTIPLE ICONS */}
            <div>
                <label className="block mb-1 font-medium">Multiple Icons</label>
                <div className="relative">
                    <FiSearch className="absolute left-3 top-3 text-gray-400" />
                    <input type="text" placeholder="Search users" className="pl-10 pr-10 border p-2 rounded w-full" />
                    <button className="absolute right-3 top-2.5 text-gray-500">❌</button>
                </div>
            </div>

            {/* 7. ICON BUTTON INSIDE INPUT */}
            <div>
                <label className="block mb-1 font-medium">Icon Button</label>
                <div className="relative">
                    <input type='text' placeholder="Send Message" className="pr-12 border p-2 rounded w-full" />
                    <button className="absolute right-2 top-2 bg-blue-500 text-white px-2 py-1 rounded text-sm">
                        Send
                    </button>
                </div>
            </div>
            {/* 8. DISABLED ICON INPUT */}
            <div>
                <label className="block mb-1 font-medium text-gray-400">Disabled Input</label>
                <div className="relative">
                    <FiMail className="absolute left-3 top-3 text-gray-300"/>
                    <input type="email" disabled placeholder="Disabled" className="pl-10 border p-2 rounded w-full bg-gray-100" />
                </div> 
            </div>

            {/* 9. VALIDATION ICON */}
            <div>
                <label className="block mb-1 font-medium">Validation Icon</label>
                <div className="relative">
                    <input type="text" className="pr-10 border border-green-500 p-2 rounded w-full"/>
                    <span className="absolute right-3 top-3 text-green-500">✔</span>
                </div>
            </div>

            {/* 10. LOADING ICON */}
            <div>
                <label className="block mb-1 font-medium">Loading State</label>
                <div className="relative">
                    <input type="text" className="pr-10 border p-2 rounded w-full" />
                    <span className="absolute right-3 top-3 animate-spin">⏳</span>
                </div>
            </div>

        </div>
    );
}

export default IconAdornmentField;