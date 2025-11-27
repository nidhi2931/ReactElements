import React from "react";
import Button from "../../components/Standard_Form/Button";


function ButtonPage(){
    return(
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
            <h1 className="text-3xl font-bold mb-6 text-gray-800"> Button Playground</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-5xl">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="elevated" >Elevated</Button>
                <Button variant="filled">Filled</Button>
                <Button variant="icon">Icon</Button>
                <Button variant="fab">Fab</Button>
                <Button variant="cta">CTA</Button>
                <Button variant="disabled">Disabled</Button>
                <Button variant="text">Text</Button>
            </div>
        </div>
    );

}

export default ButtonPage;