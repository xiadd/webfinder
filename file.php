<?php
if (!empty($_FILES['file'][name])){
move_uploaded_file($_FILES[file][tmp_name],"demo0/".$_FILES['file'][name]);
echo "<p style='font-size:50px;text-align:center;font-weigth:bold'>success</p>";}
else{echo "<p style='font-size:50px;text-align:center;font-weigth:bold'>fail</p>";}
?>