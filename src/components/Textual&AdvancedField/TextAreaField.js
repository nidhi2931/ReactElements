import React, {useState, useEffect, useRef} from 'react';

function TextAreaField(){
    const [basic, setBasic] = useState("");
    const [labeled,setLabeled] = useState("");
    const [counter,setCounter] = useState("");
    const [validated, setValidated] = useState("");
    const [markdown,setMarkdown] = useState("");

    const autoRef = useRef(null);
    const uncontrolledRef = useRef(null);

    // auto-resize effect

    useEffect(()=>{
        if(autoRef.current){
            autoRef.current.style.height = "auto";
            autoRef.current.style.height = autoRef.current.scrollHeight + "px";
        }
    },[basic]);

    const handleUncontrolledSubmit =()=>{
        alert(uncontrolledRef.current.value);

    };
    
    const handleValidation =()=>{
        if(!validated.trim()){
            alert("Textarea is required!");
        }
    };
    return(
        <div style={{padding:20,maxWidth:700}}>
            {/* 1. Basic Controlled */}
            <h4>1. Basic Controlled </h4>
            <textarea rows={3} value={basic} onChange={(e)=>setBasic(e.target.value)}
            placeholder = "Basic textarea" />

            {/* 2. Labeled */}
            <h4>2. Labeled TextArea </h4>
            <label>Description</label>
            <textarea rows={3} value={labeled} onChange={(e)=>setLabeled(e.target.value)} />
            
            {/* 3. Disabled/ReadOnly */}
            <h4>3. Disabled/Read-Only</h4>
            <textarea disabled value="Disabled textarea" />
            <br />
            <textarea readOnly value="ReadOnly textarea" />

            {/* 4. Auto Resize */}
            <h4>4. Auto Resizing</h4>
            <textarea ref={autoRef} rows={1} value={basic} onChange={(e)=>setBasic(e.target.value)}
            style={{overflow:"hidden"}} />

            {/* 5. Character Counter */}

            <h4>5.Character Counter</h4>
            <textarea maxLength={100} value={counter} onChange={(e)=>setCounter(e.target.counter)} />
                <p>{counter.length}/100</p>

            {/* 6. Validation */}
            <h4>6. Validation</h4>
            <textarea value={validated} onChange={(e)=>setValidated(e.target.value)} onBlur={handleValidation} />

            {/* 7. Uncontrolled */}
            <h4>7. Uncontrolled (useRef)</h4>
            <textarea ref={uncontrolledRef} rows={3} />
            <button onClick={handleUncontrolledSubmit}>Read Value</button> 

            {/* 8. Markdown style textarea */}
            <h4>8. Markdown Textarea (Plain)</h4>
            <textarea rows={4} value={markdown} onChange={(e)=>setMarkdown(e.target.value)} placeholder="Write  markdown here"/>
                <pre>{markdown}</pre>

            {/* 9. Form Submit */}
            <h4>9. Form Submit</h4>
            <form onSubmit={(e)=>{e.preventDefault();
                alert("Submitted:" +basic);
            }}>
                <textarea value={basic} onChange={(e)=>setBasic(e.target.value)} />
                <button type="submit">Submit</button>

            </form>

            {/* 10. Reusable Pattern */}
            <h4>10. Reusable Textarea Component</h4>
            <ReusableTextarea label ="Reusable Textarea" value={basic} onChange={setBasic} rows={3} />
            </div>
    );
}

// Reusable component inside same file
function ReusableTextarea({label,value,onChange,...props}){
    return(
        <div>
            <label>{label}</label>
            <textarea value={value} onChange={(e)=>onChange(e.target.value)} {...props} />
        </div>
    );
}

export default TextAreaField;