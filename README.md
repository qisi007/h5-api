# h5通用api

<br/>

## 使用方法

```
npm i h5-api --save
```

<br/>

## 引入

```
import { h5Api } from "h5-api";
```
* ts项目需要声明类型

<br/>



## 方法

### 1. isFirstEntryEdge()

<strong>介绍:</strong> 判断是否首次进入页面

<strong>参数:</strong> 无

<strong>返回值:</strong> 首次进入返回`true`,否则返回`false`

<strong>例子:</strong>
```
    if ( isFirstEntryEdge() ) {
        do something...
    }
```

### 2. isPc()

<strong>介绍:</strong> 判断设备是否为电脑

<strong>参数:</strong> 无

<strong>返回值:</strong> 如果是pc端返回`true`,否则返回`false`

<strong>例子:</strong>

```
    if ( isPc() ) {
        do something...
    }
```

### 3. pageJump( url, blank )

<strong>介绍:</strong> 跳转页面

<strong>参数:</strong> 
  - url 跳转的地址  string类型(开头必须包含`http`或者`https`) 
  - blank 是否在新页面打开 boolean类型  默认值: true

<strong>返回值:</strong> 无

<strong>例子:</strong>

```
    pageJump("https://www.liuguisheng.vip", true);
```

### 4. prodeceRandomString( length, isDate )

<strong>介绍: </strong>生成一个随机字符串

<strong>参数: </strong>
 - length 随机数长度 number类型
 - isDate 是否添加时间戳 boolean类型  默认值: false

<strong>返回值: </strong>生成的字符串

<strong>例子:</strong>

```
    let str =  prodeceRandomString( 10, true );
    
    console.log(str);
```

### 5. moneyToCapitals( n )

<strong>介绍: </strong>金额小写转大写

<strong>参数:</strong> 
 - n 小写金额 number类型

<strong>返回值:</strong> 返回生成的大写金额

<strong>例子:</strong>

```
    let capitalizeMoney =  prodeceRandomString( 10, true );
    
    console.log(capitalizeMoney);
```

### 6. getCurrentUrl ()

<strong>介绍: </strong>获取地址栏url

<strong>参数:</strong> 无

<strong>返回值:</strong> 地址栏的url

<strong>例子:</strong>

```
    let url = getCurrentUrl();
    
    console.log(url);
```

### 7. deepCopy ( value )

<strong>介绍: </strong>深拷贝方法

<strong>参数:</strong> 
 - value 需要拷贝的值 任意类型

<strong>返回值:</strong> 深拷贝后的值

<strong>例子:</strong>

```
    let obj = {
        name: "liu",
        home: "https://www.liuguisheng.vip"
    }
    let result = deepCopy(obj);
    
    console.log(obj === result);
```

### 8. emptyCheck 

<strong>介绍: </strong>校验一个对象是否有空值

<strong>参数:</strong> 每个方法的传参有所区别

<strong>内置方法:</strong>
 - emptyCheck.checkObject( obj, unInclude ) 校验对象, obj为需要校验的对象,unInclude为不需要校验的key
 - emptyCheck.checkNumber ( num ) 校验数字
 - emptyCheck.checkString ( str ) 校验字符串
 - emptyCheck.checkArray ( arr ) 校验数组

<strong>返回值:</strong> 如果有空值返回`true`, 否则返回`false`

<strong>例子:</strong>

```
    let obj = {
        name: "liu",
        home: "https://www.liuguisheng.vip",
        info: {
            age: 27,
            idCard: '',
            girlFriend: ''
        }
    }

    let unInclude = ['girlFriend'];

    let check = new emptyCheck();

    let result = check.checkObject(obj, unInclude);
    
    console.log(result);
```

### 9. charToPx ( length, fontSize )

<strong>介绍: </strong>字符转像素

<strong>参数:</strong> 
 - length 字符长度 number类型
 - fontSize 字体大小 number类型

<strong>返回值:</strong> 生成的像素值

<strong>例子:</strong>

```
    let result = charToPx ( 30, 14 );
    console.log( result );
```

### 10. cmToPx ( cm )

<strong>介绍: </strong>厘米转像素

<strong>参数:</strong> 
 - cm 厘米 number类型

<strong>返回值:</strong> 生成的像素值

<strong>例子:</strong>

```
    let result = cmToPx ( 30 );
    console.log( result );
```

### 11. arrayIntersection ( arr1, arr2 )

<strong>介绍: </strong>两个数组取交集

<strong>参数:</strong> 
 - arr1 数组1 any[] 类型
 - arr2 数组1 any[] 类型

<strong>返回值:</strong> 生成的新数组

<strong>例子:</strong>

```
    let arr1 = [1,2,3,4];
    let arr2 = [3,4,5,6];
    let result = arrayIntersectionFun ( arr1, arr2 );
    console.log( result );
```

### 12. arraySubtraction ( arr1, arr2 )

<strong>介绍: </strong>两个数组取交集

<strong>参数:</strong> 
 - arr1 数组1 any[] 类型
 - arr2 数组1 any[] 类型

<strong>返回值:</strong> 生成的新数组

<strong>例子:</strong>

```
    let arr1 = [1,2,3,4];
    let arr2 = [3,4,5,6];
    let result = arraySubtractionFun ( arr1, arr2 );
    console.log( result );
```

### 13. keyNameMapping ( obj, config )

<strong>介绍: </strong>对象键名映射(只支持简单对象)

<strong>参数:</strong> 
 - obj 原对象 object类型
 - config 映射配置 object类型

<strong>返回值:</strong> 生成的新对象

<strong>例子:</strong>

```
    let obj = {
        name: "liu",
        home: "https://www.liuguisheng.vip",
        age: 27
    };
    let config = {
        name: "id",
        home: "index",
        info: "message"
    }

    let result = keyNameMapping ( obj, config );
    console.log( result );
```

### 14. telMosaic ( tel )

<strong>介绍: </strong>手机号打码

<strong>参数:</strong> 
 - tel 手机号码 number|字符串类型

<strong>返回值:</strong> 生成的新手机号

<strong>例子:</strong>

```
    let result = telMosaic ( 17698443243 );
    console.log( result );
```

### 15. idCardMosaic ( idCard )

<strong>介绍: </strong>手机号打码

<strong>参数:</strong> 
 - idCard 身份证号码 number|字符串类型

<strong>返回值:</strong> 生成的身份证

<strong>例子:</strong>

```
    let result = idCardMosaic ( 130282199508145154 );
    console.log( result );
```





<br/>
<br/>

## 开源协议

[MIT License](https://github.com/qisi007/h5-api/blob/main/LICENSE)

<br/>

## 源码地址

[地址](https://github.com/qisi007/h5-api)

## 博客地址

[博客](https://www.liuguisheng.vip)
