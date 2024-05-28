
<?php
header('project2.html');
require 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST["username"]);
    $password = trim($_POST["password"]);

    if (!empty($username) && !empty($password)) {
        try {
            $stmt = $conn->prepare("SELECT id, password FROM users WHERE username = :username");
            $stmt->bindParam(':username', $username);
            $stmt->execute();

            $user = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($user && password_verify($password, $user['password'])) {
                echo "Login successful!";
                header('project2.html')
                // Start session and set session variables here if needed
                session_start();
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['username'] = $username;
            } else {
                echo "Invalid username or password.";
            }
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }
    } else {
        echo "Both fields are required.";
    }
}
?>
