<?php
    /*
        注册验证用户有效性
     */
    require('connect.php');

    $id = isset($_GET['id']) ? $_GET['id'] : null;
    $name = isset($_GET['name']) ? $_GET['name'] : null;
    $price = isset($_GET['price']) ? $_GET['price'] : null;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : null;
    $imgs = isset($_GET['imgs']) ? $_GET['imgs'] : null;
    $discount = isset($_GET['discount']) ? $_GET['discount'] : null;
    $priced = isset($_GET['priced']) ? $_GET['priced'] : null;
    $type = isset($_GET['type']) ? $_GET['type'] : null;

    // 查找数据库判断id是否存在
    $sql="select id from car where id='$id'";

    $result = $conn -> query($sql);

    if($result -> num_rows > 0){
        $sql="update car set qty='$qty' where id='$id'";
        // 执行sql语句
        $res = $conn -> query($sql);
        echo "fail";
    }else{
        // if($type === 'reg'){
            // （保存到数据库）
            $sql="insert into car(id,name,price,qty,imgs,discount,priced) values('$id','$name','$price','$qty','$imgs','$discount','$priced')";
            // 执行sql语句
            $res = $conn -> query($sql);

            // if($res){
                echo "success";
            // }else{
                // echo "fail";
            // }
        // }else{
            // 验证用户名可注册
            // echo "success";
        // }
    }

?>