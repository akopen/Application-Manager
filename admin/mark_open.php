<?php 

require ('private.php');

$date = $_GET['date'];

$sql = "UPDATE `application-manager`.`trip_dates` SET `is_full` = '0' WHERE `trip_dates`.`date` = '$date'";
$result = $conn->query($sql);

if ($conn->query($sql) === TRUE) {
    echo "Record altered successfully";
} else {
    echo "Error altering record: " . $conn->error;
}

$conn->close();

 ?>
