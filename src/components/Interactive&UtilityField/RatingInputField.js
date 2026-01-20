import React,{useState} from 'react';

function RatingInputField(){
    const [star,setStar] = useState(3);
    const [halfStar,setHalfStar] = useState(2.5);
    const [emoji,setEmoji] = useState(3);
    const [heart,setHeart] = useState(4);
    const [number,setNumber] = useState(7);
    const [readOnly] = useState(4);

    // Star renderer
    const renderStars = (value,setter,total=5)=>(
        <div className="flex gap-1">
            {[...Array(total)].map((_,i)=>(
                <span key={i} onClick={()=>setter(i+1)}
                className={`text-2xl cursor-pointer  ${
                    i<value ?"text-yellow-400":"text-gray-300" 
                
                }`}>*</span>
            ))}
        </div>


    );

    // Half Star
    const renderHalfStars =()=>(
        <div className="flex gap-1">
            {[...Array(5)].map((_,i)=>(
                <div key={i} className="relative text-2xl cursor-pointer"
                onClick={()=>setHalfStar(i+0.5)}>
                    <span className="text-gray-300">*</span>
                    {halfStar >= i+0.5 && (
                        <span className="absloute left-0 top-0 text-yellow-400 overflow-hidden"
                        style={{width:halfStar >=i+1 ?"100%":"50%"}}>*</span>
                    )}
                    </div>
            ))}
        </div>
    );

    // Emoji Rating
    const emojis = ["😡", "😕", "😐", "😊", "😍"];

    // Heart Rating
    const renderHearts = () =>(
        <div className="flex gap-1">
            {[...Array(5)].map((_,i)=>(
                <span key={i} onClick={()=>setHeart(i+1)}
                className={`text-2xl cursor-pointer ${
                    i<heart ?"text-red-500":"text-gray-300"
                }`}>
                    ❤
                </span>
            ))}
        </div>
    );

    return(
        <div className="space-y-10 p-6 bg-white rounded shadow">
            {/* 1. BASIC STAR RATING  */}
            <div>
                <label className="block mb-2 font-medium">Star Rating ({star})</label>
                {renderStars(star,setStar)}
            </div>

            {/* 2. HALF STAR RATING */}
            <div>
                <label className="block mb-2 font-medium">Half Star Rating ({halfStar})</label>
                {renderHalfStars()}
            </div>

            {/* 3. EMOJI RATING */}
            <div>
                <label className="block mb-2 font-medium">Emoji Rating ({emoji})</label>
                <div className="flex gap-3">
                    {emojis.map((e,i)=>(
                        <span key={i} onClick={()=>setEmoji(i+1)}
                        className={`text-3xl cursor-pointer ${
                            emoji === i+1?"scale-110":"opacity-50"
                        }`}>{e}</span>
                    ))}
                </div>
            </div>

            {/* 4. HEART RATING */}
            <div>
                <label className="block mb-2 font-medium">
                    Heart Rating({heart})
                </label>
                {renderHearts()}
            </div>

            {/* 5. NUMBER RATING */}
            <div>
                <label className="block mb-2 font-medium">
                    Number Rating ({number}/10)
                </label>
                <div className="flex gap-2">
                    {[...Array(10)].map((_,i)=>(
                        <button key={i} onClick= {()=>setNumber(i+1)} className={`w-10 h-10 rounded ${number >= i+1?"bg-blue-500 text-white"
                            :"bg-gray-200"
                        }`}>{i+1}</button>

                    ))}

                </div>
            </div>

            {/* 6. READ ONLY RATING */}
            <div>
                <label className="block mb-2 font-medium">Read Only Rating</label>
                <div className="flex gap-1">
                    {[...Array(5)].map((_,i)=>(
                        <span key={i} className={`text-2xl ${
                            i < readOnly?"text-yellow-400":"text-gray-300"
                        }`}>*</span>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default RatingInputField;