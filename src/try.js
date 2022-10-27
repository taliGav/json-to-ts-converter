export {
    typesOfValues,
    tsInterfaceOutput
}

const x =
{
    "id": 0,
    "name": "Blanche Mathews",
    "age": "20",
    "isSmiling": true
}


// const x = [
//     {
//         "id": 0,
//         "name": "Blanche Mathews",
//         "age":"20",
//         "isSmiling": true
//     },
//     {
//         "id": 1,
//         "name": "Salinas Bruce",
//         "isSmiling": false
//     },
//     {
//         "id": 2,
//         "name": "Bowman Santana",
//         "isSmiling": true
//     }
// ]


// console.log(...x);

// const y = JSON.stringify(...x,)

// const y = JSON.stringify(x).split(",")


function typesOfValues(x) {
    return Object.values(x).map(x => typeof (x))
}

function tsInterfaceOutput(x) {
    const valuesMappedToTypesEntries = Object.entries(x).map(([key, val]) => {
        return [key, typeof val]
    })

    return Object.fromEntries(valuesMappedToTypesEntries)
}