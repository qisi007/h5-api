export const deepCopyFun = ( value ) => {
    if ( !value ) {
        console.error("value为空,请传值!");
        return ""
    }

    if ( typeof value == 'number' || typeof value == 'string' ) {
        return value;
    }

    if ( value.constructor == Array ) {
        let arr = []
        for ( let i = 0; i < value.length; i++ ) {
            arr[i] = deepCopyFun(value[i]);
        }
        return arr;
    }

    if ( value.constructor == Object ) {
        let obj = {};
        for ( let key in value ) {
            obj[key] = deepCopyFun(value[key]);
        }
        return obj;
    }
}


