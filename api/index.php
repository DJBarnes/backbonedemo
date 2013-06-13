<?php

require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

$app -> get('/items/', 'getItems');
$app -> put('/items/:id', 'updateItem');

$app -> run();

function getItems() {
  $sql = "SELECT * FROM item";
  try {
    $db = getConnection();
    $stmt = $db -> query($sql);
    $Items = $stmt -> fetchAll(PDO::FETCH_OBJ);
    $db = null;
    echo json_encode($Items);
  } catch(PDOException $e) {
    echo '{"error":{"text":' . $e -> getMessage() . '}}';
  }
}

function updateItem($id) {
  $request = \Slim\Slim::getInstance()->request();
  $body = $request->getBody();
  $item = json_decode($body);
  $sql = "UPDATE item set name=:name, quantity=:quantity, description=:description WHERE id=:id";
  
  try {
    $db = getConnection();
    $stmt = $db -> prepare($sql);
    $stmt->bindParam("name",$item->name);
    $stmt->bindParam("quantity",$item->quantity);
    $stmt->bindParam("description",$item->description);
    $stmt->bindParam("id",$item->id);
    $stmt->execute();
    $db = null;
    echo json_encode($item);
  } catch(PDOException $e) {
    echo '{"error":{"text":' . $e->getMessage() . '}}';
  }

}

function getConnection() {
  $dbhost = "127.0.0.1";
  $dbuser = "kvcc";
  $dbpass = "password";
  $dbname = "backbonedemo";
  $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);
  $dbh -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  return $dbh;
}

?>
