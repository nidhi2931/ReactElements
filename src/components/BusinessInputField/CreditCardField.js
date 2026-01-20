import React, { useState } from 'react';


function CreditCardField(){
    const [cardNumber,setCardNumber] = useState("");
    const [expiry,setExpiry] = useState("");
    const [cvv,setCvv] = useState("");
    const [name,setName] = useState("");
    const [readonlyCard] = useState("4111 1111 1111 1111");


    // Format Card Number

    const formatCardNumber = (value) =>
        value
            .replace(/\D/g,"")
            .replace(/(.{4})/g,"$1 ")
            .trim();

    // fromat expiry MM/YY 
    const formatExpiry = (value) =>
        value
            .replace(/\D/g,"")
            .replace(/(\d{2})(\d{1,2})/,"$1/$2")
            .slice(0,5);


    return(
        <div className="space-y-10 p-6 bg-white rounded shadow">
            {/* 1. BASIC CARD NUMBER */}
            <div>
                <label className="block mb-2 font-medium">Card Number</label>
                <input type="text"
                value={cardNumber}
                onChange={(e)=>setCardNumber(formatCardNumber(e.target.value))}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                className="w-full max-w-md px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500" />
            </div>

            {/* 2. EXPIRY DATE */}
            <div>
                <label className="block mb-2 font-medium">Expiry Date</label>
                <input type="text" value={expiry} onChange={(e)=>setExpiry(formatExpiry(e.target.value))}
                placeholder="MM/YY" maxLength={5} className="w-40 px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500" />
            </div>

            {/* 3. CVV INPUT */}
            <div>
                <label className="block mb-2 font-medium">
                    CVV
                </label>
                <input type="password" value={cvv} onChange={(e)=>setCvv(e.target.value.replace(/\D/g,""))}
                placeholder="***"
                maxLength={3}
                className="w-32 px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500" />
            </div>

            {/* 4. CARDHOLDER NAME */}
            <div>
                <label className="block mb-2 font-medium">Cardholder Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}
                placeholder="John Doe"
                className="w-full max-w-md px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500" />

            </div>

            {/* 5. SPLIT CARD FIELDS */}
            <div>
                <label className="block mb-2 font-medium">Split Card Fields</label>
                <div className="flex gap-3">
                    <input type="text" maxLength={4} placeholder="1234" className="w-20 px-2 py-2 border rounded text-center" />
                    <input type="text" maxLength={4} placeholder="5678" className="w-20 px-2 py-2 border rounded text-center" />
                    <input type="text" maxLength={4} placeholder="9012" className="w-20 px-2 py-2 border rounded text-center" />
                    <input type="text" maxLength={4} placeholder="3456" className="w-20 px-2 py-2 border rounded txet-center" />
                </div>
            </div>

            {/* 6. READ ONLY CARD */}
            <div>
                <label className="block mb-2 font-medium">Read Only</label>
                <input type="text" value={readonlyCard} readOnly className="w-full max-w-md px-4 py-2 border rounded bg-gray-100" />
            </div>
        </div>
    )
}

export default CreditCardField;