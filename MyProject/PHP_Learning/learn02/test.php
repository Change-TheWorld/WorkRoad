<?php

$q = isset($_GET['q'])? htmlspecialchars($_GET['q']) : '';
if($q){
    if($q =='RUNOOB') {
        echo '菜鸟教程<br>http://www.runoob.com';
    } else if($q =='GOOGLE') {
        echo 'Google 搜索<br>http://www.google.com';
    } else if($q =='TAOBAO') {
        echo '淘宝<br>http://www.taobao.com';
    }
} else {

}

