import React from 'react';

function jsonValueToTypescriptType(val: unknown) {
    switch (typeof val) {
        case 'number':
            return 'number'
        case 'string':
            return 'string'
        case 'boolean':
            return 'boolean';
        case null:
            return 'null'
        case undefined:
            return 'undefined'
    }
}

function jsonObjectToTypescript(json: Record<string, unknown>): string {

    console.log(Object.entries(json))
    const str = Object.entries(json).reduce((keyValTypeStr, cur) => {
        console.log("keyValTypeStr", keyValTypeStr)
        console.log("cur", cur)

        return keyValTypeStr + `${cur[0]}:${jsonValueToTypescriptType(cur[1])}\n`

    }, '')
    return `Interface T{
            ${str}}   
            `
}

function jsonInputToTypescriptOutput(input: string) {
    const parsedJson = JSON.parse(input)
    return jsonObjectToTypescript(parsedJson)
}


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
                <div
                    style={{
                        display: "inline-flexbox",
                        backgroundColor: "#494534",
                    }}

                >
                    <p style={{ whiteSpace: 'pre-line', textAlign: 'left' }}>
                        {jsonInputToTypescriptOutput(props.updatedJsonInput)}
                        {/* {JSON.stringify(tsInterfaceOutput(props.updatedJsonInput))} */}
                    </p>
                </div>
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

    const objWithTypes: {} = Object.fromEntries(valuesMappedToTypesEntries)

    return objWithTypes
    // return <p>interface T{ `${objWithTypes}`}</p>
}

// function tsInterfaceOutput(x: string) {
//     const parsedInput = JSON.parse(x)
//     const valuesMappedToTypesEntries = Object.entries(parsedInput).map(([key, val]) => {
//         return [key, typeof val]
//     })

//     // console.log("valuesMappedToTypesEntries:" , valuesMappedToTypesEntries)
//     // console.log("Object.fromEntries:" , Object.fromEntries(valuesMappedToTypesEntries))
//     // // return [new String(key), typeof val]
//     // console.log("JSON.stringify:" , JSON.stringify(Object.fromEntries(valuesMappedToTypesEntries)))

//     return Object.fromEntries(valuesMappedToTypesEntries)
// }


export default TypeScriptOutput;