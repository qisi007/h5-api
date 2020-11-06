export const produceNumberFun = (length, isDate = false) => {
    length = length || 10;
    let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz23456789';
    // 字符长度(maxLength)和随机数(randomNumber)定义
    let maxLength = chars.length, randomNumber = '';
    // 添加随机数
    for (let i = 0; i < length; i++) {
      randomNumber += chars.charAt(Math.floor(Math.random() * maxLength));
    }
    // 如果设置时间戳拼接到随机数后边,否则直接抛出
    return isDate ? randomNumber + new Date().getTime() : randomNumber;
  }