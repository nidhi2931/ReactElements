import React, {useState} from 'react';

function AutocompleteField(){
    return(
        <div>
            <label>
                {label}
            </label>
            <textarea rows="4" value={value} onChange={(e)=>onChange(e.target.value)} />
        </div>
    );
}

export default AutocompleteField;