import React from 'react';
import CaptchaField from '../../components/Interactive&UtilityField/CaptchaField';


function CaptchaPage(){
    return (
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl text-blue-500 text-center font-bold mb-8">
                Captcha Input Variations
            </h1>
            <CaptchaField />
        </div>
    )
}

export default CaptchaField;