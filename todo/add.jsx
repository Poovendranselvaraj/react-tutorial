import react from 'react';
import { useState } from 'react';

const addfield = (type) => {
    setFields([...fields, type]);
}

return (
    <div>
        <h2>Dynamic Form</h2>

        <div>
            <button onClick={()=> addfield("text")}>Add Text Field</button>
            <button onClick={()=> addfield("number")}>Add Number Field</button>
            <button onClick={()=> addfield("select")}>Add Select Field</button>
            <button onClick={()=> addfield("checkbox")}>Add Checkbox</button>
        </div>
        {/* <div>
            {fields.map((field.index)=>(
                <FormField key={index}
            ))}
        </div> */}

    </div>
)