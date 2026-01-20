import React, {useState} from 'react';

function CurrencyInputField(){
    const [inr,setInr] = useState("");
    const [usd,setUsd] = useState("");
    const [comma,setComma] = useState("");
    const [fixed,setFixed] = useState("1000");
    const [readOnly] = useState("2500");

    // Number formatter
    const formatNumber = (value,locale="en-IN")=>{
        const num = value.replace(/,/g,"");
        if (isNaN(num)) return "";
        return Number(num).toLocaleString(locale);

    };

    return(
        <div className="space-y-10 p-6 bg-white rounded shadow">
            {/* 1. INR CURRENCY INPUT */}
            <div>
                <label className="block mb-2 font-medium">Indian Rupee</label>
                <div className="relative max-w-sm">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹
                    </span>
                    <input type="text" value={inr} onChange={(e)=>setInr(formatNumber(e.target.value,"en-IN"))} placeholder="0"
                    className="w-full pl-8 pr-4 py-2 border rounded focus:ring-2 focus:ring-blue-500" />
                </div>
            </div>

            {/* 2. USD CURRENCY INPUT */}
            <div>
                <label className="block mb-2 font-medium">US Dollar($)</label>
                <div className="relative max-w-sm">
                    <span classname="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    $</span>
                    <input type="text" value={usd} onChange={(e)=>setUsd(formatNumber(e.target.value,"en-US"))}
                    placeholder="0" className="w-full pl-8 pr-4 py-2 border rounded focus:ring-2 focus:ring-green-500" />
                </div>
            </div>

            {/* 3. AUTO COMMA FORMAT */}
            <div>
                <label className="block mb-2 font-medium">Auto Comma Formatting</label>
                <input type="text" value={comma} onChange={(e)=>setComma(formatNumber(e.target.value))} 
                placeholder="Enter amount" className="max-w-sm px-4 py-2 border rounded focus:ring-2 focus:ring-red-500"/>
            </div>

            {/* 4. FIXED DECIMAL INPUT */}
            <div>
                <label className="block mb-2 font-medium">
                    Fixed Decimal(2 Places)
                </label>
                <input type="number" step="0.01" value={fixed} onChange={(e)=>setFixed(e.target.value)} className="max-w-sm px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500" />
                
            </div>

            {/* 5. READ ONLY CURRENCY */}
            <div>
                <label className="block mb-2 font-medium">Read Only</label>
                    <div className="relative max-w-sm">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                        <input type="text" value={readOnly} readOnly className="w-full pl-8 pr-4 py-2 border rounded bg-gray-100" />
                    </div>
            </div>

            {/* 6. CURRENCY SELECTOR */}
            <div>
                <label className='block mb-2 font-medium'>Currency Selector</label>
                <div className="flex max-w-sm">
                    <select className="border rounded-l px-2">
                        <option>₹ INR</option>
                        <option>$ USD</option>
                        <option>€ EUR</option>
                    </select>
                    <input type="text" placeholder="Amount" className="flex-1 px-4 py-2 border rounded-r focus:ring-2 focus:ring-blue-500" />
                </div>
            </div>
        </div>
    )

}
export default CurrencyInputField;