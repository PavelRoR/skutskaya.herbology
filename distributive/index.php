<?php
$dates = array(strtotime("2019-09-20"),strtotime("2019-09-20 17:00"),strtotime("2019-09-11"));
$currDate = strtotime("now");
if ($currDate < $dates[0]) {
	header('location: https://start.bizon365.ru/room/18087/herbal_science');
}
elseif (($currDate >= $dates[0]) && ($currDate < $dates[1])) {
	header('location: https://skutskaya.mastervision.su/herbology/course/');
}
else if (($currDate >= $dates[1]) && ($currDate < $dates[2])) {
	header('location: https://start.bizon365.ru/room/18087/herbal_science_d2');
}

else {
	header('location: https://skutskaya.mastervision.su/herbology/course/');
}
?>