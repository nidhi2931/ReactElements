import React, {useState} from 'react';
import {FiSearch,FiX} from 'react-icons/fi';

function SearchBarField(){
    const [search,setSearch] = useState("");
    const [expand,setExpand] = useState(false);

    return(
        <div className="space-y-10 p-6 bg-white rounded shadow">
            {/* BASIC SEARCH BAR */}
            <div>
                <label className="block mb-2 font-medium">
                    Basic Search
                </label>
                <div className="relative w-full max-w-md">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search..." 
                    className="w-full pl-10 pr-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"/>

                </div>
            </div>

            {/* 2. Search with CLear Button */}
            <div>
                <label className="block mb-2 font-medium">
                    Search with Clear
                </label>
                <div className="relative w-full max-w-md">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 cursor" />
                    {search && (
                        <FiX onClick={()=>setSearch("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
                    )}
                    <input type = "text" value={search} onChange={(e)=>setSearch(e.target.value)}
                    placeholder="Type to Search..."
                    className="w-full pl-10 pr-10 py-2 border rounded focus:ring-2 focus:ring-blue-500" />
                    
                </div>
            </div>

            {/* 3. ICON BUTTON SEARCH */}
            <div>
                <label className="block mb-2 font-medium">Search Button</label>
                <div className="flex max-w-md">
                    <input type="text" placeholder="Search..." className="flex-1 px-4 py-2 border border-r-0  focus:ring-2 focus:ring-blue-500" />
                    <button className="px-4 bg-blue-500 text-white rounded-r">
                        <FiSearch />
                    </button>
                </div>
            </div>

            {/* 4. ROUNDED SEARCH BAR */}
            <div>
                <label className="block mb-2 font-medium">Rounded Search Button</label>
                <div className="relative w-full max-w-md">
                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type='text' placeholder="Search..." className="w-full pl-12 pr-4 py-2 border rounded-full focus:ring-2 focus:ring-blue-500" />

                </div>
            </div>

            {/* 5. UNDERLINE SEARCH */}
            <div>
                <label className="block mb-2 font-medium">Underline Search</label>
                <div className="relative w-full max-w-md">
                    <FiSearch className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="Search..." className="w-full pl-6 py-2 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:ring-0"/>

                </div>
            </div>
            {/* 6. EXPANDABLE  SEARCH*/}
            <div>
                <label className="block mb-2 font-medium">Expandable Search</label>
                <div className="flex items-center gap-2">
                    <button onClick={()=>setExpand(!expand)}
                    className="p-2 bg-blue-500 text-white rounded-full">
                        <FiSearch />
                    </button>

                    {expand && (
                        <input autoFocus type="text" placeholder="Search..." className="px-4 py-2 border rounded transition-all w-64" />

                    )}
                </div>
            </div>

            {/* 7. DISABLE SEARCH */}
            <div>
                <label className="block mb-2 font-medium">Disable Search</label>
                <div className="relative w-full max-w-md">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" disabled placeholder="Disabled..." className="w-full pl-10 pr-4 py-2 border rounded bg-gray-100 cursor-not-allowed" />
                </div>
            </div>
        </div>
    )


}

export default SearchBarField;
