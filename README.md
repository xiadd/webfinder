# webfinder
![演示](http://s1.momo.moda/2015/05/30/9232fe81225bcaef853ae32870a2b0fe.gif)
### 已实现功能
* 删除新建重命名上传文件
* 点击加载多个路径
* 删除dialog提示
* 上传提示

##刚看到题的思考
* 前台仅显示数据，数据是python返回的的json。
* python设定本地目录（死的？），读取文件夹信息并返回json。
* 新建文件等，前台显示修改，后台python操作，并返回数据，并且局部刷新数据。（os.listdir会获取目录信息  ps：os.getcwd()当前目录）
* 右键菜单contextmenu（preventdefault）
* 前端bootstrap。
* 不用数据库。
* 后端django或者tornado。
* ajax（jq？）（django有与ajax通信方法）
* os内置的文件操作方法（py）
* 前端仅显示视图，
* js如何调用python方法
* py如何返回json
* js处理json，反馈到前端
* py将list转为json（错！）

### 图中删除文件时的一个bug已经修复，即未确定就删除了文件，因为删除函数自执行了，这边的用的是匿名函数，还可以用bind()。

## 为什么使用php
因为资料全简单一点,python学的知识还不足以做出这个东西出来，主要是ajax与python的交互，有点迷糊所以直接用php了

## 实现过程中的一些记录
![pic](http://s1.momo.moda/2015/05/31/00ac8ed3b4327bdd4ebbebcb2ba10a00.jpg)

## 一些想法
一开始看到题目认为是偏后端的，清理了思路才发现，其实还是前端的问题，主要是ajax，其他的倒没什么，遇到问题解决就是了，没遇到什么问题卡住的。基本功能在第三天就差不多了（中间还夹杂了两次考试--），我得做法是ajax传递消息，php判断是否执行，前端只负责显示界面。但也要根据后端即时反馈的。比如del_filr=1时就删除文件。由于对php不很了解，代码还是很简陋，基本只是实现功能，也没有考虑其他的，也又看fex的ufinder，不过对我来说段数太高了，也没借鉴到什么。

## 几个想实现却没实现的功能
1. 双击打开文件夹
2. 鼠标悬浮显示详细信息（类似win）
3. 多选多操作
4. dialog实现的不完整，prompt()未实现
由于能力与时间有限（==主要是能力）未能完成

## 还存在的bug
只要发现了bug都尽力解决了，但难免疏漏


## 我是傻逼

## 就是这么一回事啊

```c++
#include<iostream>
using namespace std;
#int main(){
	cout<<"xia"<<endl;
	return 0;
}
```
