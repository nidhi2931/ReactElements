import { useState } from "react";
import TextInput from '../../components/Standard_Form/TextInput';
import { FiArrowRight } from "react-icons/fi";

import React from 'react';

function TextPage(){
    const [text,setText] = useState('');

    return(
        <div className="min-h-screen">
            <div className="grid grid-cols-2 gap-4 p-4">
                <TextInput 
                value={text}
                onChange={setText}
                placeholder="Enter..."
                className="bg-yellow-100 border-red-500"
                />

                <TextInput
                value={text}
                onChange={setText}
                placeholder="Enter..."
                className="bg-red-200 border-green-500 rounded-full"
                />

                <div className="relative w-full max-w-sm">
                        <TextInput type="text"
                        placeholder="Type Here..."
                        className="w-full appearance-none border-0 border-b-2 border-green-500 p-2 pr-10 focus:outline-none focus:border-blue-500 bg-transparent 
                        text-gray-500 placeholder-gray-500 [border-top:none] [border-left:none] [border-right:none]" />
                        <FiArrowRight 
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-green-500
                        text-xl cursor-pointer hover:text-blue-600 transition-colors"
                        />
                        
                </div>

                <div>
                    <TextInput type="text" 
                    placeholder="Enter here..."
                    className="w-full border-0 border-t-2 border-gray-400 focus:border-green-500  py-2 pr-10
                    shadow-[0_-2px_4px_rgb(0,0,0,0.1)]
                   [border:none]" />
                </div>

                <div className="mt-4">
                <TextInput type="text"
                placeholder="Enter Here..."
                className="w-full border-t-0 border-b-0
                shadow-none
                outline-none
                focus:outline-none
                focus:ring-0
                focus:shadow-[inset_2px_0_0_0_#3b82f6,inset_-2px_0_0_0_#3b82f6]
               
             
                "/>
            </div>
            <div className="bg-gray-100 p-4 w-[62%]">
                <div className="bg-green-400">
                      <TextInput type="text"
                        placeholder="Enter Here..."
                        
                        />

                </div>
              
            </div>
            </div>
        </div>
    )
}

export default TextPage;