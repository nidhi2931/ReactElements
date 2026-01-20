import React from 'react';
import FileDragDropField from '../../components/Interactive&UtilityField/FileDragDropField';

function FileDragDropPage(){
    return(
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="text-3xl text-blue-500 text-center font-bold mb-8">File Drag & Drop Variations</h1>
            <FileDragDropField />
        </div>
    )
}

export default FileDragDropPage;