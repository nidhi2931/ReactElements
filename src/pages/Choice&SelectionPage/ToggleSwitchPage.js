import React from "react";
import ToggleSwitchField from "../../components/Choice&SelectionField/ToggleSwitchField";


function ToggleSwitchPage(){
    return(
        <div className="min-h-screen p-8 bg-gray-50">
           <h1 className="text-3xl text-center text-blue-400 ">Toggle Switch Variations</h1>
           <ToggleSwitchField />
        </div>
    );
}

export default ToggleSwitchPage;