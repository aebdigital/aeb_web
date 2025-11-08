<?php
// Simple PHP mail handler - based on working test-email.php approach
// Only allow POST requests
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    http_response_code(405);
    die(json_encode(['success' => false, 'message' => 'Method not allowed']));
}

// Set content type
header('Content-Type: application/json');

// Get form data - exactly like test script
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$subject = isset($_POST['subject']) ? trim($_POST['subject']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Basic validation
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Vyplňte všetky povinné polia (meno, email, správa).']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Neplatný email formát.']);
    exit;
}

// Use EXACTLY the same approach as working test-email.php
$to = 'peter@aebdig.com';
$email_subject = 'Nová správa z AEB Digital kontaktného formulára' . ($subject ? ' - ' . $subject : '');

// Simple message format like test script
$email_body = "Nová správa z AEB Digital kontaktného formulára\n\n";
$email_body .= "Meno: $name\n";
$email_body .= "Email: $email\n";
if (!empty($phone)) $email_body .= "Telefón: $phone\n";
if (!empty($subject)) $email_body .= "Predmet: $subject\n";
$email_body .= "Správa: $message\n\n";
$email_body .= "Odoslané: " . date('Y-m-d H:i:s') . "\n";
$email_body .= "Z webu: aebdigital.sk";

// Use EXACTLY the same headers as working test script
$headers = 'From: web@aebdigital.sk' . "\r\n" .
           'Reply-To: ' . $email . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

// Send email using same method as test script
if (mail($to, $email_subject, $email_body, $headers)) {
    echo json_encode([
        'success' => true, 
        'message' => 'Správa bola úspešne odoslaná. Ďakujeme za kontakt!'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Nepodarilo sa odoslať správu. Skúste to prosím neskôr alebo nás kontaktujte telefonicky na +421 908 507 131.'
    ]);
}
?>