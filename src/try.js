export {
    typesOfValues,
    tsInterfaceOutput
}

var x =
{
    "id": 0,
    "name": "Blanche Mathews",
    "age": "20",
    "isSmiling": true
}


// var x = [
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

// var y = JSON.stringify(...x,)

// var y = JSON.stringify(x).split(",")


function typesOfValues(x) {
    return Object.values(x).map(x => typeof (x))
}

function tsInterfaceOutput(x) {
    var keys = Object.keys(x)
    var types = typesOfValues(x)
    
    let entArrs = []
    for (let i = 0; i < keys.length; i++) {
        let arr = []
        arr[0] = keys[i];
        arr[1] = types[i]

        entArrs.push(arr)
    }

    let entries = new Map(entArrs)

    return Object.fromEntries(entries)
}