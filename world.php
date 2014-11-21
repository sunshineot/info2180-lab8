<?php
mysql_connect(
"0.0.0.0",
"sunshineot"
);
mysql_select_db("world");


$LOOKUP = $_REQUEST['lookup'];

# execute a SQL query on the database
$results = mysql_query("SELECT * FROM countries WHERE name LIKE '%$LOOKUP%';");
$results2 = mysql_query("SELECT * FROM countries;");
print $results;
print $results2;

# loop through each country
if("#All_Countries").prop(":checked"){
while ($row = mysql_fetch_array($results2)) {
  ?>
  <li> <?php echo $row["name"]; ?>, ruled by <?php echo $row["head_of_state"]; ?> </li>
  <?php
}
else{
while ($row = mysql_fetch_array($results)) {
  ?>
   <li> <?php echo $row["name"]; ?>, ruled by <?php echo $row["head_of_state"]; ?> </li>
   <?php
 }
}

}
?>
