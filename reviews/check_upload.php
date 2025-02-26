<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

echo "PHP Upload Settings:<br>";
echo "upload_max_filesize: " . ini_get('upload_max_filesize') . "<br>";
echo "post_max_size: " . ini_get('post_max_size') . "<br>";
echo "max_execution_time: " . ini_get('max_execution_time') . "<br>";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "<br>Upload Test Results:<br>";
    var_dump($_FILES);
}
?>
<form method="post" enctype="multipart/form-data">
    <input type="file" name="test_image">
    <input type="submit" value="Test Upload">
</form>
