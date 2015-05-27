window.onload=function(){
	var menu=document.getElementById('menu'),
		del=document.getElementById('delete'),
		newfile=document.getElementById('newfile'),
		rename=document.getElementById('rename'),
		files=document.getElementsByClassName('file'),
		file_content="<img src='file.png' alt=' 'class='fileimage'><p class='filename'>1.txt</p>",
		file_active=document.getElementsByClassName('focus');

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
		function deleteFile(){
				var a_file_name=file_active[0].getElementsByTagName('p')[0].innerText;
				file_active[0].remove();
				$.post('1.php',{del_file:1,filename:a_file_name});
			}

		//newFile
		function newFile(){
				var file_name=prompt("输入文件名");
				var newfile_1=document.createElement('div');
				$.post('1.php',{newfile:1,filename:file_name});
				newfile_1.className='file';
				newfile_1.innerHTML=file_content;
				newfile_1.getElementsByClassName('filename')[0].innerText=file_name;
				document.body.insertBefore(newfile_1,files[0]);	//新建文件总是放在第一个
			}

		//renameFile
		function renameFile(){
				var file_name=prompt("输入文件名");
				var old_name=file_active[0].getElementsByClassName('filename')[0].innerText;
				$.post('1.php',{renamefile:1,filename:file_name,oldname:old_name},function(){file_active[0].getElementsByClassName('filename')[0].innerText=file_name;});
				
		}

		//uploadfile

		//上传文件

		//事件委托
		document.addEventListener('contextmenu',mouse_right,false)

		//删除文件
		del.addEventListener('click',deleteFile,false);

		//新建文件
		newfile.addEventListener('click',newFile,false);

		//重命名
		rename.addEventListener('click',renameFile,false)
}