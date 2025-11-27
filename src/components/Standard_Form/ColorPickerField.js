import React,{useState} from 'react';

function ColorPickerField(){
    const [hex, setHex] = useState("#3b82f6");
    const [rgb, setRgb] = useState({r:59,g:130,b:246});
    const [rgba, setRgba] = useState({r:59,g:130,b:246,a:1});
    const [recent, setRecent] = useState([]);

    const addRecent =(color)=>{
        if(!recent.includes(color)){
            setRecent([color,...recent.splice(0,7)]);
        }
    };
    return(
        <div className="space-y-10 p-6">
            {/* Basic Color Input */}
            <div>
                <label className="block mb-1 font-medium">Basic Color Input</label>
                <input type="color" value={hex} onChange={(e)=>{setHex(e.target.value);addRecent(e.target.value);}}
                className="w-16 h-10 border rounded cursor-pointer" />
            </div>

            {/* Color Picker with default value */}
            <div>
                <label className="block mb-1 font-medium">With Default Value</label>
                <input type="color" defaultValue="#ef4444" className="w-16 h-10" />
            </div>

            {/* Disabled */}
            <div>
                <label className="block mb-1 font-medium">Disabled</label>
                <input type="color" disabled className="w-16 h-10 bg-gray-300" />
            </div>

            {/* ReadOnly */}
            <div>
                <label className="block mb-1 font-medium">ReadOnly</label>
                <input type="color" readOnly value="#000000" className="w-16 h-10 bg-gray-200" />
            </div>

            {/* Swatch Palette */}
            <div>
                <label className="block mb-2 font-medium">Color Swatch Palette</label>
                <div className="grid grid-cols-8 gap-2">
                     {["#EF4444", "#F97316", "#FACC15", "#22C55E", "#3B82F6", "#A855F7", "#EC4899", "#6B7280"]
                     .map((color)=>(
                        <div key={color} onClick={()=>{setHex(color); addRecent(color);}}
                        className="w-10 h-10 rounded cursor-pointer border"
                        style={{backgroundColor:color}}>
                            </div>
                     ))}

                </div>
            </div>

            {/* RGB Sliders */}
            <div>
                <label className="block mb-1 font-medium">RGB Sliders</label>
                <p className="text-sm mb-2">RGB: {rgb.r}, {rgb.g}, {rgb.b}</p>
                {["r","g","b"].map((key)=>(
                    <input key={key} type="range" min="0" max="255" value={rgb[key]}
                    onChange={(e)=>setRgb((prev)=>({...prev, [key]:Number(e.target.value)}))}
                    className="w-full" />
                ))}
                <div className="w-16 h-10 border mt-3 rounded"
                style={{backgroundColor:`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}}>
                  
                </div>
            </div>

            {/* RGB Sliders */}
            <div>
                <label className="block mb-1 font-medium">RGBA Picker</label>
                <p className="text-sm mb-2">
                    RGBA:{rgba.r},{rgba.g},{rgba.b},{rgba.a}
                </p>
                {["r","g","b"].map((key)=>(
                    <input key={key} type="range" min="0" max="255" value={rgba[key]}
                    onChange={(e)=>setRgba((p)=>({...p,[key]:Number(e.target.value)}))}
                    className="w-full" />
                ))}

                {/* Opacity */}
                <input type="range" min="0" max="1" step="0.01" value={rgba.a} onChange={(e)=>setRgba((p)=>({...p,a:Number(e.target.value)}))
                }
                className="w-full" />
            

            <div className="w-16 h-10 border mt-3 rounded" style={{backgroundColor:`rgba(${rgba.r}, ${rgba.g}, ${rgba.b},${rgba.a})`}}></div>
                </div>


                {/* Hex Field */}

                <div>
                    <label className="block mb-1 font-medium">HEX Input</label>
                    <input type="text" value={hex} onChange={(e)=>setHex(e.target.value)}
                    className="border p-2 rounded w-40" />

                    <div className="w-16 h-10 mt-2 border rounded" style={{background:hex}}></div>
                </div>

                {/* Gradient Picker */}
                <div>
                    <label className='block mb-1 font-medium'>Gradient Picker</label>
                    <div className="w-full h-16 rounded border" 
                    style={{background: `linear-gradient(to right , ${hex}, ${rgba.r}, ${rgba.g}, ${rgba.b})`,
                    }}></div>
                </div>

                {/* Recent Color History */}
                <div>
                    <label className='block mb-1 font-medium'>Recent Colors</label>
                    <div className="flex gap-2">
                        {recent.map((c,i)=>(
                            <div key={i} className="w-8 h-8 border rounded cursor-pointer" style={{background:c}}
                            onClick={()=>setHex(c)}></div>
                        ))}
                    </div>
                </div>

                {/* Color Preview on Hover */}
                <div>
                    <label className="block mb-1 font-medium">Hover Preview</label>
                    <input type="color" onMouseMove={(e)=>setHex(e.target.value)}
                    className="w-16 h-10 cursor-pointer" />

                    <div className="w-16 h-10 border rounded mt-2 " style={{background:hex}}></div>
                </div>


                {/* Theeme COlor Selector */}
                <div>
                    <label className="block mb-1 font-medium">Theme Colors</label>
                    <select className="border p-2 rounded" onChange={(e)=>setHex(e.target.value)}>
                        <option value="#3B82F6">Primary(Blue)</option>
                        <option value="#22C55E">Success (Green)</option>
                        <option value="#EF4444">Danger (Red)</option>
                        <option value="#F59E0B">Warning (Orange)</option>
                    </select>

                    <div className="w-16 h-10mt-2 border rounded" style={{background:hex}}></div>
                </div>
        </div>

    );


}

export default ColorPickerField;