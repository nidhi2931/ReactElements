import React from "react";
import URLField from "../../components/Standard_Form/URLField";

function URLPage(){
    return(
        <div className="min-h-screen p-8 bg-gray-50 flex justify-center items-center space-y-10">
            <h1 className="text-3xl text-blue-800 font-bold mb-4">URL Field Variations</h1>
            <URLField />
        </div>
    );
}

export default URLPage;