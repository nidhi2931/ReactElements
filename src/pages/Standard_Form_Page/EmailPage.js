import React from "react";
import EmailFields from "../../components/Standard_Form/EmailField";

function EmailPage(){
    return(
        <div className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
                Email Input Field Variations
            </h1>
            <EmailFields />
        </div>
    );
}

export default EmailPage;