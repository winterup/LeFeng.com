<?php
    // 引入其他文件
    require('connect.php');//include 'connect.php'

    // 获取前端数据
    // $cat = isset($_GET['category']) ? $_GET['category'] : null;
    $id0 = isset($_GET['id0']) ? $_GET['id0'] : null;

    // 查找数据库判断用户名是否存在
    $sql="select id0 from cookie where id0='$id0'";
    $result = $conn -> query($sql);
    if($result -> num_rows > 0){
        // 编写sql语句
        $sql = "select * from cookie where";
        // $sql = "select * from datalist order by id limit ";

        if($id0){
            $sql .= "$id0";
        }
        $res = $conn->query($sql);

        $row = $res->fetch_all(MYSQLI_ASSOC);

        echo json_encode($row,JSON_UNESCAPED_UNICODE);
    }else{
        echo "fail";
    }
?>