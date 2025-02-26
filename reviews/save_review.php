<?php
require_once 'config.php';

try {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    if (!$data) {
        throw new Exception("Invalid JSON data received");
    }

    $name = $conn->real_escape_string($data['name']);
    $text = $conn->real_escape_string($data['text']);
    $rating = (int)$data['rating'];
    $image_data = isset($data['image_data']) ? $conn->real_escape_string($data['image_data']) : '';

    $sql = "INSERT INTO reviews (name, text, rating, image_path) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssis", $name, $text, $rating, $image_data);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "message" => "Review added successfully"]);
    } else {
        throw new Exception("Error saving review");
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}

$conn->close();
?>
