export const moneyToCapitalsFun = function( n ) {
    // 小数部分
    let fraction = ['角', '分'];
    // 数字部分
    let digit = [
        '零', '壹', '贰', '叁', '肆',
        '伍', '陆', '柒', '捌', '玖'
    ];
    // 单位
    let unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ];
    // 是否为负值，if T 前边加 ’欠‘
    let head = n < 0 ? '欠' : '';
    // 取绝对值
    n = Math.abs(n);
    let s = '';
    // 小数计算
    for (let i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    // 单位计算
    for (let i = 0; i < unit[0].length && n > 0; i++) {
        let p = '';
        for (let j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零')
        .replace(/^整$/, '零元整');
  }