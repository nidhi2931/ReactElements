import React from 'react';
import PasswordInput from "../../components/Standard_Form/PasswordInput";

function PasswordPage(){
    return(
        <div className="min-h-screen flex flex-col items-center justify-center p-8 space-y-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Password Field Variants
            </h1>
            <PasswordInput type="basic" />
            <PasswordInput type="toggle" />
            <PasswordInput type="strength" />
            <PasswordInput type="validation" />
            <PasswordInput type="confirm" />
        </div>

    );
}

export default PasswordPage;