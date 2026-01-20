import React,{useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {FiUpload,FiFile,FiTrash2} from 'react-icons/fi';

function FileDragDropField(){
    const [files,setFiles] = useState([]);
    const [singleFile,setSingleFile] = useState(null);


    // BASIC DROPZONE
    const basicDropzone = useDropzone({
        onDrop:(acceptedFiles) =>setFiles(acceptedFiles),

    });

    // SINGLE FILE DROPZONE
    const singleDropzone = useDropzone({
        multiple:false,
        onDrop : (acceptedFiles) =>setSingleFile(acceptedFiles[0]),
    });

    // IMAGE ONLY DROPZONE
    const imageDropzone = useDropzone({
        accept:{"image/*":[]},
        onDrop : (acceptedFiles) => setFiles(acceptedFiles),

    });

    // MAX SIZE DROPZONE(2MB)
    const sizeDropzone = useDropzone({
        maxSize : 2*1024*1024,
        onDrop:(acceptedFiles) => setFiles(acceptedFiles),
    });

    const dropzoneStyle = (isActive) =>
        `border-2 border-dashed rounded p-6 text-center cursor-pointer transition
        ${isActive ? "border-blue-500 bg-blue-50":"border-gray-300"}`;
    
    return(
        <div className="space-y-10 p-6 bg-white rounded shadow">
            {/* BASIC DRAG AND DROP */}

            <div>
                <label className="block mb-2 font-medium"> Basic Drag & Drop</label>
                <div {
                    ...basicDropzone.getRootProps()}
                    className={dropzoneStyle(basicDropzone.isDragActive)
                    
                }>
                    <input {...basicDropzone.getInputProps()} />
                    <FiUpload className="mx-auto text-3xl mb-2 text-gray-400" />
                    <p>Drag & Drop files here or click</p>
                </div>
                <ul className="mt-2 text-sm">
                    {files.map((f)=>(
                        <li key = {f.name}>{f.name}</li>
                    ))}
                </ul>
            </div>

            {/* Single File Upload */}
            <div>
                <label className="block mb-2 font-medium">Single File Upload</label>
                <div 
                {...basicDropzone.getRootProps()}
                className={dropzoneStyle(singleDropzone.isDragActive)}>
                    <input {...singleDropzone.getInputProps() } />
                    <p>Upload one File Only</p>

                    
                </div>
                {singleFile && (
                    <p className="mt-2 flex items-center gap-2">
                        <FiFile />{singleFile.name}
                    </p>
                )}
            </div>

            {/* 3. Image Upload */}
            <div>
                <label className="block mb-2 font-medium">
                    Image Upload
                </label>
                <div {...imageDropzone.getRootProps()}
                className={dropzoneStyle(imageDropzone.isDragActive)}>
                    <input {...imageDropzone.getInputProps()} />
                    <p>Upload images only</p>

                </div>

                <div className="flex gap-3 mt-3">
                    {files.map((file)=>(
                        <img key={file.name} src={URL.createObjectURL(file)} alt="" className="w-20 h-20 object-cover rounded" />
                    ))}
                </div>
            </div>
            {/* 4. FILE SIZE LIMIT*/}
            <div>
                <label className="block mb-2 font-medium">
                    Max Size(2MB)
                </label>
                <div {...sizeDropzone.getRootProps()}
                className={dropzoneStyle(sizeDropzone.isDragActive)}>
                    <input {...sizeDropzone.getInputProps()} />
                    <p>File must be under 2MB.</p>
                </div>
            </div>

            {/* 5. FILE LIST WITH REMOVE */}
            <div>
                <label className="block mb-2 font-medium">File List with Remove</label>
                <div {...basicDropzone.getRootProps()} className={dropzoneStyle(basicDropzone.isDragActive)}>
                    <input {...basicDropzone.getInputProps()} />
                    <p>Upload Fields</p>
                </div>
                <ul className="mt-3 space-y-2">
                    {files.map((file,i)=>(
                        <li key={i} className="flex justify-center items-center border p-2 rounded">
                            <span>{file.name}</span>
                            <FiTrash2 className="cursor-pointer text-red-500" 
                            onClick={()=>setFiles(files.filter((_,idx) => idx !== i))}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}

export default FileDragDropField;
