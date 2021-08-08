<?php
session_start(); 
include "db_conn.php";
        if (isset($_POST['food'])) {
            
            


            $tutorial_food = $_POST['food'];
            $tutorial_price = $_POST['price'];
            $tutorial_client = $_POST['client'];
            $sql = "INSERT INTO food" .
                "(client,food,price) " . "VALUES " .
                "('$tutorial_client','$tutorial_food','$tutorial_price')";

    if (empty($tutorial_food)) {
        header("Location: home.php?error=Food is required");
        exit();
    } else if (empty($tutorial_client)) {
        header("Location: home.php?error=client is required");
        exit();
    }
 else if (empty($tutorial_price)) {
    header("Location: home.php?error=price is required");
    exit();
}else{

            if (mysqli_query($conn, $sql)) {
                header("Location: home.php");
                printf("Record inserted successfully.<br />");
            }
            else {
        header("Location: index.php?error=Could not insert record into table");

                
            }
        }
        } 
   
        ?>