import React,{useState} from 'react';

function RangeSliderField(){
        const [value1, setValue1] = useState(40);
        const [value2, setValue2] = useState(50);
        const [value3, setValue3] = useState(80);
        const [opacity,setOpacity] = useState(0.5);
        const [temperature, setTemperature] = useState(20);
        const [min,setMin] = useState(20);
        const [max, setMax] = useState(80);

        const handleMin =(e)=>{
            if(Number(e.target.value)<max) setMin(Number(e.target.value));

        };
        const handleMax =(e)=>{
            if(Number(e.target.value)>min) setMax(Number(e.target.value));

        };
        
    return(
        
        <div className="p-6 space-y-10">
            {/* Basic Slider */}
            <div>
                <h2 className="font-semibold mb-2">Basic Range Slider</h2>
                <input type="range" value={value1} onChange={(e)=>setValue1(e.target.value)}
                className="w-full" />
                <p>Value:{value1}</p>
            </div>

            {/* Range with Steps */}
            <div>
                <h2 className="font-semibold mb-2">Slider with Steps(0 to 100 by 10)</h2>
                <input type="range" 
                min="0"
                max="100"
                step="10"
                value={value2}
                onChange={(e)=>setValue2(e.target.value)}
                className="w-full" />
                <p>Value:{value2}</p>
            </div>

            {/* Disabled Range */}
            <div>
                <h2 className="font-semibold mb-2">Disabled Slider</h2>
                <input type="range" disabled className="w-full opacity-50" />
                
            </div>

            {/* ReadOnly Range */}

            <div>
                <h2 className="font-semibold mb-2">ReadOnly Slider</h2>
                <input type="range" value="40" readOnly className="w-full bg-gray-300" />
            </div>

            {/* Slider with Label */}
            <div>
                <h2 className="font-semibold mb-2">Slider with Label</h2>
                <label>Volume:{value3}</label>
                <input type="range" min="0" max="100" value={value3} onChange={(e)=>setValue3(e.target.value)}
                className="w-full mt-2" />
            </div>

            {/* Vertical Slider */}
            <div>
                <h2 className="font-medium mb-2">Vertical Slider</h2>
                <div className="h-40 flex items-center">
                    <input type="range" orient="vertical" className="h-40" style={{writingMode:"bt-lr"}}
                    value={value3} onChange={(e)=>setValue3(e.target.value)} />
                </div>
            </div>

            {/* Color Slider */}
            <div>
                <h2 className="font-semibold mb-2">Color Slider</h2> 
                <input type="range" value={value1} min="0" max="255" onChange={(e)=>setValue1(e.target.value)}
                className="w-full" />
                <div className="w-20 h-10 mt-2 rounded border" 
                style ={{backgroundColor:`rgb(${value1},100,100)`}}>
                </div>
            </div>

            {/*  Temperature Slider*/}
            <div>
                <h2 className="font-semibold mb-2">Temperature Slider(-20C to 50C)</h2>
                <input type="range"  min="-20" max="50" value={temperature} onChange={(e)=>setTemperature(e.target.value)} className="w-full" />
                <p>Temperature:{temperature}C</p> 
            </div>

            {/* Opacity Slider */}

            <div>
                <h2 className="font-semibold mb-2">Opacity Slider</h2>
                <input type="range" min="0" max="1" step="0.1" value={opacity} onChange={(e)=>setOpacity(e.target.value)}
                className="w-full" />
                <div className="w-20 h-10 border mt-2 rounded" style={{background:`rgba(0,0,0,${opacity})`}}></div>
            </div>

            {/* Progress Style Slider */}
            <div>
                <h2 className="font-semibold mb-2">Progress Bar Slider</h2>
                <div className="relative w-full h-3 bg-gray-200 rounded">
                    <div className="absolute h-3 bg-blue-500 rounded" style={{width:`${value1}%`}}></div>
                </div>

                <input type="range" value={value1} 
                onChange={(e)=>setValue1(e.target.value)}
                className="w-full mt-2" />
            </div>

            {/* Dual Thumb Range Slider */}
            <div>
                <h2 className="font-semibold mb-2">Dual Range Slider(Min-Max)</h2>
                <div className="relative w-full bg-gray-200 rounded">
                    <div className="absolute h-3 bg-blue-300 rounded" style={{left:`${min}%`, right:`${100-max}`}}></div>
                </div>

                <div className="relative mt-2">
                    <input type="range" min="0" max="100" value={min} onChange={handleMin} className="absolute w-full pointer-events-auto" />
                    <input type="range" min="0" max="100" value={max} onChange={handleMax} className="absolute w-full pointer-events-auto" />

                </div>
                <p className="mt-4">Range:{min}-{max}</p>
            </div>

            {/* Emoji Slider */}
            <div>
                <h2 className="font-semiold mb-2">Emoji Mood Slider</h2>
                <input type="range" min="0" max="4" value={value1} onChange={(e)=>setValue1(e.target.value)} className="w-full" />
                <p className="text-4xl mt-2">
                    {["😢", "😐", "🙂", "😀", "🤩"][Math.floor(value1)]}
                </p>
            </div>

            {/* Rating Slider */}
            <div>
                <h2 className="font-semibold mb-2">Rating Slider(0 -5 )</h2>
                <input type="range" min="0" max="5" step="1" value={value1} onChange={(e)=>setValue1(e.target.value)}  className="w-full" />
                <p>{"⭐".repeat(value1)}</p>
            </div>




        </div>
    );

}

export default RangeSliderField;