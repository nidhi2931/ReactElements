import React, {useState} from 'react';

function RadioGroupField(){
    const [selected,setSelected]= useState("monday");
    const [gender,setGender] = useState("male");
    const [plan,setPlan] = useState("basic");
    const [pillSelect,setPillSelect] = useState("android");
    const [cardSelect,setCardSelect] = useState("visa");
    const [emojiSelect,setEmojiSelect] = useState("happy");



    return(
        <div className="p-6 space-y-10">
            {/* Standard Radio */}
            <div>
                <h2 className="font-semibold mb-2">Standard Radio</h2>
                <label className="flex items-center gap-2">
                    <input type="radio" name="std" checked onChange={()=>{}} />
                    Default Example
                </label>
            </div>

            {/* Vertical Radio List */}
            <div>
                <h2 className="font-semibold mb-2">Vertical Radio Group</h2>
                {["Monday","Tuesday","Wednesday","THrusday","Friday","Saturday","Sunday"].map((day)=>(
                    <label key={day} classname="flex items-center gap-2 mb-1">
                        <input type="radio" name="days"
                        checked={selected===day.toLocaleLowerCase()}
                        onChange={()=>setSelected(day.toLocaleLowerCase())} />
                        {day}
                    </label>
                ))}
            </div>

            {/* Horizontal Radio Group */}
            <div>
                <h2 className="font-semibold mb-2">Horizontal Radio</h2>
                <div className="flex gap-6">
                    {["Yes","No"].map((opt)=>(
                        <label key={opt} className="flex items-center gap-2">
                            <input type="radio" name="yn" checked={selected === opt.toLowerCase()} 
                            onChange={()=>setSelected(opt.toLowerCase())}/>
                            {opt}
                        </label>
                    ))}
                </div>
            </div>

            {/* Gender Radio (Common UI) */}
            <div>
                <h2 className="font-semibold mb-2">Gender Radio</h2>
                <div classNmae="flex gap-10">
                    {["male","female","other"].map((g)=>(
                        <label key={g} className="flex items-center gap-2">
                            <input type="radio" name="gender" checked={gender===g}
                            onChange={()=>setGender(g)} />
                            {g.charAt(0).toUpperCase()+g.slice(1)}
                        </label>
                    ))}
                </div>
            </div>

            {/* Radio with Description */}
            <div>
                <h2 className="font-semibold mb-2">Radio with Description</h2>
                <div className="space-y-3">
                   {[
                        { id: "basic", title: "Basic", desc: "Good for individuals" },
                        { id: "pro", title: "Pro", desc: "Best for teams" },
                        { id: "enterprise", title: "Enterprise", desc: "Large companies" }
                    ].map((p)=>(
                        <label key={p.id} className="flex items-start gap-3 p-3 border rounded-lg cursor-pointer">
                            <input type="radio" name="plan" checked={plan===p.id} onChange={()=>setPlan(p.id)} />
                            <div>
                                <p className="font-semibold">{p.title}</p>
                                <p className="text-sm text-gray-600">{p.desc}</p>
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            {/* Button Style */}

            <div>
                <h2 className="font-semibold mb-2">Pill Button Radio</h2>
                <div className="flex gap-3">
                    {["iOS","Android","Web"].map((opt)=>(
                        <button key={opt} onClick ={()=>setPillSelect(opt.toLowerCase())}
                        className={`px-4 py-2 rounded-full border ${
                            pillSelect === opt.toLowerCase()?"bg-blue-600 text-white":"bg-white text-gray-700"
                        }`}>{opt}</button>
                    ))}
                </div>
            </div>
<div>
        <h2 className="font-semibold mb-2">7. Card Style Radio</h2>
        <div className="flex gap-4">
          {[
            { id: "visa", label: "Visa" },
            { id: "mastercard", label: "MasterCard" },
            { id: "rupay", label: "Rupay" }
          ].map((card) => (
            <div
              key={card.id}
              onClick={() => setCardSelect(card.id)}
              className={`border p-4 w-28 text-center rounded-lg cursor-pointer ${
                cardSelect === card.id ? "border-blue-500 shadow" : ""
              }`}
            >
              <input
                type="radio"
                name="card"
                checked={cardSelect === card.id}
                readOnly
              />
              <p>{card.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Emoji Radio Group */}
      <div>
        <h2 className="font-semibold mb-2">Emoji Radio</h2>
        <div className="flex gap-6 text-2xl">
            {["happy", "neutral", "sad"].map((m)=>(
                <label key={m} className="cursor-pointer">
                    <input type="radio" name="emoji" className="hidden" onChange={()=>setEmojiSelect(m)} />
                    <span className={emojiSelect === m ? "border-b-4 border-blue-600 pb-1":""}>
                        {m === "happy" ? "😊" : m === "neutral" ? "😐" : "😢"}
                        </span>
                </label>
            ))}
        </div>
      </div>

      {/* Disabled Radio */}
      <div>
        <h2 className="font-semibold mb-2" >Disabled Radio</h2>
        <label className="flex items-center gap-2">
            <input type="radio" disabled />
            Disabled Radio Option
        </label>
      </div>

      {/* Radio with Icons */}
      <div>
        <h2 className="font-semibold mb-2">Radio with Icons</h2>
            <div className="flex gap-6">
                <label className="flex items-center gap-2">
                    <input type="radio" name="type" />
                    Mobile
                </label>

                <label className="flex items-center gap-2">
                    <input type="radio" name="type" />
                    Desktop
                </label>
            </div>
      </div>

      {/* Inline Badge Radio */}
      <div>
        <h2 className="fon-semibold mb-2">Radio Badge</h2>
        <label className="flex items-center gap-2">
            <input type="radio" name="badge" defaultChecked />
            Free<span className="bg-green-200 px-2 rounded text-xs">Popular</span>
        </label>
      </div>

      {/* Radio Button Group(Filled Button Style) */}
     <div>
        <h2 className="font-semibold mb-2">12. Button Group Radio</h2>
        <div className="inline-flex border rounded-lg overflow-hidden">
          {["Low", "Medium", "High"].map((lvl) => (
            <button
              key={lvl}
              className="px-4 py-2 border-r last:border-none"
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      </div>

      
    );
}

export default RadioGroupField;