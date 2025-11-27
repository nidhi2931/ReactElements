import React, {useState,useRef} from "react";

function FileUploadField(){

    const [image,setImage] = useState(null);
    const [multiImages,setMultiImages] = useState([]);
    const [dragFiles,setDragFiles] = useState([]);
    const [progress, setProgress] = useState(0);
    const inputRef=useRef(null);

    // Image Preview Single

    const handleImagePreview = (e)=>{
        const file = e.target.files[0];
        if(!file) return;
        setImage(URL.createObjectURL(file));
    };

    // Image Preview Multiple
    const handleMultiImage=(e)=>{
        const files=Array.from(e.target.files);
        setMultiImages(files.map((file)=>URL.createObjectURL(file)));

    };

    // Drag and Drop
    const handleDrop = (e)=>{
        e.preventDefault();
        const files=Array.from(e.dataTransfer.files);
    }

    // Fake Upload Progress
    const startUpload =()=>{
        setProgress(0);
        let val=0;
        const interval = setInterval(()=>{
            val+=10;
            setProgress(val);
            if(val >=100 ) clearInterval(interval);
        },200);
    };


    return(
        <div className="p-6 space-y-10">
            {/* Basic File Upload */}
            <div>
                <h2 className="font-semibold mb-2">Basic File Upload</h2>
                <input type="file" />
            </div>

            {/* Multiple File Upload */}
            <div>
                <h2 className="font-semibold mb-2">Multiple File Upload</h2>
                <input type="file" multiple />
            </div>

            {/* Image Only Upload */}
            <div>
                <h2 className="font-semibold mb-2">Images Only</h2>
                <input type="file" accept="image/*" />
            </div>

            {/* PDF Upload */}
            <div>
                <h2 className='font-semibold mb-2'>PDF Upload</h2>
                <input type="file" accept="application/pdf" />
            </div>

            {/* Video Uppload */}
            <div>
                <h2 className="font-semibold mb-2" >Video Upload</h2>
                <input type="file" accept="video/*" /> 
            </div>

            {/* Single Image Preview */}
            <div>
                <h2 className="font-semibold mb-2">Singl Image Preview</h2>
                <input type="file" accept="image/*" onChange={handleImagePreview} />
                {image && <img src={image} alt="preview" className="w-32 h-32 mt-4 rounded border" />}
            </div>

            {/* Mutliple Image Preview */}
            <div>
                <h2 className="font-semibold mb-2">Multiple Image Preview Grid</h2>
                <input type="file" multiple accept="image/*" onChange={handleMultiImage} />
                <div className="grid grid-cols-3 gap-3 mt-4">
                    {multiImages.map((img,index)=>(
                        <img key={index} src={img} className="w-24 h-24 rounded border object-cover" />
                    ))}
                    </div> 
            </div>

            {/* Drag and Drop */}
            <div>
                <h2 className="font-semibold mb-2">Drag and Drop Upload</h2>
                <div onDragOver={(e)=>e.preventDefault()}
                    onDrop={handleDrop}
                    className="w-full h-36 border-2 border-dashed border-gray-400 rounded-md flex items-center justify-center text-gray-500">
                        Drop Files Here
                    </div>
                    {dragFiles.length>0 &&(
                        <ul className="mt-3 list-disc ml-6">
                            {dragFiles.map((file,i)=>(
                                <li key={i}>{file.name}</li>
                            ))}
                        </ul>
                    )}
            </div>

            {/* Custom Button File Upload */}
            <div>
                <h2 className="font-semibold mb-2">Custom Styled Upload Button</h2>
                <button onClick={()=>inputRef.current.click()}
                className="px-5 py-2 bg-blue-500 text-white rounded-md">Choose File</button>
                <input type="file" ref={inputRef} className="hidden" />
            </div>

            {/* Upload with progress bar */}

            <div>
                <h2 className="font-semibold mb-2">Upload with Progress Bar</h2>
                <button onClick={startUpload} className="px-6 py-2 bg-green-600 text-white rounded">Start Upload</button>
                <div className="w-full h-3 bg-gray-400 rounded mt-3">
                        <div className="bg-green-500 h-3 rounded" style={{width:`${progress}%`}}></div>
                
            </div>
            <p className="mt-2">Progress:{progress}%</p>
            </div>

            {/* Folder Upload */}
            <div>
                <h2 className="font-semibold mb-2">Folder Upload</h2>
                <input type="file" webkitdirectory="true" directory="true" />
            </div>

            {/* Mobile Camera Capture */}
            <div>
                <h2 className="font-semibold mb-2">Camera Capture(MObile)</h2>
                <input type="file" accept="image/" capture="camera" /> 
            </div>
        </div>
    );
}

export default FileUploadField;