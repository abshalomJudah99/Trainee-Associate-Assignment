
 <?php 
 	header("Access-Control-Allow-Origin: *");
 	header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
 	header("Access-Control-Allow-Headers: Content-Type, Authorization");

	$dbhost = 'localhost';
	$dbuser = 'root'; 
  	$dbpass = '';
   	$conn = mysqli_connect($dbhost, $dbuser, $dbpass);//It opens a connection to a MySQLi Server
    if(!$conn ) { 
		die('Could not connect: ' . mysqli_error($conn));
    } 	
	// selecting data base
	$db= mysqli_select_db($conn,'exam' );
	
	if(!$db){
		
	 echo 'Select database first ';// if database couldn't be connected
	
	}
	//mysqli_close($conn); ?> 
 
  