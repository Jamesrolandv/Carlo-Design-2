<?php
    $pax = $_POST['pax'];
    $date = $_POST['date'];
    $time = $_POST['time'];

    $conn = new mysqli('localhost', 'root', '', 'test');
    if($conn->connect_error){
        die('Connection Failed :'.$conn->connect_error);
    }else {
        $stmt = $conn->prepare('insert into reservation(pax, date, time) values(?, ?, ?)');
        $stmt->bind_param('sii',$pax,$date,$time);
        echo 'Reservation Successful!';
        $stmt->close();
        $conn->close();
    }
?>