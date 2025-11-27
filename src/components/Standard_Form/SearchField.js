import React, { useState } from "react";
import { Search, X} from "lucide-react";

const SearchField=()=>{
    const [query, setQuery] = useState("");
    const [query2,setQuery2]= useState("");
    const [query3,setQuery3] = useState("");
    const [query4,setQuery4] = useState("");
    const [query5,setQuery5] = useState("");


    return(
        <div className="p-8 flex flex-col gap-8 max-w-lg mx-auto">
            {/* Basic Search Input */}
            <div>
                <label className="block text-gray-700 mb-2 font-medium">Basic Search</label>
                <input type="search"
                placeholder="Search here..."
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
            </div>

            {/* Search with Icon inside input (left icon) */}

            <div>
                <label className="block text-gray-700 mb-2 font-medium">Search with Left Icon</label>
                <div className="relative">
                    <Search className="absolute left-3 top-3 text-gray-400" size={20}/>
                        <input type="search"
                        placeholder="Search Items..."
                        value={query2}
                        onChange={(e)=>setQuery2(e.target.value)}
                        className="w-full pl-10 border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />

                </div>
            </div>

            {/* Search with right icon (clear icon) */}
            <div>
                <label className="block text-gray-700 mb-2 font-medium">Search with Right Icon</label>
                <div className="relative">
                    <input type="search"
                    placeholder="Search users"
                    value={query3}
                    onChange={(e)=>setQuery3(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-3 pr-10 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />

                    {query3 &&(
                        <X
                        onClick={()=>setQuery3("")}
                        className="absolute right-3 top-3 text-gray-400 cursor-pointer hover:text-red--500"
                        size={20} />
                    )}
                </div>
            </div>
            {/* Search with button */}
            <div>
                <label className="block text-gray-700 mb-2 font-medium">
                    Search with Button
                </label>
                <div className="flex">
                    <input type="search"
                    placeholder="Search Products..."
                    value={query4}
                    onChange={(e)=>setQuery4(e.target.value)} 
                    className="w-full border border-gray-300 rounded-l-md p-3 focus:ring-2 focus:ring-bue-400 focus:outline-none"
                    />

                    <button className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600 transition">
                        <Search size={20} />
                    </button>
                </div>
            </div>

            {/* Rounded Search Bar (Modern Style) */}
            <div>
                <label className="block text-gray-700 mb-2 font-medium">Rounded Search bar</label>
                <div className="relative">
                    <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
                    <input type="search"
                    placeholder="Search anything..."
                    value={query5}
                    onChange={(e)=>setQuery5(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                </div>
            </div>
        </div>
    )
}


export default SearchField;