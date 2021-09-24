<?php	
 	include 'connection.php';

	 function msg($success,$status,$message,$extra = []){
		return array_merge([
			'success' => $success,
			'status' => $status,
			'message' => $message
		],$extra);
	}
	//Takes a JSON encoded string and converts it into a PHP variable.
	$data = json_decode(file_get_contents("php://input"));
	$returnData = [];
	$email = $pass="";

		if ($_SERVER["REQUEST_METHOD"] == "POST") {
			
		   	$valid = true; // if any fields have an issue this variable will be set false
			
		  	if (!isset($data->email) ) {
				
				echo  " Please don't leave fields empty";
				$valid = false; //false
			} 
			else{
				$email=trim($data->email);
				$pass=trim($data->password);
			}	
			
			if($valid){
				//if all data are validated they are sent to the sql php code
				//assumption --- login is facilitated by email and password 
				$sql="SELECT * FROM `user` WHERE email = '$email' AND password = '$pass'";
				$result = mysqli_query($conn,$sql);
				$row = mysqli_fetch_array($result);
				if(isset($row)){
					$returnData = [
                        'success' => 1,
                        'message' => 'You have successfully logged in.',
                    ];

				}
				//assumption --- each user has a unique email address
				//assumption --- return response data is filled only if login is successful 

			}
			
				
		}
		
		echo json_encode($returnData);
	
?>

