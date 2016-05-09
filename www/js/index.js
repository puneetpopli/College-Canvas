$(document).ready(function() {
    $("#authdiv").hide();

    //signup page
    $("#btnSubmit").click(function(){



        var record;
        var key;

        if ('localStorage' in window && window['localStorage'] !== null) {
            //alert("button");
            try {
                var user = JSON.stringify({ 
                    firstname: $("#firstname").val(), 
                    lastname: $("#lastnmae").val(), 
                    studentid: $("#studentid").val(), 
                    email: $("#email").val(), 
                    password: $("#password").val(), 
                    confirmpassword: $("#confirmpassword").val()  
                }),



                record = JSON.stringify(user);
                key = $("#email").val();
                localStorage.setItem(key, record);
                alert("The data was saved.");
                console.log(user);
                return true;
            } catch (e) {
                if (e == QUOTA_EXCEEDED_ERR) {
                    alert('Quota exceeded!');
                }
            }
        } else {
            alert('Cannot store user preferences as your browser do not support local storage');
        }
    });


    //Login
    $("#btnLogin").click(function(){
        var email =  $("#user_email").val();
        var pass =  $("#user_password").val();
        var stringEmail = String(email);
        var obj = localStorage.getItem(stringEmail);

        if(obj!=null || obj!=undefined) {
            console.log(obj);

           var jsonobj = $.parseJSON(obj);

            var res = JSON.parse(jsonobj);

            //check password and email

            if(res.email==email && res.password==pass) {
                console.log('authenticated');
            }
            else {

                $("#authdiv").show();
            }

        }
    });
        

});