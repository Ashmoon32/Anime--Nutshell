<?php
$title = "Anime Nutshell";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title ?> - Home</title>
</head>
<body>
    <h1><?= $title ?></h1>
    <p>Welcome! This is our starting page.</p>

    <?php 

    $animes = [
        [
            "title" => "Naruto",
            "episodes" => "220",
            "rating" => 8.2
        ],
        [
            "title" => "One Piece",
            "episodes" => 1000,
            "rating" => 9.0
        ],
        [
            "title" => "Attack On Titan",
            "episodes" => 75,
            "rating" => 9.1
        ],
        [
            "title" => "Death Note",
            "episodes" => 37,
            "rating" =>  8.9
        ]

      ];
    ?>

    <h2>Anime List</h2>
    <ul>
        <?php  foreach ($animes as $anime): ?>
            <li>
                <? $anime["title"] ?> -
                Episodes: <?= $anime["episodes"] ?> -
                Rating: <?= $anime["rating"] ?>
            </li>
            <?php endforeach; ?>
    </ul>


    
</body>
</html>