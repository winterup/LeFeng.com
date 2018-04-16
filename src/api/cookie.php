<?php
    /*
        存入cookie
     */
    require('connect.php');

    $username = isset($_GET['username']) ? $_GET['username'] : null;
    $id0 = isset($_GET['id0']) ? $_GET['id0'] : null;

    $sql="insert into cookie(username,id0) values('$username','$id0')";
    // 执行sql语句
    $res = $conn -> query($sql);

    echo "success";

?>