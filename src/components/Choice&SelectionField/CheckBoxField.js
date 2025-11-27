import React, {useState, useRef, useEffect} from 'react';


function CheckBoxField(){
    const [indeterminate,setIndeterminate] = useState(true);
    const masterRef = useRef(null);

    useEffect(()=>{
        if(masterRef.current){
            masterRef.current.indeterminate= indeterminate;

        }

    },[indeterminate]);
    return(
        <div className="space-y-8 p-5">
            {/* Basic CheckBox */}
            <div>
                <h3 className="font-semibold">Basic Checkbox</h3>
                <input type="checkbox" className="w-5 h-5" />
            </div>

            {/* Checkbox With Label */}
            <div>
                <h3 className="font-semibold">Checkbox with Label</h3>
                <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-5 h-5" />
                    <span>Accept Terms</span>
                </label>
            </div>

            {/* Disabled Checkbox */}
            <div>
                <h3 className="font-semibold">Disabled Checkbox</h3>
                <input type="checkbox" disabled className="w-5 h-5" />

            </div>

            {/* Default Checked */}
            <div>
                <h3 className="font-semibold">Checked by Default</h3>
                <input type="checkbox" defaultChecked className="w-5 h-5" />

            </div>

            {/* Checkbox Group */}
            <div>
                <h3 className="font-semibold">Checkbox Group</h3>
                <div className="flex flex-col gap-1">
                    <label><input type="checkbox" />Apple</label>
                    <label><input type="checkbox" />Orange</label>
                    <label><input type="checkbox" />Mango</label>
                </div>
            </div>

            {/* Custom Styled Checkbox */}

            <div className="font-semibold">Custom Styles Checkbox
            <label className="flex items-center gap-2">
                <input type="checkbox" className="appearance-none w-5 h-5 border-2 rounded-smborder-gray-400 checked:bg-blue-500 checked:border-blue-500" />
                Custom Box
            </label>
            </div>

            {/* Toggle Switch */}
            <div>
                <h3 className="font-semibold">Toggle Switch</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer"  />
                    <div className="w-11 h-6  bg-gray-300 rounded-full peer-checked :bg-green-500 transition-all"></div>
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
                </label>
            </div>

            {/* checkbox with description */}
            <div>
                <h3 className="font-semibold">Checkbox with Description</h3>
                <label className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1 w-5 h-5" />
                    <span>
                        Enable Notifications
                        <p className="text-sm text-gray-500">
                            You will receive updates via email.
                        </p>
                    </span>
                </label>
            </div>

            {/* Indeterminate Checkbox */}
            <div>
                <h3 className="font-semibold">Indeterminate</h3>
                <input type='checkbox' ref={masterRef} onClick={()=>setIndeterminate(!indeterminate)}
                className="w-5 h-5" />
            </div>

            {/* Card style checkbox */}
            <div>
                <h3 className="font-semibold">Card Style Checkbox</h3>
                <label className="border p-3 rounded-lg flex items-center gap-3 shadow-sm">
                    <input type="checkbox" className="w-5 h-5" />
                    <span className='font-medium'>Card Option</span>

                </label>
            </div>


            {/* Checkbox With Image */}
            <div>
                <h3 className="font-semibold">Checkbox with Image</h3>
                <label className='flex items-center gap-3'>
                    <input type="checkbox" className="w-5 h-5" />
                    <img src="https://via.placeholder.com/50" alt="img" className="rounded-lg" />
                </label>
            </div>



        </div>



    );
}

export default CheckBoxField;