<?php
    session_start();
    $login = $_SESSION['login'];
    $mysqli = new mysqli("localhost", "a0453884_root", "root", "a0453884_users_site");
    $mysqli->query("SET NAMES 'utf8'");
    $mysqli->query("DELETE FROM `users` WHERE `users`.`login` = '$login'");
    session_destroy();

    header('Location: /index.html');
?>