<?php

	// DB credentials and session start
	require('connect.php');

	if(isset($_SESSION['user']) && !empty($_SESSION['user'])) {
		// Redirect 
		header('Location: home.php'); 
		die('Redirecting to home.php'); 

	}

 ?>

<!DOCTYPE html>
<html>
<head>
	<title>Application Manager</title>
	<link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

<img src="logo.png">

<div id = "login-container">

	<h1>Application Manager</h1>

	<form action="login.php" method="post">
		<input name="username" placeholder="username"> <br>
		<input name="password" type = "password" placeholder = "password"> <br>
		<input type="submit" value="Login">
	</form>
</div>

</body>
</html>
