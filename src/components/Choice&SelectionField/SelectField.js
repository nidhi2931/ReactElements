import React,{useState} from "react";
import { ChevronDown,Search,Check } from "lucide-react";

function SelectField(){
    const [search,setSearch] = useState("");
    const [multiSelect, setMultiSelect] = useState([]);
    const [selectedCustom,setSelectedCustom] = useState("Select Options");
    const [openCustom, setOpenCustom] = useState(false);

    const options= ["India","USA","Canada","Germany","Japan","Australia"];

    const filteredOptions = options.filter((o)=>
    o.toLowerCase().includes(search.toLowerCase()));

    const toggleMulti=(item)=>{
        setMultiSelect((prev)=>
        prev.includes(item)?prev.filter((v)=>v !== item):[...prev,item]);
    };

    return(
        <div className="space-y-10 p-6">
            {/* Basic Select */}
                <div>
                    <h3 className="font-semibold mb-2">Basic Select</h3>
                    <select className="border w-64 p-2 rounded-md">
                        <option>Select Country</option>
                        {options.map((o,i)=>(
                            <option key={i}>{o}</option>
                        ))}
                    </select> 
                </div>

                {/* Select with Placeholder */}
                <div>
                    <h3 className="font-semibold mb-2">Select the Placeholder</h3>
                    <select className="border w-64 p-2 rounded-md text-gray-600">
                        <option value="" disables selected>Choose an option...</option>
                        {options.map((o,i)=>(
                            <option key={i}>{o}</option>
                        ))}
                    </select>
                </div>


                {/* Disabled select */}

                <div>
                    <h2 className="font-semibold mb-2">Disabled Select</h2>
                    <select disabled className="border w-64 p-2 rounded-md bg-gray-200">
                        <option>Select Disabled</option>
                    </select>
                </div>


                {/* Error Select */}
                <div>
                    <h3 className="font-semibold mb-2">Error Select</h3>
                    <select className="border w-64 p-2 rounded-md bg-gray-200">
                        <option>Error Select</option>
                    </select>
                    <p className="text-red-600 mt-1text-sm">This field is required.</p>
                </div>

                {/* Select with Groups */}
                <div>
                    <h3 className="font-semibold">Grouped Select</h3>
                    <select className="border w-64 rounded-md">
                        <optgroup label="Asia">
                            <option>India</option>
                            <option>Japan</option>
                        </optgroup>
                        <optgroup label="America">
                            <option>USA</option>
                            <option>Canada</option>
                        </optgroup>
                    </select>
                </div>

                {/* Multi Select*/}
                <div>
                    <h3 className="font-semibold mb-2">Multi Select</h3>
                    <div className="border w-64 p-2 rounded-md">
                        {options.map((o,i)=>(
                            <label key={i} className="flex items-center space-x-2">
                                <input type="checkbox"
                                checked ={multiSelect.includes(o)}
                                onChange={()=>toggleMulti(o)} />
                                <span>{o}</span>
                            </label>
                        ))}
                    </div>
                    <div className="mt-2">
                        Selected:{multiSelect.length?multiSelect.join(", "):"None"}
                    </div>
                </div>

                {/* Searchable Dropdown */}
                <div className="relative">
                    <h3 className="font-semibold mb-2">Searchable Dropdown
                    </h3>
                    <div className="border rounded-md w-64 p-2 flex  items-center gap-2">
                        <Search size={16} />
                        <input type="text" placeholder="Search..." className="w-full outline-none" value={search}
                        onChange={(e)=>setSearch(e.target.value)} />
                    </div>
                    <div className="border w-64 bg-white max-h-40 overflow-y-auto mt-1 rounded-md shadow">
                        {filteredOptions.map((o,i)=>(
                            <div key={i} className="p-2 hover:bg-gray-100 cursor-pointer" onClick={()=>setSearch(o)}>
                                {o}
                            </div>
                        ))}
                    </div>

                </div>
                
                {/* Icon Select */}
                <div>
                    <h3 className="font-semibold m-2">Select with Icons</h3>
                    <select className="border w-64 p-2 rounded-md">
                        <option>Global</option>
                        <option>India</option>
                        <option>USA</option>
                        <option>Japan</option>
                    </select>
                </div>

                {/* Custom Stylish Dropdown */}
                <div className="w-64">
                    <h3 className="font-semibold mb-2">Custom Styled Dropdown</h3>
                    <div className="border p-2 rounded-md flex justify-between items-center cursor-pointer"
                    onClick={()=>setOpenCustom(!openCustom)}>
                        {selectedCustom}
                        <ChevronDown />
                    </div>

                    {openCustom &&(
                        <div className="border rounded-md mt-1 shadow bg-white">
                            {options.map((o,i)=>(
                                <div key={i} className="p-2 hover:bg-blue-100 cursor-pointer flex justify-between" 
                                onClick={()=>{
                                    setSelectedCustom(o);
                                    setOpenCustom(false);

                                    }}>
                                    {o}
                                    {selectedCustom === o && <Check size={16} />}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
        </div>
    );
}


export default SelectField;