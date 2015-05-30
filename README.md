# webfinder
![演示](http://s1.momo.moda/2015/05/30/9232fe81225bcaef853ae32870a2b0fe.gif)
### 已实现功能
* 删除新建重命名上传文件
* 点击加载多个路径
* 删除dialog提示
* 上传提示
### 图中删除文件时的一个bug已经修复，即未确定就删除了文件，因为删除函数自执行了。
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
