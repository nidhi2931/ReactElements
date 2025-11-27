import React, {useState} from "react";
import {Mail,X} from 'lucide-react';

export default function EmailField(){
    const [email,setEmail]  = useState('');
    const [email2,setEmail2] = useState('');
    const [email3,setEmail3] = useState('');
    const [email4,setEmail4] = useState('');
    const [email5,setEmail5] = useState('');
    const [email6,setEmail6] = useState('');
    const [email7,setEmail7] = useState('');
    const [emails,setEmails] = useState([]);

    const handleKeyDown=(e)=>{
        if(e.key === "Enter" && email7.trim()){
            setEmails([...emails, email7.trim]);
            setEmail7("");
            e.preventDefault();

        }
    };

    return(
        <div className="flex flex-col gap-8 w-full max-w-xl mx-auto mt-10">
          <div>
            <label className="block text-sm font-bold mb-1">Basic Email</label>
            <input type="Email" placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
            value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>

          {/* Email with validation */}

          <div>
            <label className='block text-sm font-semibold mb-1'>
                Email with validation
            </label>
            <input type="email"
            placeholder="Enter Valid email"
            className={`w-full border rounded-md p-3 outline-none ${
                email2 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email2)
                ?"border-red-500"
                :"border-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-100"
            }`}
            value={email2}
            onChange={(e)=>setEmail2(e.target.value)}
            />
            {email2 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email2) && (
                <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
            )}
          </div>

          {/* Emial with Icon */}
          <div>
            <label className="block text-sm font-semibold mb-1">
                Email With Icon
            </label>
            <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input type="email"
                placeholder="example@gmail.com"
                className="w-full pl-10 border border-gray-300 rounded-md p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                value={email3}
                onChange={(e)=>setEmail3(e.target.value)}
                />
            </div>
          </div>

          {/* Email with floating Label */}
          <div className="relative">
            <input type="email"
            id="floatingEmail"
            placeholder=" "
            className="peer w-full border border-gray-300 rounded-md p-3 placeholder-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
            value={email4}
            onChange={(e)=>setEmail4(e.target.value)}/>
            <label htmlFor="floatinEmail"
            className="absolute left-3 top-3 text-gray-300 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1
            peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1" >
                Floating Label Email
            </label>
          </div>

          {/* Email with clear button */}
          <div>
            <label className="block text-sm font-semibold mb-1">
                Email with clear button 
            </label>
            <div className="relative">
                <input type="email"
                placeholder="Clear me"
                className="w-full border border-gray-300 rounded-md p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none pr-10"
                value={email5}
                onChange={(e)=>setEmail5(e.target.value)} />

                {email5 && (
                    <X size={20} className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                    onClick={()=>setEmail5("")}/>
                )}
            </div>
        </div>
{/* Disabled/Read Only Emal */}
<div>
    <label className="block text-sm font-semibold mb-1">
        Disabled Email
    </label>
    <input type="email"
    value="readonly@example.com"
    disabled
    className="w-full border border-gray-200 rounded-md p-3 bg-gray-100 cursor-not-allowed"/>
</div>

{/* Multiple Email ENtry
 */}
    <div>
        <label className="block text-sm font-semibold mb-1">
            Multiple Mails Entry
        </label>
        <div className="border border-gray-300 rounded-md p-2 flex flex-wrap gap-2">
            {emails.map((em,idx)=>(
                <span key={idx}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center">{em}
                <X
                size={14} className="ml-1 cursor-pointer" onClick={()=>setEmails(emails.filter((_,i)=>i !== idx))}/>
                </span>
            ))}
            <input type="email"
            value={email7}
            onChange={(e)=>setEmail7(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type and press Enter"
            className="flex-1 p-2 outline-none" />
            
            
            </div>
    </div>


</div>
    )
}