<?php
require_once 'config.php';

try {
    $sql = "SELECT * FROM reviews ORDER BY timestamp DESC";
    $result = $conn->query($sql);

    $reviews = array();
    if ($result && $result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            array_push($reviews, $row);
        }
    }

    echo json_encode($reviews);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}

$conn->close();
?>
