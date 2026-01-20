import React,{useState} from 'react';

function AddressField(){
    const [address,setAddress] = useState("");
    const [manual,setManual] = useState({
        street:"",
        city:"",
        state:"",
        zip:"",
        country:"",

    });

    const suggestions =[
        "221B Baker Street, London",
        "1600 Amphitheatre Parkway, Mountain View",
        "Connaught Place, New Delhi",
        "MG Road, Bengaluru",
    ];
    const [filtered,setFiltered] = useState([]);

    // custom autocomplete(no API)
    const handleSearch = (value)=>{
        setAddress(value);
        setFiltered(
            suggestions.filter((s)=>s.toLowerCase().includes(value.toLowerCase()))
        );

    };


    return(
        <div className="space-y-10 p-6 bg-white rounded shadow">
            {/* 1. BASIC ADDRESS INPUT */}
            <div>
                <label className="block mb-2 font-medium">Basic Address</label>
                <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}
                placeholder="Enter Address"
                className="w-full max-w-lg px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500" />

            </div>

            {/* 2. CUSTOM AUTOCOMPLETE (NO API) */}
            <div>
                <label className="block mb-2 font-medium">Address Autocomplete(Custom)</label>
                <div className="relative max-w-lg">
                    <input type="text" value={address} onChange={(e)=>handleSearch(e.target.value)}
                    placeholder="Search address..." className="w-full px-4 py-2 border rounded focus:ring-2 focuS:ring-blue-500" />
                    {filtered.length >0 && (
                        <ul className="absolute w-full bg-white border mt-1 rounded shadow z-10">
                            {filtered.map((item,i)=>(
                                <li key={i} onClick={()=>{
                                    setAddress(item);
                                    setFiltered([]);

                                }}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* 3. MANUAL ADDRESS FORM */}
            <div>
                <label className="block mb-2 font-medium">
                    Manual Address Entry
                </label>
                <div className="grid grid-cols-2 gap-4 max-w-lg">
                    <input placeholder="Street" className="border px-3 py-2 rounded" onChange={(e)=>setManual({...manual,street:e.target.value})} />
                    <input placeholder="City" className="border px-3 py-2 rounded" onChange={(e)=>setManual({...manual,city:e.target.value})} />
                    <input placeholder="State" className="border px-3 py-2 rounded" onChange={(e)=>setManual({...manual,state:e.target.value})} />
                    <input placeholder ="ZIP/PIN" className="border px-3 py-2 rounded" onChange={(e)=>setManual({...manual,zip:e.target.value})} />
                    <input placeholder="Country" className="border px-3 py-2 rounded" onChange={(e)=>setManual({...manual,country:e.target.value})} />
                </div>
            </div>

            {/* 4. READ ONLY ADDRESS */}
            <div>
                <label className="block mb-2 font-medium">
                    Read Only Address
                </label>
                <input type="text" value="New Delhi,India"
                readOnly className="w-full max-w-lg px-4 py-2 border rounded bg-gray-100" />
            </div>

            
            {/* 5. GOOGLE MAPS AUTOCOMPLETE(READY) */}
            {/* <div>
                <label className="block mb-2 font-medium">
                    Google Maps Autocomplete
                </label>
                <LoadScript googleMapsApiKey="YOUR_API_KEY" libraries={["places"]}>
                    <AutoComplete onPlaceChanged={()=>console.log("Place Started")}>
                        <input type="text" placeholder="Search Address..." className="w-full max-w-lg px-4 py-2 border rounded" />
                    </AutoComplete>
                </LoadScript>
            </div> */}

        </div>
    );

}

export default AddressField;