export class Check {
    constructor () {
        this.next = true
    }
    // 校验对象
    checkObject ( obj, unInclude= [] ) {
        this.next = true
        for( let i in obj ) {
            // 设定不校验的字段则跳过该项
            if (unInclude.includes(i) ) continue;
            // 开始校验
            let value = obj[i];
            switch (true) {
                case value == undefined || value == null:
                    this.next = false
                    break
                case typeof value == 'number':
                    this.next = this.checkNumber(value);
                    break;
                case typeof value == 'string':
                    this.next = this.checkString(value);
                    break;
                case value.constructor ==  Object:
                    this.next = this.checkObject( value,unInclude);
                    break;
                case value.constructor==  Array:
                    this.checkArray( value,unInclude )
                    break;
            }
            if ( !this.next ) return false
        }
        return true
    }
    // 校验数字
    checkNumber ( num ) {
        return num ? true : false;
    }
    // 校验字符串
    checkString ( str ) {
        return str ? true : false;
    }
    // 校验数组
    checkArray ( arr,unInclude ) {
        arr.forEach( el => {
            this.checkObject(el,unInclude)
        })
    }
}