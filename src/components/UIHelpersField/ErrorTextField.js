import React, {useState} from 'react';

function ErrorTextField(){

    const [value,setValue] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [touched,setTouched] = useState(false);

    return(
        <div className="space-y-10 p-6 bg-white rounded shadow">
            {/* 1. BASIC ERROR TEXT */}
            <div>
                <label className="block mb-1 font-medium">Basic Error</label>
                <input type="text" className="border border-red-500 p-2 rounded w-full" />
                <p className="text-sm text-red-500 mt-1">
                    This field is required.
                </p>
            </div>

            {/* 2. CONDITIONAL ERROR */}
            <div>
                <label className="block mb-1 font-medium">Conditional Error</label>
                <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}
                onBlur={()=>setTouched(true)} classname={`border p-2 rounded w-full ${
                    touched && !value ? "border-red-500" :""
                }`} />

                {touched && !value &&(
                    <p className="text-sm text-red-500 mt-1">Value can not be empty.</p>
                ) }
            </div>

            {/* 3. EMAIL VALIDATION ERROR */}
            <div>
                <label className="block mb-1 font-medium">Email Validation</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className={
                    `border p-2 rounded w-full ${
                        email && !email.includes("@")?"border-red-500":""
                    }`
                } />
                {email && !email.includes("@") && (
                    <p className="text-sm text-red-500 mt-1">Enter a valid email address.</p>
                )}
            </div>

            {/* 4. PASSWORD ERROR LIST */}
            <div>
                <label className="block mb-1 font-medium">Password Rules</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
                className="border p-2 rounded w-full" />
                <ul className="text-sm mt-1 space-y-1">
                    <li className={password.length<8?"text-red-500":"text-green-500"}>Minimum 8 Characters</li>
                    <li className={!/[A-z]/.test(password)?"text-red-500":"text-green-500"}>One uppercase letter</li>
                    <li className={!/\d/.test(password)?"text-red-500":"text-green-500"}>One number</li>
                </ul>
            </div>

            {/* 5 MULTIPLE ERRORS */}
            <div>
                <label className="block mb-1 font-medium">Multiple Errors</label>
                <input type="text" className="border border-red-500 p-2 rounded w-full" />
                <ul className="text-sm text-red-500 mt-1 list-disc ml-4">
                    <li>Field is required.</li>
                    <li>Minimum Length is 5</li>
                </ul>
            </div>

            {/* 6. INLINE ERRORS */}

            <div className="flex items-center gap-3">
                <input type="text" className="border border-red-500 p-2 rounded flex-1" />
                <span className="text-sm text-red-500">Invalid</span>
            </div>

            {/* 7. TOOLTIP ERROR */}
            <div>
                <label className="block mb-1 font-medium">Tooltip Error</label>
                <input type="text" className="border border-red-500 p-2 rounded w-full" />
                <p className="text-sm text-red-500 mt-1 cursor-help" title='Please enter a valid value'>Hover to see error</p>
            </div>

            {/* 8. ICON ERROR */}
            <div className="relative">
                <label className="block mb-1 font-medium">Icon Error</label>
                <input type="text" className="border border-red-500 p-2 rounded w-full pr-10"/>
                <span className="absolute right-3 top-9 text-red-500">⚠️</span>
                <p className="text-sm text-red-500 mt-1">Incorrect Values</p>

            </div>

            {/* 9. FORM LEVEL ERROR */}
            <div className="border border-red-300 bg-red-300p-4 rounded">
                <p className="text-sm text-red-600">
                    ❌ Submission failed. Please fix the errors below.
                </p>
            </div>

            {/* 10. DISABLED FIELD ERROR */}
            <div>
                <label className="block mb-1 font-medium text-gray-400">Disabled Field</label>
                <input type="text" disabled className="border p-2 rounded w-full bg-gray-100" />
                <p className="text-sm text-gray-400 mt-1">Disabled fields can not be edited.</p>
            </div>
        </div>
    );
}

export default ErrorTextField;