<?php
    $error;
    $login = $_POST['login'];
    $pass = $_POST['pass'];

    $mysqli = new mysqli("localhost", "a0453884_root", "root", "a0453884_users_site");
    $mysqli->query("SET NAMES 'utf8'");
    $db = $mysqli->query("SELECT * FROM `users`");
    while(($row = $db->fetch_assoc()) != false) {
            if ($row["login"] == $login || $row["pass"] == $pass){
                 session_start();
                 $_SESSION['num_random'] = $num_random;
                 $_SESSION['login'] = $login;
                 $_SESSION['email'] = $row["email"];
                 $_SESSION['pass'] = $pass;
                 $_SESSION['repass'] = $row['repass'];
                 $_SESSION['reg'] = 1;
                 $message = "Был выполнен вход на сайт login: $login password: $pass";
                 $subject = "Вход на сайт";
                 $success = mail($row['email'], $subject, $message);
                 echo $success;
            }
    }


?>