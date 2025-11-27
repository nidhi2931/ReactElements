import { useState } from 'react';

function ToggleSwitchField(){
    const [basic,setBasic] = useState(false);
    const [ios,setIos] = useState(false);
    const [iconToggle,setIconToggle] = useState(false);
    const [sizeSmall,setSizeSmall] = useState(false);
    const [sizeLarge,setSizeLarge] = useState(false);
    const [textToggle,setTextToggle] = useState(false);
    const [colorToggle,setColorToggle] = useState(false);
    const [cardToggle,setCardToggle] = useState(false);
    const [multiToggle,setMultiToggle] = useState("Monthly");

    return(
        <div className='space-y-12 p-6'>

            {/* Basic Toggle */}
            <section>
                <h2 className="font-bold mb-2">Basic Toggle</h2> 
                <label className="flex items-center gap-3 cursor-pointer">
                    <div onClick={()=>setBasic(!basic)}
                    className={`w-12 h-6 items-center gap-3 rounded-full p-1 transition ${
                        basic ? "bg-blue-600":"bg-gray-300"
                    }  `}>
                        <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition ${
                            basic ?"translate-x-6":""
                        }`} />
                    </div>
                    <span>{basic ?"ON":"OFF"}</span>
                </label>
            </section>


            {/* iOS */}
            <section>
                <h2 className="font-bold mb-2">iOS Style Toggle</h2>
                <label className="flex items-center gap-3 cursor-pointer">
                    <div onClick={()=>setIos(!ios)}
                    className={`w-14 h-8 rounded-full transition duration-300 relative ${ios ?"bg-green-500":"bg-gray-30"}`}>
                        <div className={`absolute top-1 h-6 w-6 bg-white rounded-full transition-transform ${ios?"translate-x-6":"translate-x-1"}`}/>                    </div>
                </label>
            </section>

            {/* Toggle WIth Icons */}

            <section>
                <h2 className="font-bold mb-2">Toggle With Icons</h2>
                <div onClick={()=>setIconToggle(!iconToggle)} className="flex items-center gap-4 cursor-pointer">
                    <span className="text-xl">{iconToggle ?"🌙" : "☀️"}</span>    
                    <div className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                        iconToggle?"bg-indigo-600":"bg-gray-300"
                    }`}>
                        <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition ${
                            iconToggle?"translate-x-6":""}`}/>
                    </div>
                </div>
            </section>

            {/* Small Toggle */}
            <section>
                <h2 className="font-bold mb-2"> Small Toggle
                </h2>
                <div onClick={()=>setSizeSmall(!sizeSmall)}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition cursor-pointer ${
                    sizeSmall?"bg-blue-500":"bg-gray-300"
                }`}>
                    <div className={`bg-white w-4 h-4 rounded-full transform transition ${
                        sizeSmall ?"translate-x-5":""
                    }`}/>
                </div>
            </section>

            {/* Large Toggle */}
            <section>
                <h2 className="font-bold mb-2">Large Toggle</h2>
                    <div onClick={()=>setSizeLarge(!sizeLarge)}
                    className={`w-20 h-10 flex items-center rounded-full p-1 transition  cursor-pointer ${
                        sizeLarge?"bg-purple-600":"bg-gray-300"
                    }`}>
                        <div className={`bg-white w-8 h-8 rounded-full transform transition ${
                            sizeLarge ? "translate-x-10":""
                        }`}/>
                </div>

            </section>

            {/* Text Label Toggle */}
            <section>
                <h2 className="font-bold mb-2">Text Label Toggle</h2>
                <label className="flex items-center gap-4 cursor-pointer">
                    <span className="font-medium">{textToggle ?"Enabled":"Disabled"}</span>
                    <div onClick={()=>setTextToggle(!textToggle)}
                    className={`w-12 h-6 rounded-full p-1 transition ${
                        textToggle ?"bg-green-600":"bg-gray-300"
                    }`}>
                        <div className={`bg-white h-5 w-5 rounded-full transform transition${
                            textToggle ?"translate-x-6":""
                        }`}/>
                    </div>
                </label>
            </section>

            {/* Colored Themes */}
            <section>
                <h2 className="font-bold mb-2">Color Variants</h2>
                <div onClick={()=>setColorToggle(!colorToggle)}
                className={`w-12 h-6 rounded-full p-1 transition cursor-pointer ${
                    colorToggle?"bg-red-600":"bg-gray-300"
                }`}>
                    <div  className={`bg-white h-5 w-5 rounded-full transform transition ${
                        colorToggle?"translate-x-6":""
                    }`}/>
                </div>

            </section>

            {/* Card Style Toggle */}
            <section>
                <h2 className="font-bold mb-2">Card Style Toggle Variants</h2>
                <div onClick={()=>setCardToggle(!cardToggle)}
                className={`border p-5 rounded-xl w-52 cursor-pointer transition ${
                    cardToggle?"border-blu-60 shadow-md":"border-gray-300"
                }`}>
                    <div className="flex justify-between items-center">
                        <span className="font-medium">Enable Feature</span>
                        <div className={`w-12 h-6 rounded-full p-1 transition ${
                            cardToggle ? "bg-blue-600":"bg-gray-300"
                        }`}>
                            <div className={`bg-white h-5 w-5 rounded-full transform transition ${
                                cardToggle?"translate-x-6":""
                            }`} />

                        </div>

                    </div>
                </div>
            </section>

            {/* Multi-option Toggle(Monthly/Yearly) */}
            <section>
                <h2 className="font-bold mb-2">Multi_Option Toggle(MOnthly/Yearly)</h2>
                <div className="flex items-center bg-gray-200 p-1 rounded-full w-60">
                    {["monthly","yearly","lifetime"].map((option)=>(
                        <button key={option} onClick={()=>setMultiToggle(option)}
                        className={`flex-1 py-2 rounded-full transition ${
                            multiToggle === option ? "bg-blue-600 text-white"
                            :"text-gray-600"
                        }`}>
                            {option}
                        </button>
                    ))}
                </div>
            </section>

            {/* Disabled Toggle */}
            <section>
                <h2 className ="font-bold mb-2">
                    Disabled Toggle
                </h2>
                <div className="flex items-center gap-4 opacity-50 cursor-not-allowed">
                    <div className="w-12 h-6 bg-gray-400 rounded-full p-1">
                        <div className="bg-gray-200 h-5 w-5 rounded-full" />
                    </div>
                    Disabled
                </div>
            </section>


        </div>
    );

}

export default ToggleSwitchField;