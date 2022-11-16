export {
    jsonObjectToTypescriptInterface,
    jsonToTypescript
}


function TypeScriptOutput(props: { mainInterfaceName: string, updatedJsonInput: string }) {

    if (props.mainInterfaceName && props.updatedJsonInput) {

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
                        {jsonToTypescript(props.mainInterfaceName, props.updatedJsonInput)}
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

export default TypeScriptOutput;




function jsonToTypescript(mainInterfaceName: string, input: string) {
    const parsedJson = JSON.parse(input)
    return jsonObjectToTypescriptInterface(mainInterfaceName, parsedJson)
}



function jsonObjectToTypescriptInterface(interfaceName: string, json: Record<string, unknown>): string {

    const interfaces = [] as string[]
    const rec = Object.entries(json).map(([key, val]) => {
        if (isRecord(val)) {
            return [key, val] as const
        }
        return [key, primitiveValueToTypescriptType(val)] as const
    })

    const str = `interface ${toPascalCase(interfaceName)} {
        ${rec.reduce((_interface, [property, valType]) => {
        if (isRecord(valType)) {
            interfaces.push(jsonObjectToTypescriptInterface(property, valType))
            return _interface + `${property}: ${toPascalCase(property)}\n`
        }
        return _interface + `${property}: ${valType}\n`
    }, '')
        }}\n`

        console.log('str', str)
        console.log('interfaces', interfaces)

    return str + '\n' + interfaces.join('')
}




function isRecord(x: unknown): x is Record<string, unknown> {
    return x !== null && typeof x === 'object' && !Array.isArray(x);
}



function primitiveValueToTypescriptType(val: unknown) {
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



function toPascalCase(name: string) {
    return name.split(' ').reduce((acc, cur) => acc + cur.charAt(0).toUpperCase() + cur.slice(1).toLowerCase(), '')
}

