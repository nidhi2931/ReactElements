import React, {useState}from 'react';
import { Eye,EyeOff, CheckCircle, XCircle } from "lucide-react";


export default function PasswordInput({
    type="basic",//basic |toggle|strength|validation|confirm
    label="Password",
    onChange,
})

{
    const [password,setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [show,setShow] = useState(false);

    const getStrength =()=>{
        if(password.length===0) return "";
        if(password.length<6) return "Weak";
        if(password.length<10) return "Medium";
        return "Strong";


    };

    const getColor=()=>{
        switch(getStrength()){
            case "Weak":
                return "text-red-500";
            case "Medium":
                return "text-yellow-500";
            case "Strong":
                return "text-green-500";

            default:
                return "text-gray-500";
        }
    };

    const rules =[
        {label:"At Least 8 Characters", valid:password.length>8},
        {label:"Contains uppercase", valid:/[A-Z]/.test(password)},
        {label:"Contains number", valid:/\d/.test(password)},
        {abel:"Contains special character", valid:/\d/.test(password)},
    ];

    const renderInput=(placeholder="Enter password")=>(
        <div className="relative w-full max-w-md">
            <input type={show ?"text":"password"}
            placeholder={placeholder}
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            className="w-full border-b-2 border-gray-300 p-3 focus:border-blue-500 focus:outline-none transition"
            />

            {type === "toggle" && (
                <span className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                onClick={()=>setShow(!show)}
                >
                    {show ? <EyeOff size={20}/> :<Eye size={20} />}
                </span>
            )}

        </div>
    );

    switch(type){
        case "basic":
            return(
                <div className="flex flex-col items-start space-y-2">
                    <label className="font-medium text-gray-700">
                        {label}
                    </label>
                    {renderInput()}
                </div>
            );

        case "toggle":
            return(
                <div className="flex flex-col items-start space-y-2">
                    <label className="font-medium text-gray-700">{label}</label>
                    {renderInput()}
                </div>

            )

        case "strength":
            return(
                <div className="flex flex-col items-start space-y-2">
                    <label className="font-medium text-gray-700">{label}</label>
                    {renderInput()}
                    <p className={`mt-2 text-sm ${getColor()}`}>
                        Strength:{getStrength()}
                    </p>
                </div>
            );

            case 'validation':
                return(
                    <div className="flex flex-col items-start space-y-2">
                        <label className="font-medium text-gray-700">{label}</label>
                        {renderInput()}
                        <ul className="mt-2 text-sm">
                            {rules.map((rule,i)=>(
                                <li key={i} className="flex items-center space-x-2">
                                    {rule.valid?(
                                        <CheckCircle size={16} className="text-green-500" />

                                    ):
                                    (
                                        <XCircle size={16} className="text-gray-400" />


                                    )}
                                    <span className={rule.valid?"text-green-600":"text-gray-500"}>
                                        {rule.label}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>


                );

                case "confirm":
                    const match=password===confirm && password.length>0;
                    return(
                        <div className="flex flex-col items-start space-y-2">
                            <label className="font-medium text-gray--700">{label}</label>
                            {renderInput("Enter Password")}
                            <input type="password" placeholder="confirm password"
                            value={confirm} onChange={(e)=>setConfirm(e.target.value)}
                            className="w-full border-b-2 border-gray-300 p-3 focus:border-blue-500 focus:outline-none transition"
                            />
                            <p className={`text-sm ${
                                match ?"text-green-500":"text-red-500" }`}>
                                    {match ?"Password match":"Password Do not match"}
                                </p>
                        </div>
                    );
                    default:
                        return null;
    }
}