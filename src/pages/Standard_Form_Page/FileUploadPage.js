import React from "react";
import FileUploadField from "../../components/Standard_Form/FileUploadField";


function FileUploadPage(){
    return(
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl font-semibold text-blue-400">File Upload Variations</h1>
            <FileUploadField />
        </div>
    );

}

export default FileUploadPage;