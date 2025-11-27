import React from 'react';

export default function TextInput({value,onChange,placeholder,className})
{
    return(
        
        <input type="text" 
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        placeholder={placeholder}
        className={
            `border-2 border-gray-400
            p-3 rounded-md w-full max-w-md
            focus:border-blue-500 focus:ring-2 focus:ring-blue-200
            placeholder-gray-400
            transition-all
            ${className ? className : "" }
            `}
            />
            

            
    );
}


