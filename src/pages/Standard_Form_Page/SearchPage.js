import React, { useState } from "react";
import SearchField from "../../components/Standard_Form/SearchField";


const SearchPage =()=>{
    return(
        
        
        <div className="min-h-screen bg-gray-50 flex justify-center items-start p-8 space-y-10">
            <h1 className="text-3xl font-semibold text-blue-400 ">Search Input Variations</h1>
            <div>
                <SearchField />
            </div>
            
        </div>
    );
};

export default SearchPage;