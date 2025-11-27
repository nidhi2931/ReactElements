import React from 'react';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';

// Reusable Button
// props:
// -variant: string(primary, secondary,outline, icon, fab, etc.)
// -children: text or icon inside the Button 
// -onClick: function
// -disabled: Boolean
// -className: extra tailwind classes

export default function Button({variant = "primary", children, onClick, disabled, className="" }){
        let baseStyles="px-4 py-2 font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-offset -1";
        const variants={
            primary:"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",
            secondary:"bg-gray-300 text-black hover:bg-gray-400 focus:ring-gray-400",
            outline:"border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-200",
            ghost:"text-gray-700 hover:bg-gray-100 focus:ring-gray-200",
            elevated:"bg-white shadow-md hover:shadow-lg",
            filled:"bg-green-500 text-white hover:bg-green-600",
            icon:"p-2 rounded-full hover:bg-gray-100",
            fab:"fixed bottom-8 right-8 p-4 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700",
            cta:"bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold hover:opacity-80",
            disabled:"bg-gray-200 bg-gray-400 cursor-not-allowed",
            text:"text-blue-600 hover:underline",

        };

        const appliedStyles=disabled
        ?`${baseStyles} ${variants.disabled}`
        :`${baseStyles} ${variants[variant] || variants.primary} ${className}`;

        return(
            <button onClick={onClick} disabled={disabled} className={appliedStyles}>
                {children}
            </button>
        );
}
