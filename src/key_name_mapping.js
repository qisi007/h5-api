// 键名映射


export const keyNameMappingFun = ( obj, config ) => {
    let result = {};
    for ( let key in obj ) {
        if ( !obj[config[key]]) {
            // 没有的配置按原对象返回
            result[key] = obj[key];
        }else{
            result[config[key]] = obj[key]
        }
    }
    return result;
}











