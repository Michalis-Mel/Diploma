<?php

$tex_code = $_POST["convert"];

header("Content-Type: application/x-tex");
header("Content-Transfer-Encoding: utf8"); 
header("Content-disposition: attachment; filename=tex_template.tex"); 
echo $tex_code;

?>