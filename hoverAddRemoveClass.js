<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>On Hover</title>
<style type="text/css">
body {
     background: #111111;
}
div  {
     width: 250px;
     height: 125px;
     margin: 150px auto;
     background: #222;
     padding: 15px;
     cursor: pointer;
     text-transform: capitalize;
     border: 20px solid #1b1b1b;
     font-family: Arial, Helvetica, sans-serif;
     font-size: 12px;
     color: #666;
}
div h1    {
     font-family: Arial, Helvetica, sans-serif;
     color: #fff;
     text-decoration: none;
     letter-spacing: -3px;
}
.hover_style_class  {
     background: #282828;
     border-color: #1d1d1d;
}
</style>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type="text/javascript">
//Clickable Boxes
$(document).ready(function(){
                                  
     //On Hover
     $('.onhover').hover(  
        function(){ $(this).addClass('hover_style_class') },  
        function(){ $(this).removeClass('hover_style_class') }  
     )
 
});
</script>
</head>
 
<body>
     <div class="onhover">
          <h1>Hover My Div</h1>
          <p>This div demonstrates how javascript can be used to hover specific selectors.</p>
     </div>
</body>
</html>
