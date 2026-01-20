import React,{useState} from 'react';


function SliderField(){
    const [basic,setBasic] = useState(30);
    const [range,setRange] = useState([20,80]);
    const [volume,setVolume] = useState(50);
    const [progress,setProgress] = useState(40);
    const [vertical,setVertical] =useState(60);
    const [disabled] = useState(70);
    const [step,setStep] = useState(10);


    return(

        <div className="space-y-10 p-6 bg-white rounded shadow">
            {/* 1. BASIC SLIDER */}
            <div>
                <label className="block mb-2 font-medium">
                    Basic Slider
                </label>
                <input type="range" min="0" max="100" value={basic} onChange={(e)=>setBasic(e.target.value)} className="w-full" />
                </div>

                {/* 2. PROGRESS SLIDER */}
                <div>
                    <label className="block mb-2 font-medium">Progress Slider</label>
                    <div className="relative w-full">
                        <input type="range" min="0" max="100" value={progress} onChange={(e)=>setProgress(e.target.value)}
                        className="w-full relative z-10" />
                        <div className="h-2 bg-gray-200 rounded absolute top-1/2 -translate-y-1/2 w-full">
                            <div className="h-2 bg-blue-500 rounded" style={{width: `${progress}%`}} />
                        </div> 
                    </div>
                    <p className="text-sm mt-1">{progress}% Completed</p>
                </div>

                {/* 3. RANGE SLIDER(MIN-MAX) */}
                <div>
                    <label className="block mb-2 font-medium">
                        Range Slider ({range[0]}-{range[1]})
                    </label>
                    <div className="flex gap-2">
                        <input type="range" min="0" max="100" value={range[0]} onChange={(e)=>setRange([Number(e.target.value), range[1]])} 
                        className="w-full" />

                        <input type="range" min="0" max="100" value={range[1]} onChange={(e)=>setRange([range[0],Number(e.target.value)])}
                        className="w-full" />

                    </div>
                </div>

                {/* 4. VOLUME SLIDER */}
                <div>
                    <label className="block mb-2 font-medium">
                        Volume Control
                    </label>
                    <input type="range" min="0" max="100" value={volume} onChange={(e)=>setVolume(e.target.value)} 
                    className="w-full accent-green-500" />
                    <p className="text-sm mt-1">Volume:{volume}%</p>
                </div>

                {/* 5. STEP SLIDER */}
                <div>
                    <label className="block mb-2 font-medium">Step Slider (Step:10)</label>
                    <input type="range" min="0" max="100" step="10" value={step} onChange={(e)=>setStep(e.target.value)} 
                    className="w-full" />
                    <p className="text-sm mt-1">Value:{step}</p>
                </div>

                {/* 6. DISABLE SLIDER */}
                <div>
                    <label className="block mb-2 font-medium">Disabled Slider</label>
                    <input type="range" value={disabled} disabled className="w-full opacity-50 cursor-not-allowed" />

                </div>

                {/* 7. VERTICAL SLIDER  */}
                <div>
                    <label className="block mb-2 font-medium">Vertical Slider</label>
                    <div className="h-40 flex items-center">
                        <input type="range" min="0" max="100" value={vertical} onChange={(e)=>setVertical(e.target.value)} 
                        className="rotate-[-90deg] w-40"/>
                    </div>
                    <p className="text-sm mt-1">Value:{vertical}</p>
                </div>
        </div>
    );

}

export default SliderField;
