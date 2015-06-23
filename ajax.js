 $.ajax({
     type: "POST",
     url: "http://localhost:3001/",
     dataType: 'json',
     data: email_id,
     async: false,
     crossDomain: true,
     success: function(data) {
         alert('success');
     },
     error: function(response, text, err) {
         alert(err);
     }
 });
