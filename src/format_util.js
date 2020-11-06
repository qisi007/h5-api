export const cmToPxFun = function ( cm ) {
    return Math.floor( cm * 28.346 );
}

export const charToPxFun = function ( length, fontSize ) {
    return length * fontSize + 'px';
}