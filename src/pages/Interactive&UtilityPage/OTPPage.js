import React from "react";
import OtpField from "../../components/Interactive&UtilityField/OTPField";


function OTPPage(){
    return(
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className ="text-3xl text-blue-500 text-center font-bold mb-8">OTP Field Variations</h1>
            <OtpField />
        </div>
    )

}
export default OTPPage; 