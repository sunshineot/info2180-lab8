window.onload = function()
{
    var click = document.getElementById("lookup");
    click.onclick = function() {
	//	var data = $("#controls :input").serializeArray();
	//	$.get($("#controls".attr("world.php?lookup="), data, function(info)($("#result").html())));
    var xmlhttp;
        if (window.XMLHttpRequest) {
             xmlhttp=new XMLHttpRequest();
         } 
         else 
         {
                xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
         }
        
         xmlhttp.onreadystatechange=function() 
         {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                alert(xmlhttp.responseText);
                //document.getElementById("result").innerHTML=xmlhttp.responseText;
                //document.getElementById("term");
            }
         }
      var str = document.getElementById("term").value;
      var str2 = document.getElementById("All_Countries").value;
      xmlhttp.open("GET","world.php?lookup="+str,true);
      xmlhttp.open("GET","world.php?all=",true);
      xmlhttp.send(null);
    }
}
