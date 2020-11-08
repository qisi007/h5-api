// 取交集
export const arrayIntersectionFun = ( arr1, arr2 ) => {
    let arr1Set = new Set([...arr1]);
    return arr2.filter( el => arr1Set.has(el));

}

// 取差集
export const arraySubtractionFun = ( arr1, arr2 ) => {
    let arr1Set = new Set([...arr1]);
    return arr2.filter( el => !arr1Set.has(el));
}