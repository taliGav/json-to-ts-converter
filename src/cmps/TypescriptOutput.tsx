import React from 'react';

function TypeScriptOutput(props: { updatedJsonInput: string }) {

    if (props.updatedJsonInput) {

        return (
            <div className="Ts-output-container"
                style={{
                    display: "inline-flexbox",
                    backgroundColor: "#497174",
                    maxWidth: "100vw"
                }}>
                <h1>TypeScript Output</h1>
                {JSON.stringify(tsInterfaceOutput(props.updatedJsonInput))}
            </div>
        );
    }

    return (
        <div>
            <h1>TypeScript Output</h1>
            <h3>Please insert json</h3>
        </div>
    )
}


function tsInterfaceOutput(x: string) {
    const parsedInput = JSON.parse(x)
    const valuesMappedToTypesEntries = Object.entries(parsedInput).map(([key, val]) => {
        return [key, typeof val]
    })
    
    // console.log("valuesMappedToTypesEntries:" , valuesMappedToTypesEntries)
    // console.log("Object.fromEntries:" , Object.fromEntries(valuesMappedToTypesEntries))
    // // return [new String(key), typeof val]
    // console.log("JSON.stringify:" , JSON.stringify(Object.fromEntries(valuesMappedToTypesEntries)))

    return Object.fromEntries(valuesMappedToTypesEntries)
}


export default TypeScriptOutput;