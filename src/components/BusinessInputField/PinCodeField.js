import React, {useState, useRef} from 'react';

function PinCodeField(){
    const [basicPin,setBasicPin] = useState(["","","","","",""]);
    const [maskedPin,setMaskedPin] = useState(["","","","","",""]);
    const [alphaPin,setAlphaPin] = useState(["","","","","",""]);
    const [readonlyPin] = useState(["5","6","0","0","0","1"]);

    const basicRefs = useRef([]);
    const maskedRefs = useRef([]);
    const alphaRefs = useRef([]);

    // Common Change Handler
    const handleChange = (val,index,type)=>{
        const regex = type === 'alpha'? /^[a-zA-Z0-9]$/ :/^\d$/;

        if(!regex.test(val)) return;


        const setter = type ==="masked"?setMaskedPin:type==="alpha"?setAlphaPin:setBasicPin;

        const values = type === "masked" ? maskedPin : type === "alpha" ? alphaPin:basicPin;
        
        const newPin = [...values];
        newPin[index] = val;
        setter(newPin);

        const refs = type==="masked" ?maskedRefs: type === "alpha" ?alphaRefs :basicRefs;

        if(val && index <newPin.length-1){
            refs.current[index+1]?.focus();

        }
    };

    const handleBackSpace = (e,index,type) =>{
        if(e.key !=="Backspace" ||index === 0) return;

        const values = type==="masked"?maskedPin:type==="alpha" ?alphaPin:basicPin;

        const refs = type ==="masked"?
        maskedRefs:
        type==="alpha"?
        alphaRefs:
        basicRefs;

        if(!values[index]){
            refs.current[index-1]?.focus();
        }
    };

    const renderPin = (values,refs,type,inputType="text")=>(
        <div className="flex gap-2">
            {values.map((val,i)=>(
                <input key={i} ref = {(el)=>refs.current[i]=el}
                value = {val}
                maxLength = {1}
                type={inputType}
                onChange={(e)=>handleChange(e.target.value,i,type)}
                onKeyDown = {(e)=>handleBackSpace(e,i,type)}
                className="w-12 h-12 text-center text-lg border rounded focus:ring-2 focus:ring-blue-500" />
            ))}
        </div>
    );

    return(
        <div className="space-y-10 p-6 bg-white rounded shadow">
            {/* 1. BASIC PIN */}
            <div>
                <label className="block mb-2 font-medium">Basic PIN</label>
                {renderPin(basicPin,basicRefs,"numeric")}
            </div>

            {/* 2. MASKED PIN */}
            <div>
                <label className="block mb-2 font-medium">Masked PIN</label>
                {renderPin(maskedPin,maskedRefs,"masked","password")}
            </div>
            {/* 3. AlphaNumeric PIN */}
            <div>
                 <label className="block mb-2 font-medium">AlphaNumeric PIN</label>
                    {renderPin(alphaPin,alphaRefs,"alpha")}

            </div>

            {/* 4. READ ONLY PIN */}
            <div>
                <label className="block mb-2 font-medium">Read Only PIN</label>
                <div className="flex gap-2">
                    {readonlyPin.map((v,i)=>(
                        <input key={i} value={v} readOnly className="w-12 h-12 text-center text-lg border rounded bg-gray-100" />
                    ))
                    }
                </div>
            </div>
        </div>
    )
}
export default PinCodeField;