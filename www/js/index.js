$(document).ready(function() {
    $("#authdiv").hide();

    //signup page
    $("#btnSubmit").click(function(){
        var record;
        var key;
		
		var emailCompare = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/;
		var passwordCompare = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
		var nameCompare = /^[a-zA-Z]{2,30}$/;
		var idCompare = /^\d{10}$/;
		var fname = $("#firstname").val();
		var lname = $("#lastname").val();
		var id = $("#studentid").val();
		var email = $("#email").val();
		var password = $("#password").val();
		var confirmpassword = $("#confirmpassword").val();
		
		if(email == "" || email == " " || !emailCompare.test(email)){
			alert("Enter correct Email ID");
			return false;
		}/*else if(password == "" || !passwordCompare.test(password)) {
			alert("Wrong Password");
			return false;
		}else if(confirmpassword != password){
			alert("Confirm password does not match");
			return false; }
		else if(!nameCompare.test(fname) || fname == ""){
			alert("Enter First Name");
			return false;
		}else if(!nameCompare.test(lname) || lname == ""){
			alert("Enter Last Name");
			return false;
		}else if(!idCompare.test(id) || id == "" || id == " "){
			alert("Enter a Student ID");
			return false;
		}*/

	else{

        if ('localStorage' in window && window['localStorage'] !== null) {
            //alert("button");
            try {
                var user = JSON.stringify({ 
                    firstname: $("#firstname").val(), 
                    lastname: $("#lastname").val(), 
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
        } //if
		else {
            alert('Cannot store user preferences as your browser do not support local storage');
        }
			
			
	} //else
    });


    //Login
    $("#btnLogin").click(function(){

        var email =  $("#user_email").val().toLowerCase();
        var pass =  $("#user_password").val();
        var stringEmail = String(email);
        var obj = localStorage.getItem(stringEmail);

		var arr = ["cmpe235@gmail.com", "cmpe280@gmail.com", "cmpe273@gmail.com", "cmpe272@gmail.com"];

		var emailCompare = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/;
		//var passwordCompare = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

		var flag = false;
		for(var i=0; i<arr.length; i++) {

			if(email == arr[i]) {

				flag=true;
				break;
			}
		}



		if(flag) {
			
			$("#btnLogin").attr("href", "#profhomepage");
		}


		if(email == "" || email == " " || !emailCompare.test(email)){
			alert("Enter correct Email ID");
		}/*else if(pass == "" || !passwordCompare.test(pass)) {
			alert("Wrong Password"); }*/
		else{
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

					}//if
			}//else
    });//login fn
        

});