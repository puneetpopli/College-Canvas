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
               // alert("The data was saved.");
				//setting user details in panel

				var res1 = JSON.parse(record);
				var jsonres = JSON.parse(res1);
				console.log(jsonres);

				//first page
				document.getElementById("userfname").value = jsonres.firstname;
				document.getElementById("userlname").value = jsonres.lastname;
				document.getElementById("usersid").value = jsonres.studentid;
				document.getElementById("usereid").value = jsonres.email;

				//second page
				document.getElementById("fnameusercourse").value = jsonres.firstname;
				document.getElementById("lnameusercourse").value = jsonres.lastname;
				document.getElementById("sidusercourse").value = jsonres.studentid;
				document.getElementById("eidusercourse").value = jsonres.email;

				//third page
				document.getElementById("fnameusersettings").value = jsonres.firstname;
				document.getElementById("lnameusersettings").value = jsonres.lastname;
				document.getElementById("sidusersettings").value = jsonres.studentid;
				document.getElementById("eidusersettings").value = jsonres.email;

				//fourth page
				document.getElementById("fname").value = jsonres.firstname;
				document.getElementById("lname").value = jsonres.lastname;
				document.getElementById("sid").value = jsonres.studentid;
				document.getElementById("eid").value = jsonres.email;


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

			if (email == arr[i]) {

				flag = true;
				break;
			}
		}
		alert(flag);
		if(flag) {

			$("#btnLogin").attr("href", "#profhomepage");
		}
		else {
			$("#btnLogin").attr("href", "#userpage");
		}
		//flag=!flag;
		if(email == "" || email == " " || !emailCompare.test(email)){
			alert("Enter correct Email ID");
		}/*else if(pass == "" || !passwordCompare.test(pass)) {
			alert("Wrong Password"); }*/
		else{
			if(obj!=null || obj!=undefined) {
				console.log(obj);

					var jsonobj = $.parseJSON(obj);

					var res = JSON.parse(jsonobj);


					//check password and emails
					if(res.email==email && res.password==pass) {

						//first page
						document.getElementById("userfname").value = res.firstname;
						document.getElementById("userlname").value = res.lastname;
						document.getElementById("usersid").value = res.studentid;
						document.getElementById("usereid").value = res.email;

						//second page
						document.getElementById("fnameusercourse").value = res.firstname;
						document.getElementById("lnameusercourse").value = res.lastname;
						document.getElementById("sidusercourse").value = res.studentid;
						document.getElementById("eidusercourse").value = res.email;

						//third page
						document.getElementById("fnameusersettings").value = res.firstname;
						document.getElementById("lnameusersettings").value = res.lastname;
						document.getElementById("sidusersettings").value = res.studentid;
						document.getElementById("eidusersettings").value = res.email;

						//fourth page
						document.getElementById("fname").value = res.firstname;
						document.getElementById("lname").value = res.lastname;
						document.getElementById("sid").value = res.studentid;
						document.getElementById("eid").value = res.email;


					}
					else {

					$("#authdiv").show();
					}

					}//if
			}//else
    });//login fn


	//Compute Grade
	$("#computeGrade").click(function(){


		var currentGrade = "NA";
		var obj=localStorage.getItem($('#classNameComputeGrade').val());
		var jsonobj = $.parseJSON(obj);

		var res = JSON.parse(jsonobj);

		var totalOutOf=(res.mHomeworks*res.sHomeworks/100)+(res.mLabs*res.sLabs/100)+(res.mProject*res.sProject/100)+(res.mPresentation*res.sPresentation/100)+(res.mMidterm*res.sMidterm/100)+(res.mFinal*res.sFinal/100);
		var totalCurrent=Number( $('#homeworks').val() )+Number( $('#labs').val() )+Number( $('#project').val() )+Number( $('#presentation').val() )+Number( $('#midterm').val() )+Number( $('#final').val() )
		var percent=(totalCurrent*100)/totalOutOf;

		console.log("Final:"+Number( $('#final').val() ));
		if(percent>res.sA)
		{
			currentGrade="A";
		}
		else if(percent>res.sB && percent<=res.eB)
		{
			currentGrade="B";
		}
		else if(percent>res.sC && percent<=res.sC)
		{
			currentGrade="C";
		}
		$('#finalgrade').text(currentGrade);
		//console.log("total:"+totalOutOf);
		//console.log("total Current:"+totalCurrent);
		//alert($('#homeworks').val());
	});

	//ends here

	//ADD GRADES-PROFESSOR

	$("#addClass").click(function(){
		var name=$('#classNameAddClass').val();

		try {

			var user = JSON.stringify({
				mHomeworks: $("#mHomeworksaddclass").val(),
				mLabs: $("#mLabsaddclass").val(),
				mProject: $("#mProjectaddclass").val(),
				mPresentation: $("#mPresentationaddclass").val(),
				mMidterm: $("#mMidtermaddclass").val(),
				mFinal: $("#mFinaladdclass").val()  ,

				sHomeworks: $("#sHomeworksaddclass").val(),
				sLabs: $("#sLabsaddclass").val(),
				sProject: $("#sProjectaddclass").val(),
				sPresentation: $("#sPresentationaddclass").val(),
				sMidterm: $("#sMidtermaddclass").val(),
				sFinal: $("#sFinaladdclass").val()  ,

				sA: $("#sAaddclass").val(),
				eA: $("#eAaddclass").val(),
				sB: $("#sBaddclass").val(),
				eB: $("#eBaddclass").val(),
				sC: $("#sCaddclass").val(),
				eC: $("#eCaddclass").val()
			});
			/*console.log($("#mHomeworks1").val());
			 alert($("#mHomeworks1").val());*/
			record = JSON.stringify(user);
			//key = $("#email").val();
			localStorage.setItem(name, record);
			alert("The data was saved.");
			console.log(user);
			//return true;
		}
		catch (e)
		{
			if (e == QUOTA_EXCEEDED_ERR)
			{
				alert('Quota exceeded!');
			}
		}



		classNames.push(name);
		localStorage.setItem('classes', JSON.stringify(classNames));
		//localStorage.setItem(name, classNames);
		console.log(classNames[0]);
	});

	<!-- END HERE-->


	$("#save").click(function() {
		var name=$('#classNameSetting').val();

		try {

			var user = JSON.stringify({
					mHomeworks: $("#mHomeworks").val(),
					mLabs: $("#mLabs").val(),
					mProject: $("#mProject").val(),
					mPresentation: $("#mPresentation").val(),
					mMidterm: $("#mMidterm").val(),
					mFinal: $("#mFinal").val()  ,

					sHomeworks: $("#sHomeworks").val(),
					sLabs: $("#sLabs").val(),
					sProject: $("#sProject").val(),
					sPresentation: $("#sPresentation").val(),
					sMidterm: $("#sMidterm").val(),
					sFinal: $("#sFinal").val()  ,

					sA: $("#sA").val(),
					eA: $("#eA").val(),
					sB: $("#sB").val(),
					eB: $("#eB").val(),
					sC: $("#sC").val(),
					eC: $("#eC").val()
				}),

				record = JSON.stringify(user);
			//key = $("#email").val();
			localStorage.setItem(name, record);
			alert("The data was saved.");
			console.log(user);
			//return true;
		}
		catch (e)
		{
			if (e == QUOTA_EXCEEDED_ERR)
			{
				alert('Quota exceeded!');
			}
		}
	});

});