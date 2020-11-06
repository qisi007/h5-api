# h5通用api

## 使用方法

```
npm i h5-api --save
```

## 引入

```
import { h5Api } from "h5-api";
```
* ts项目需要声明类型

## 方法
api | 名称 | 参数 | 有无返回值 | 介绍 | 
-- | --| -- | -- | -- |
isFirstEntryEdge | 判断是否首次进入页面 | - | 是 |  首次进入返回`true`,否则返回`false`
isPc | 判断设备是否为手机 | - | 是 | 如果是pc端返回`true`,否则返回`false`
pageJump | 跳转页面 | url(跳转地址), blank(是否打开新页面) | 无 | -
prodeceRandomString | 生成随机字符串 | length(随机数长度), isDate(是否添加时间戳) | 生成的字符串 | -
