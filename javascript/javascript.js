function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle('obj',false)[attr]
}

function addEvent(obj,type,callback){
	if (obj.addEventListener) {
		obj.addEventListener(type,callback,false);
	}else{
		obj.attachEvent("on"+type,callback);
	}
}

function remmoveEvent(obj,type,callback){
	if (obj.removeEventListener) {
		obj.removeEventListener(type,callback,false);
	}else{
		obj.detachEvent("on"+type,callback);
	}
}

//dialog模块
var Dialog={ 
  init:function(obj){
    
    var dialog_out= document.createElement('div');
    var header= document.createElement('h3');
    var ybtn= document.createElement('button');
    var nbtn= document.createElement('button');
    ybtn.className="ybtn";
    ybtn.innerText="确定";
    nbtn.className="nbtn";
    nbtn.innerText="取消"
    header.innerText=(obj.inner)?obj.inner:"";
    dialog_out.appendChild(header);
    dialog_out.appendChild(ybtn);
    dialog_out.appendChild(nbtn);
    dialog_out.className="_dialog";
    document.body.appendChild(dialog_out);
    setTimeout(function(){
      dialog_out.style.top='0px';
    },300);  
    nbtn.onclick=this.close;
    if(obj.ybtnFn!=null){
      ybtn.addEventListener('click',obj.ybtnFn,false);
      ybtn.addEventListener('click',this.close,false)
    }else{
      ybtn.onclick=this.close;
    }
  },
  close:function(){
    document.body.removeChild(document.getElementsByClassName('_dialog')[0]);
  }
}


window.onload=function(){
	var menu=document.getElementById('menu'),
		del=document.getElementById('delete'),
		newfile=document.getElementById('newfile'),
		rename=document.getElementById('rename'),
		files=document.getElementsByClassName('file'),
		file_content="<img src='file.png' alt=' 'class='fileimage'><p class='filename'>1.txt</p>",
		file_active=document.getElementsByClassName('focus'),
		upload=document.getElementById('upload'),
		_psd=new RegExp('.+.psd'),
	 	_ai=new RegExp('.+.ai'),
	 	_pdf=new RegExp('.+.pdf'),
	 	_filepath=document.getElementsByClassName("_filepath");

		//contexmenu
		function mouse_right(ev){
			ev.preventDefault();

			for(var i=0;i<files.length;i++){
				files[i].className="file";
			}

			if(ev.target.className=='file'){
				menu.style.display="block";
				menu.style.left=ev.clientX+"px";
				menu.style.top=ev.clientY+"px";
				ev.target.className="file focus";
				}else if(ev.target.className=='fileimage'||ev.target.className=='filename'){
					menu.style.display="block";
					menu.style.left=ev.clientX+"px";
					menu.style.top=ev.clientY+"px";
					ev.target.parentNode.className="file focus";
				}else{return null}

			document.addEventListener('click',function(){menu.style.display="none";},false);
		}

		//delfile
		function deleteFile(file_path){
			var a_file_name=file_active[0].getElementsByTagName('p')[0].innerText;
			file_active[0].remove();
			$.post('1.php',{del_file:1,filename:a_file_name,path:file_path});
		}

		//newFile
		function newFile(file_path){
			var file_name=prompt("输入文件名");
			//文件名是否为空
			if (file_name=="") {
				alert("文件名不能为空");
				return ;
			};
			var newfile_1=document.createElement('div');
			$.post('1.php',{newfile:1,filename:file_name,path:file_path});
			newfile_1.className='file';
			newfile_1.innerHTML=file_content;
			var file_image= newfile_1.getElementsByTagName('img')[0]

			if (_psd.test(file_name)) {
				file_image.src="imgs/ps.png"
			}else if (_ai.test(file_name)) {
				file_image.src="imgs/ai.png"
			}else if (_pdf.test(file_name)) {
				file_image.src="imgs/pdf.png"
			}else if (file_name.match(/.(?:gif|jpg|png)$/)){
				file_image.src="imgs/img.png"
			}else{file_image.src="imgs/file.png"}

			newfile_1.getElementsByClassName('filename')[0].innerText=file_name;
			document.body.insertBefore(newfile_1,files[0]);	//新建文件总是放在第一个
		}

		//renameFile
		function renameFile(file_path){
			var file_name=prompt("输入文件名");
			//文件名是否为空
			if (file_name=="") {
				alert("文件名不能为空");
				return ;
			};
			var old_name=file_active[0].getElementsByClassName('filename')[0].innerText;
			$.post('1.php',{renamefile:1,filename:file_name,oldname:old_name,path:file_path},function(){file_active[0].getElementsByClassName('filename')[0].innerText=file_name;});
				
		}

		//uploadFile
		function uploadFile(){
			var dialog=document.getElementsByClassName('dialog')[0];
			dialog.style.top="-8px";
			document.getElementsByClassName('close')[0].onclick=function(){
				dialog.style.top="-300px";
			}
		}

		//对应文件夹
		for (var i = 0; i < _filepath.length; i++) {
			_filepath[i].file_path="demo"+i+"\\";
		};
		var path_focus=document.getElementsByClassName('path_focus');
		//事件委托
		document.addEventListener('contextmenu',mouse_right,false)

		//删除文件
		del.addEventListener('click',function(){Dialog.init({inner:"确认删除？",ybtnFn:function(){deleteFile(path_focus[0].file_path)}})},false);

		//新建文件
		newfile.addEventListener('click',function(){newFile(path_focus[0].file_path)},false);

		//重命名
		rename.addEventListener('click',function(){renameFile(path_focus[0].file_path)},false);

		//上传文件
		upload.addEventListener('click',uploadFile,false);
}