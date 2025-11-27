import React, {useState} from "react";
import { Globe, ArrowRight } from "lucide-react";



function URLField(){
    const [url1, setUrl1] = useState("");
    const [url2,setUrl2] = useState("");
    const [url3,setUrl3] = useState("");
    const [url4, setUrl4] = useState("");
    const [url5, setUrl5] = useState("");

    return(
        <div className="space-y-6 w-full max-w-lg mx-auto">

            {/* Basic URL Field */}
            <div>
                <label className="font-medium">Basic URL Field</label>
                <input type="url"
                value={url1}
                onChange={(e)=>setUrl1(e.target.value)}
                placeholder="https://example.com"
                className="w-full p-3 border rounded-md" />
            </div>

            {/* URL with Icon Left */}
            <div>
                <label className="font-medium">URL with Icon Left</label>
                <div className="relative">
                    <span className="absolute left-3 top-3text-gray-500">
                        <Globe className="w-5 h-5" />
                    </span>
                    <input type="url" placeholder="Enter Website URL"
                    className="w-full p-3 pl-10 border rounded-md" />
                </div>
            </div>

            {/* URL with Right Arrow Icon */}
            <div>
                <label className="font-medium">URL with right arrow</label>
                <div className="relative">
                    <input type="url" value={url2} onChange={(e)=>setUrl2(e.target.value)}
                    placeholder="https://example.com" className="w-full p-3 pr-10 border rounded-md" />
                    <span className="absolute right-3 top-3 text-gray-600" >
                        <ArrowRight className="w-5 h-5" />
                    </span>
                </div>
            </div>

            {/* URL with Helper text */}
            <div>
                <label className="font-medium">URL with helper text</label>
                
                    <input type="url" value={url3} onChange={(e)=>setUrl3(e.target.value)}
                    placeholder="Enter Site URL"
                    className="w-full p-3 border rounded-md"
                    /><p className="text-sm text-gray-500 mt-1">Example: https://mysite.com</p>
            </div>

            {/* URL with validation error */}

            <div>
                <label className="font-medium">URL with validation error</label>
                <input type="url" value={url4} onChange={(e)=>setUrl4(e.target.value)}
                placeholder="Enter Valid URL"
                className={`w-full p-3 border rounded-md ${
                    url4 && !url4.startsWith("http") ? "border-red-500" : "border-gray-300"
                }`} />
                {url4 && !url4.startsWith("http") && (
                    <p className="text-sm text-red-500 mt-1">URL starts with http of https</p>
                )}
            </div>

            {/* URL with Copy Button */}
            <div>
                <label className="font-medium">URL with Copy button</label>
                <div className="flex">
                    <input type="url" value={url5} onChange={(e)=>setUrl5(e.target.value)}
                    placeholder="Paste URL here"
                    className="w-full p-3 border rounded-l-md"
                    />
                    <button onClick={()=>navigator.clipboard.writeText(url5)}
                    className="p-3 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
                        Copy
                    </button>
                </div>
            </div>

        </div>

    );
}

export default URLField;