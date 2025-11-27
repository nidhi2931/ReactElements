import React, {useState} from 'react';
import {Phone, ArrowRight} from "lucide-react";


function TelField(){

    const [tel1, setTel1] = useState('');
    const [tel2, setTel2] = useState("");
    const [tel3, setTel3] = useState("");
    const [tel4, setTel4] = useState("");
    const [tel5, setTel5] = useState("");
    const [otp,setOtp] = useState("");

    return(
        // Basic Tel Field
        <div className="space-y-8 w-full max-w-lg mx-auto">
            <div>
            <label className="font-medium">Basic Telephone Field</label>
            <input type='tel' value={tel1} onChange={(e)=>setTel1(e.target.value)} 
            placeholder="Enter Phone Number"
            className="w-full p-3 border rounded-md" />
            
            </div>

            {/* // Tel with Country code + Flag(static) */}

            <div>
                <label className="font-medium">Telephone with Country Code</label>
                <div className="flex items-center">
                    <span className="flex items-center">
                        +91
                    </span>
                    <input type='tel' className="w-full p-3 border rounded-r-md"
                    placeholder="9876543210" />
                    </div>
            </div>

            {/* Tel with Icon on Left */}
            <div>
                <label className="font-medium">Telephone with left icon</label>
                <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500"><Phone className="w-5 h-5" /></span>
                        <input type="tel" className="w-full p-3 pl-10 border rounded-md"
                        placeholder="Enter Phone" />
                </div>
            </div>

            {/* Tel with validation (10 digits) */}
            <div>
                <label className="font-medium">Validation (Must be 10 digits)</label>
                <input type="tel" value={tel2}
                onChange={(e)=>setTel2(e.target.value)}
                placeholder="Enter 10 digit phone"
                className ={`w-full p-3 border rounded-md ${
                    tel2 && tel2.length !==10 ? "border-red-500" : "border-gray-300"
                
                }`} />
                {tel2  && tel2.length !== 10 && (
                    <p className="text-sm text-red-500 mt-1">
                        Phone number must be exactly 10 digits.
                    </p>
                )}
            </div>


            {/* Tel with OTP Send Button */}
            <div>
                <label className="font-medium">Phone With Send OTP Button</label>
                <div className="flex">
                    <input type="tel" value={tel3} onChange={(e)=>setTel3(e.target.value)}
                    placeholder="Enter Phone Number"
                    className="w-full p-3 border rounded-l-md" />
                    <button className="p-3 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">Send OTP</button>
                </div>
            </div>


            {/* OTP 6 Digit Separate Boxes */}
            <div>
                <label className="font-medium">OTP (6 Digits)</label>
                <div className="flex gap-2">
                    {[...Array(6)].map((_,index) => (
                        <input key={index} maxLength={1} 
                        className="w-10 h-12 text-center text-lg border rounded-md"
                        onChange={(e)=>{
                            const value= e.target.value;
                            if(value.length===1 && index<5){
                                document.getElementById(`otp-${index+1}`).focus();

                            }
                            setOtp((prev)=>prev + value);
                        }}

                        id={`otp-${index}`} />
                    ))}
                </div>
            </div>

            {/* Tel with Copy Button */}
            <div>
                <label className='font-medium'>Phone with Copy Button</label>
                <div className="flex">
                    <input type="tel" value={tel4}
                    onChange={(e)=>setTel4(e.target.value)}
                    placeholder="Enter Phone"
                    className="w-full p-3 border rounded-l-md" />

                    <button onClick={()=>navigator.clipboard.writeText(tel4)}
                    className="p-3 bg-green-500 text-white rounded-r-md hover:bg-green-600">
                        Copy
                    </button>
                </div>
            </div>

            {/* Tel with Right Icon (Call Arrow) */}
            <div>
                <label className="font-medium">Phone Field with Right Icon</label>
                <div className="relative">
                    <input type="tel"
                    value={tel5} onChange={(e)=>setTel5(e.target.value)}
                    placeholder="Enter Phone"
                    className="w-full p-3 pr-10 border rounded-md"/>
                    <span className="absolute right-3 top-3 text-blue-600">
                        <ArrowRight className="w-5 h-5" />
                    </span>
                </div>
            </div>
        </div>



    );

}

export default TelField;