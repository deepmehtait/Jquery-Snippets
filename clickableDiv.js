<html>
<head>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type="text/javascript">//Clickable Boxes
$(document).ready(function(){
                                  
     $("#clickablebox").click(function(){
     window.location=$(this).find("a").attr("href");return false;
     });
 
});
</script>
<style>
#clickablebox  {
     width: 250px;
     height: 250px;
     margin: 150px auto;
     background: #E6E6E6;
     padding: 15px;
     cursor: pointer;
}
</style>
</head>
<body>
<div id="#clickablebox">
     <h1><a href="#">Click Me</a><h1>
     <p>This whole div will be clickable to the click you define in the above or anywhere inside the div</p>
</div>
</body>
</html>
