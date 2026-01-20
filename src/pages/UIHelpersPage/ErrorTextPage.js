import React from 'react';
import ErrorTextField from '../../components/UIHelpersField/ErrorTextField';

function ErrorTextPage(){

    return(
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl text-center text-blue-500 mb-4">Error Text Page Variations.</h1>
            <ErrorTextField />

        </div>
    )
}

export default ErrorTextPage;