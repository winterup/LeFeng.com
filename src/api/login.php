<?php
    require('connect.php');

    $username = isset($_GET['username']) ? $_GET['username'] : null;
    $password = isset($_GET['password']) ? $_GET['password'] : null;
    // $type = isset($_GET['type']) ? $_GET['type'] : null;

    // 查找数据库判断用户名是否存在
    $sql="select * from user where username='$username' and password=md5($password)";

    $result = $conn -> query($sql);

     if($result -> num_rows > 0){
        echo "success";
     }else{
        echo "fail";
     }
?>