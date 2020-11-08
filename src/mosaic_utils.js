export const telMosaicFun = ( tel ) => {
    let telStr = tel.toString();
    let telReg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if ( !telReg.test(telStr )) {
        console.error("手机号不合法!")
        return
    }
    let reg = /^(\d{3})\d{4}(\d{4})$/;
    return telStr.replace(reg, "$1****$2");
}


export const idCardMosaicFun = ( idCard ) => {
    let idCardStr = idCard.toString();
    let idCardReg = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;
    if ( !idCardReg.test(idCardStr )) {
        console.error("身份证号不合法");

    }
    let reg = /^(.{4})(?:\d+)(.{4})$/;
    return idCardStr.replace(reg, "$1******$2");
}
