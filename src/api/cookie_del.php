<?php
    /*
        注册验证用户有效性
     */
    require('connect.php');

    $id0 = isset($_GET['id0']) ? $_GET['id0'] : null;


    // 注册（保存到数据库）
    // $sql="insert into user(username,password)values('$username','$password')";
    $sql="DELETE FROM cookie WHERE id0='$id0'";
    // 执行sql语句
    $res = $conn -> query($sql);

    echo "success";
    

?>