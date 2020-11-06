# h5通用api

<br/>
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

## 方法
api | 名称 | 参数 | 返回值 | 介绍 | 
-- | --| -- | -- | -- |
isFirstEntryEdge | 判断是否首次进入页面 | - | 有 |  首次进入返回`true`,否则返回`false`
isPc | 判断设备是否为手机 | - | 有 | 如果是pc端返回`true`,否则返回`false`
pageJump | 跳转页面 | url(跳转地址), blank(是否打开新页面) | 无 | -
prodeceRandomString | 生成随机字符串 | length(随机数长度), isDate(是否添加时间戳) | 有 | 返回生成的字符串
moneyToCapitalsFun | 金额小写转大写 | n(小写金额) | 有 | 返回生成的大写金额
getCurrentUrl | 获取地址栏url | - | 无 | 返回url

<br/>
<br/>

## 例子

例如我们要生成一个随机字符串，用法如下:
```
import { h5Api } from "h5-api";

let str = h5Api.prodeceRandomString(10, true);

console.log("随机字符串",str)
```

<br/>
<br/>

## 开源协议

[MIT License](https://github.com/qisi007/h5-api/blob/main/LICENSE)

<br/>
