<?php
require_once 'config.php';

try {
    if (!isset($_FILES['image'])) {
        throw new Exception('No image file received');
    }

    $file = $_FILES['image'];
    
    if ($file['error'] !== UPLOAD_ERR_OK) {
        throw new Exception('Upload error: ' . $file['error']);
    }

    // Check file size (5MB max)
    if ($file['size'] > 5000000) {
        throw new Exception('File is too large');
    }

    // Check if image file is actual image
    $check = getimagesize($file['tmp_name']);
    if ($check === false) {
        throw new Exception('File is not an image');
    }

    // Convert to base64
    $imageData = file_get_contents($file['tmp_name']);
    $base64Image = 'data:' . $check['mime'] . ';base64,' . base64_encode($imageData);

    echo json_encode([
        "success" => true,
        "message" => "Image uploaded successfully",
        "image_data" => $base64Image
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => $e->getMessage()
    ]);
}
?>
