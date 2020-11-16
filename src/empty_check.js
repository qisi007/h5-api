import {judgeValueTypeFun } from "./judge_value_type"

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

            let type = judgeValueTypeFun( value );
            switch (true) {
                case value == undefined || value == null:
                    this.next = false
                    break
                case type == 'number':
                    this.next = this.checkNumber(value);
                    break;
                case type == 'string':
                    this.next = this.checkString(value);
                    break;
                case type ==  Object:
                    this.next = this.checkObject( value,unInclude);
                    break;
                case type ==  Array:
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