<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

include 'config.php';

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

$name = $conn->real_escape_string($data['name']);
$text = $conn->real_escape_string($data['text']);
$rating = (int)$data['rating'];

$sql = "INSERT INTO reviews (name, text, rating) VALUES ('$name', '$text', $rating)";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true, "message" => "Review added successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
}

$conn->close();
?>
