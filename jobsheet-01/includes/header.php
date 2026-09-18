<?php
// Deteksi path dasar otomatis agar file CSS/link tidak rusak di subfolder
$current_dir = dirname($_SERVER['SCRIPT_NAME']);
$base = (strpos($current_dir, 'books') !== false) ? '../' : '';
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>SIMPUS-Mini (Jobsheet 7)</title>
    <!-- Contoh styling sederhana -->
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f4f4f9; }
        nav { background: #333; color: #fff; padding: 10px; margin-bottom: 20px; }
        nav a { color: #fff; text-decoration: none; margin-right: 15px; }
        nav a:hover { text-decoration: underline; }
        .container { background: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        table { width: 100%; border-collapse: collapse; margin-top: 15px; }
        table, th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background-color: #f2f2f2; }
        .alert-success { background: #d4edda; color: #155724; padding: 10px; margin-bottom: 15px; border-radius: 4px; }
        .alert-danger { background: #f8d7da; color: #721c24; padding: 10px; margin-bottom: 15px; border-radius: 4px; }
        .form-group { margin-bottom: 15px; }
        .form-group label { display: block; margin-bottom: 5px; }
        .form-group input { width: 100%; padding: 8px; box-sizing: border-box; }
        button { background: #007bff; color: white; border: none; padding: 10px 15px; cursor: pointer; border-radius: 3px; }
        button:hover { background: #0056b3; }
    </style>
</head>
<body>
    <nav>
        <a href="<?= $base ?>index.php">Home</a>
        <a href="<?= $base ?>books/list.php">Daftar Buku</a>
        <a href="<?= $base ?>books/tambah.php">Tambah Buku</a>
    </nav>
    <div class="container"></div>