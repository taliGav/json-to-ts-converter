import { typesOfValues, tsInterfaceOutput } from './try'
// import { jsonObjectToTypescriptInterface, jsonToTypescript } from './components/TypescriptOutput'

test('returns an array of types of JSON`s values', () => {

    expect(typesOfValues({
        "id": 0,
        "name": "Blanche Mathews",
        "age": "20",
        "isSmiling": true
    })).toEqual(['number', 'string', 'string', 'boolean'])
})



test('translate a flat json into typescript interface', () => {

    expect(tsInterfaceOutput(
        {
            "id": 0,
            "name": "Blanche Mathews",
            "age": "20",
            "isSmiling": true
        }))
        .toEqual(
            {
                id: 'number',
                name: 'string',
                age: 'string',
                isSmiling: 'boolean'
            })

})



// // test('jsonToObjectWithValTypes func', () => {

// //     expect(jsonToObjectWithValTypes(
// //         {
// //             "id": 0,
// //             "name": "Blanche Mathews",
// //             "age": "40",
// //             "isSmiling": true
// //         }))
// //         .toEqual(
// //             {
// //                 id: "number",
// //                 name: "string",
// //                 age: "string",
// //                 isSmiling: "boolean"
// //             })

// // })


// // test('jsonToObjectWithValTypes func with nested json', () => {

// //     expect(jsonToObjectWithValTypes(
// //         {
// //             "id": 0,
// //             "name": "Blanche Mathews",
// //             "age": "40",
// //             "kids": {
// //                 "id": 1,
// //                 "name": "Mia Mathews",
// //                 "age": "20",
// //             },
// //             "isSmiling": true
// //         }))
// //         .toEqual(
// //             {
// //                 id: 'number',
// //                 name: 'string',
// //                 age: 'string',
// //                 kids: {
// //                     id: 'number',
// //                     name: 'string',
// //                     age: 'string',
// //                 },
// //                 isSmiling: 'boolean'
// //             })

// // })

// test('translate a flat json into str of typescript interface', () => {

//     expect(jsonObjectToTypescriptInterface('test',
// {
//   "id": 0,
//   "name": "Blanche Mathews",
//   "age": "40",
//   "isSmiling": true
// })).toMatchInlineSnapshot(`
// "interface Test {
//         id: number
// name: string
// age: string
// isSmiling: boolean
// }

// "
// `)
// })


// test('translate a nested json into str of typescript interface', () => {

//     expect(jsonObjectToTypescriptInterface('TEST',
// {
//   "id": 0,
//   "name": "Blanche Mathews",
//   "age": "40",
//   "kids": {
//     "id": 1,
//     "name": "Mia Mathews",
//     "age": 20,
//     "isSmiling": true
//   },
//   "isSmiling": true
// })).toMatchInlineSnapshot(`
// "interface Test {
//         id: number
// name: string
// age: string
// kids: TestKids
// isSmiling: boolean
// }

// interface TestKids {
//         id: number
// name: string
// age: number
// isSmiling: boolean
// }

// "
// `)
// })


// // // test('translate a nested json into typescript interface', () => {

// // //     expect(jsonObjectToTypescriptInterface(
// // //         {
// // //             "id": 0,
// // //             "name": "Blanche Mathews",
// // //             "age": "40",
// // //             "kids":{
// // //                 "id": 0,
// // //                 "name": "Mia Mathews",
// // //                 "age": "20",
// // //             },
// // //             "isSmiling": true
// // //         }))
// // //         .toEqual(
// // //             {
// // //                 id: 'number',
// // //                 name: 'string',
// // //                 age: 'string',
// // //                 kids: {
// // //                     id: 'number',
// // //                     name: 'string',
// // //                     age: 'string',
// // //                 },
// // //                 isSmiling: 'boolean'
// // //             })

// // // })