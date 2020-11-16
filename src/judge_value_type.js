export const judgeValueTypeFun = ( value ) => {
    let type = '';
    switch (true) {
        case typeof value === 'string':
            type = 'string' 
            break;
        case typeof value === 'number':
            type = 'number'
            break;
        case typeof value === 'boolean':
            type = 'boolean'
            break;
        case value.constructor === Object:
            type = 'object'
            break;
        case value.constructor === Array:
            type = 'array'
            break;
    }
    return type
}
