
<?php
require 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST["username"]);
    $email = trim($_POST["email"]);
    $password = trim($_POST["password"]);
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    if (!empty($username) && !empty($email) && !empty($password)) {
        try {
            $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (:username, :email, :password)");
            $stmt->bindParam(':username', $username);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':password', $hashed_password);
            $stmt->execute();

            echo "Signup successful!";
        } catch (PDOException $e) {
            if ($e->getCode() == 23000) {
                echo "Username or email already exists.";
            } else {
                echo "Error: " . $e->getMessage();
            }
        }
    } else {
        echo "All fields are required.";
    }
}
?>
