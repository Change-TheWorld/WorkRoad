<?php
$age = array(
    "11" => "35",
    "22" => "dfaff",
    "33" => "hahaha",
);

foreach($age as $x => $x_value) {
    echo "key: " . $x . ", value: ". $x_value . "\n";
}

$cars = array("Volvo","BMW","Toyota");

$len = count($cars);
echo $len;
for($x=0; $x<$len; $x++){
    echo $cars[$x];
}
 
?>