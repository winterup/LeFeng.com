<?php
    // 连接数据库
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'lefeng';

    // 创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);

     //查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');

    // 检测连接
    // 如果失败提示错误信息
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    }
?>