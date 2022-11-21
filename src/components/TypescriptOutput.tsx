import { Box } from '@chakra-ui/react';


export {
    jsonObjectToTypescriptInterface,
    jsonToTypescript
}


function TypeScriptOutput(props: { mainInterfaceName: string, updatedJsonInput: string }) {

    if (props.mainInterfaceName && props.updatedJsonInput) {

        return (
            <Box
                bg="#9ED5C5"
                p={2.5}
                maxW="50vw"
                maxH="80vh"
                flexGrow={1}
                alignSelf="stretch"
                className="Ts-output-container"
            >
                <h1>TypeScript Output - input provided</h1>
                
                <Box
                    bg="#FFEFD6"
                    mt={2.5}
                    p={2.5}
                    borderRadius={10}
                >
                    <p style={{ whiteSpace: 'pre-line', textAlign: 'left' }}>
                        {jsonToTypescript(props.mainInterfaceName, props.updatedJsonInput)}
                    </p>
                </Box>
            </Box>
        );
    }

    return (
        <Box
            bg="#9ED5C5"
            p={2.5}
            maxW="50vw"
            maxH="80vh"
            flexGrow={1}
            alignSelf="stretch"
        >
            <h1>TypeScript Output - input was not provided </h1>
            <h3>Please insert json</h3>
        </Box>
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

