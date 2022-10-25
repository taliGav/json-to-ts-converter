import { typesOfValues, tsInterfaceOutput } from './try'

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