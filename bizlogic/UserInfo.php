
<?php 
	include 'connection.php';

	$returnData = [];

	$sql="SELECT * FROM `user`";
			$result = mysqli_query($conn,$sql);
			$row = mysqli_fetch_array($result);
				if(isset($row)){
				//	echo 'success';
					$returnData = [$row];

				}
				else
				{
					//echo 'failure';
				//	$returnData = msg(0,422,'Invalid Email Address!');
				}
	echo json_encode($returnData);
?>
