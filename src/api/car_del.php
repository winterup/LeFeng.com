<?php
    /*
        注册验证用户有效性
     */
    require('connect.php');

    $name = isset($_GET['name']) ? $_GET['name'] : null;


    // 注册（保存到数据库）
    // $sql="insert into user(username,password)values('$username','$password')";
    $sql="DELETE FROM car WHERE name='$name'";
    // 执行sql语句
    $res = $conn -> query($sql);

    echo "success";
    

?>