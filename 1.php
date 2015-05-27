<?php
	header("Content-Type: text/html;charset=utf-8");
	$filename=$_POST['filename'];
	$path="demo\\";
	$newfile=$_POST['newfile'];
	$del_file=$_POST['del_file'];
	$renamefile=$_POST['renamefile'];
	$oldname=$_POST["oldname"];
	//获取文件夹信息
	$all_files=glob($path."*");
	$all_files_name = implode(";", $all_files);
	//新建文件
	if($newfile==1)
		$counter_file = $path.$filename;//文件名及路径,在当前目录下新建aa.txt文件
		$fopen = fopen($counter_file, 'wb');//新建文件命令
		fputs($fopen, 'aaaaaa');//向文件中写入内容;
		fclose($fopen);
	//删除文件
	if($del_file==1)
		unlink($path.$filename);

	//重命名
	if ($renamefile==1) 
		rename($path.$oldname, $path.$filename);

	echo $all_files_name;
?>