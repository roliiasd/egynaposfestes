<?php
require_once 'config.php';

header('Content-Type: application/json');

$id = (int)$_GET['id'];

$sql = "DELETE FROM reviews WHERE id = $id";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true, "message" => "Review deleted successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
}

$conn->close();
?>
