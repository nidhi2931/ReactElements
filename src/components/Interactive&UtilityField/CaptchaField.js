import React, {useState} from 'react';


function CaptchaField(){
    const [textCaptcha,setTextCaptcha] = useState(generateCaptcha());
    const [textInput, setTextInput] = useState("");

    const [mathAnswer,setMathAnswer] = useState("");
    const [mathCaptcha] = useState({
        a:Math.floor(Math.random()*10),
        b:Math.floor(Math.random()*10),
    });

    const [checkbox,setCheckbox] = useState(false);
    const [slider,setSlider] = useState(0);

    function generateCaptcha(){
        return Math.random().toString(36).substring(2,8).toUpperCase();

    }

    return(
        <div className="space-y-10 p-6 bg-white rounded shadow">
            {/* TEXT CAPTCHA */}
            <div>
                <label className="block mb-2 font-medium">Text Captcha</label>
                <div className="flex items-center gap-4">
                    <div className="px-4 py-2 bg-gray-200 font-mono tracking-widest text-lg">
                        {textCaptcha}
                    </div>
                    <button onClick={()=>setTextCaptcha(generateCaptcha())}
                        className="text-blue-500 text-sm">Refresh</button>
                </div>
                <input type="text" placeholder = "Enter Captcha" value={textInput} onChange={(e)=>setTextInput(e.target.value)}
                className="mt-2 border p-2 rounded w-48"/>
            </div>

            {/* MATh CAPTCHA */}
            <div>
                <label className="block mb-2 font-medium">Math Captcha</label>
                <p className="mb-2">
                    What is <b>{mathCaptcha.a}</b> +<b>{mathCaptcha.b}</b>
                </p>
                <input type="number" value={mathAnswer}
                onChange={(e)=>setMathAnswer(e.target.value)}
                className="border p-2 rounded w-32"/>
            </div>

            {/* CHECKBOX CAPTCHA */}
            <div>
                <label className="block mb-2 font-medium">Checkbox Captcha</label>
                <label className="flex items-center gap-2 border p-3 rounded w-fit">
                    <input type="checkbox" checked ={checkbox} onChange={(e)=>setCheckbox(e.target.checked)} />
                    <span>I am not a robot</span>
                </label>
            </div>

            {/* SLIDER CAPTCHA */}
            <div>
                <label className="block mb-2 font-medium">Slider Captcha</label>
                <input type="range" min="0" max="100" value={slider} onChange={(e)=>setSlider(e.target.value)}
                className="w-full"/>
                <p className="text-sm mt-1">Slide to 100 to verify (Current:{slider})</p>
            </div>

            {/* IMAGE CAPTCHA (UI ONLY) */}
            <div>
                <label className="block mb-2 font-medium">Image Captcha(UI Demo)</label>
                <div className="grid grid-cols-4 gap-2">
                    {[1,2,3,4].map((i)=>(
                        <div key={i} className="h-20 bg-gray-200 flex items-center justify-center text-sm">
                        Img {i}
                        </div>
                    ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                    Select images containing traffic lights (demo only)
                </p>
            </div>

            {/* GOOGLE RECAPTCHA(INTEGRATION READY) */}
            <div>
                <label className="block mb-2 font-medium">Google reCaptcha</label>

                <div className="border p-4 rounded bg-gray-50">
                    <p className="text-sm text-gray-600">
                        Use<code>react-google-recaptcha</code>
                    </p>
                    <pre className="text-xs bg-gray-100 p-2 mt-2 rounded">
                        {`<ReCAPTCHA sitekey="YOUR SITE KEY" onChange={(token)=>console.log(token)}/>`}
                    </pre>
                </div>
            </div>
        </div>
    )


}

export default CaptchaField;