import React, { useState } from "react";

function MultiSelectField(){
    const fruits = ["Apple","Orange","Banana","Mango"];
    const people=[
        {name:"John",avatar:"https://i.pravatar.cc/40?img=1"},
        {name:"Emma",avatar:"https://i.pravatar.cc/40?img=2"},
        {name:"Avva", avatar:"https://i.pravatar.cc/40?img=3"},
    ];

    const grouped ={
        Tropical:["Mango","Papaya","Pineapple"],
        Citrus:["Orange","Lemon"],
    };

    const [searchVal,setSearchVal] = useState("");
    const [selectedTags,setSelectedTags] =useState([]);
    const [limitSelected,setLimitSelected] = useState([]);
    const [customSelected,setCustomSelected] = useState([]);
    const [avatarSelected,setAvatarSelected] = useState([]);
    const [checkAllSelected,setCheckAllSelected] = useState([]);
    const handleTagSelect = (item)=>{
        if(!selectedTags.includes(item)){
            setSelectedTags([...selectedTags,item]);
        }
    } ;

    const removeTag =(tag)=>{
        setSelectedTags(selectedTags.filter((t)=>t !== tag));
    };

    const handleLimitSelected=(item)=>{
        if(limitSelected.length>=3 && !limitSelected.includes(item)) return ;
        setLimitSelected(
            limitSelected.includes(item)? limitSelected.filter((i)=>i !== item)
            : [...limitSelected, item]
        );
    };

    const toggleCheckAll =()=>{
        if (checkAllSelected.length=== fruits.length){
            setCheckAllSelected([]);
        }else{
            setCheckAllSelected(fruits);
        }
    };
    const toggleItem = (item) => {
    setCustomSelected(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

    return(
            <div className="space-y-8 p-5">
                {/* Basic HTML Multi Select */}
                <div>
                    <h3 className="font-semibold">Basic HTML Multi-Select</h3>
                    <select multiple className="border p-2 rounded w-60 h-28">
                        {fruits.map((f)=>(
                            <option key={f}>{f}</option>
                        ))}
                    </select>
                </div>

                {/* Checkbox MultiSelect */}
                <div>
                    <h3 className="font-semibold">Multi Select with Checkboxes</h3>
                    <div className="border p-3 w-60 rounded sapce-y-1">
                        {fruits.map((f)=>(
                            <label key={f} className="flex items-center gap-2">
                                <input type="checkbox" />
                                {f}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Searchable Multi Select */}
                <div>
                    <h3 className="font-semibold">Searchable Multi Select</h3>
                    <input type="text" placeholder="Search..." className="border p-2 rounded mb-2 w-60"
                    value={searchVal} onChange={(e)=>setSearchVal(e.target.value)} />
                    <div className="boredr p-3 w-60 rounded h-28 overflow-auto">
                        {fruits.filter((x)=>x.toLowerCase().includes(searchVal.toLowerCase()))
                        .map((f)=>(
                            <label key={f} className="flex items-center gap-2">
                                <input type="checkbox" />{f}
                            </label>
                        ))}
                    </div>
                </div>


                {/* Chip/Tag Multi Select */}
                <div>
                    <h3 className="font-semibold">Tag/Chip Multi-Select</h3>
                    <div className="flex gap-2 flex-wrap mb-2">
                        {selectedTags.map((tag)=>(
                            <span key={tag} className="px-3 py-1 bg-blue-200 rounded-full flex items-center gap-1">
                                {tag}
                                <button className="text-red-600" onClick={()=>removeTag(tag)}>
                                    X
                                </button>
                            </span>
                        ))}
                    </div>
                    <div className="border p-3 w-60 rounded">
                        {fruits.map((f)=>(
                            <button key={f} onClick={()=>handleTagSelect(f)}
                            className="block w-full text-left hover:bg-gray-200 p-1 rounded">
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Custom Dropdown MultiSelect */}
                <div>
                    <h3 className="font-semibold">Custom Dropdown Multi Select</h3>
                    <div className="border rounded p-3 w-60">
                        {fruits.map((f)=>(
                            <label key={f} className="flex items-center gap-2">
                                <input type="checkbox" onChange={()=>setCustomSelected((prev)=>prev.includes(f)?prev.filter((i)=>i !==f):[...prev,f])}
                                checked={customSelected.includes(f)} />
                                {f}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Multi Select with Avatars */}
                <div>
                    <h3 className="font-semibold">MultiSelect with Avatars</h3>
                    <div className="border rounded p-3 w-60 space-y-2">
                        {people.map((p)=>(
                            <label key={p.name} className="flex items-center gap-2">
                                <input type="checkbox" checked={avatarSelected.includes(p.name)}
                                onChange={()=>setAvatarSelected(avatarSelected.includes(p.name)?avatarSelected.filter((i)=>i !==p.name):[...avatarSelected,p.name])}
                                />
                                <img src={p.avatar} className="w-6 h-6 rounded-full" />
                                {p.name}
                            </label>
                        ))}
                    </div>
                </div>

                        {/* Multi Select with Limit (max 3) */}
                    
                <div>
                        <h3 className="font-semibold">MultiSelect with Limit(max 3)</h3>
                        <p className="text-sm text-gray-500 mb-2">You can select upto 3 options.</p>
                        <div className="border p-3 w-60 rounded">
                            {fruits.map((f)=>(
                                <label key={f} className="flex items-center gap-2">
                                    <input type="checkbox" checked ={limitSelected.includes(f)} onChange={()=>handleLimitSelected(f)} />
                                    {f}
                                </label>
                            ))}
                        </div>
                </div>

                {/* Grouped Multi Select */}
                <div>
                    <h3 className="font-semibold">Grouped Multi Select</h3>
                    <div className="border p-3 w-60 rounded space-y-3">
                        {Object.entries(grouped).map(([group,items])=>(
                            <div key={group}>
                                <h4 className="font-medium text-gray-700">{group}</h4> 
                                {items.map((item)=>(
                                    <label key={item} className="flex items-center gap-2 ml-2">
                                        <input type="checkbox" />
                                        {item}
                                    </label>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* MultiSelect with Remove Icons */}
                      <div>
                        <h3 className="font-semibold">Multi-Select with Remove Icons</h3>
                        <div className="flex gap-2 flex-wrap mb-2">
                        {customSelected.map((item) => (
                            <span
                            key={item}
                            className="px-3 py-1 bg-purple-200 rounded-full flex items-center gap-1"
                            >
                            {item}
                            <button
                                onClick={() =>
                                setCustomSelected(customSelected.filter((i) => i !== item))
                                }
                                className="text-red-600"
                            >
                                ✕
                            </button>
                            </span>
                        ))}
                        </div>
                    </div>


                {/* Card Grid MultiSelect */}
                <div>
                    <h3 className="font-semibold">Card Grid MultiSelect</h3>
                    <div className="grid grid-cols-2 gap-3 w-60">
                        {fruits.map((f)=>(
                            <label key={f} className="border p-2 rounded-lg flex gap-2 items-center shadow-sm">
                                <input type="checkbox" />
                                {f}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Multi Select with Check All */}
                <div>
                    <h3 className="font-semibold">MultiSelect with Check All</h3>
                    <button onClick={toggleCheckAll} className="px-3 py-1 bg-blue-500 text-white rounded mb-2">
                        {checkAllSelected.length  === fruits.length ? "Unselect All":"Select All"}
                    </button>

                    <div className="border p-3 w-60 rounded">
                        {fruits.map((f)=>(
                            <label key={f} className="flex items-center gap-2">
                                <input type="checkbox" 
                                checked={checkAllSelected.includes(f)}
                                />
                                {f}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Badge Count MultiSelect */}
                <div>
                    <h3 className="font-semibold">Badge Count Multi-Select</h3>

                    <button className="relative px-4 py-2 bg-green-500 text-white rounded">
                    Selected
                    <span className="absolute -top-2 -right-2 bg-white text-green-600 px-2 py-1 rounded-full text-xs">
                        {customSelected.length}
                    </span>
                    </button>
                </div>

                {/* Button with badge count */}
                <div>
                    <button className="relative px-4 py-2 bg-green-500 text-white rounded">
                    Selected
                    <span className="absolute -top-2 -right-2 bg-white text-green-600 px-2 py-0.5 rounded-full text-xs shadow">
                        {customSelected.length}
                    </span>
                    </button>
                </div>

                 {/* Options list */}
                <div className="border p-3 rounded w-64">
                    {fruits.map((f) => (
                    <label key={f} className="flex items-center gap-2 mb-1">
                        <input
                        type="checkbox"
                        checked={customSelected.includes(f)}
                        onChange={() => toggleItem(f)}
                        className="w-4 h-4"
                        />
                        <span>{f}</span>
                    </label>
                    ))}
                </div>

                {/* Selected preview (optional) */}
                <div>
                    <strong>Selected items:</strong>{" "}
                    {customSelected.length ? customSelected.join(", ") : "None"}
                </div>



            </div>
    );
}

export default MultiSelectField;