$(document).ready(function() {
    $("#authdiv").hide();

	$("#review").hide();

	$("#addclassadmin").on("click", function(){

		$("#review").show();

		$("#cid1").attr("value",$("#cid").val());
		$("#cname1").val($("#cname").val());
		$("#timings1").val($("#timings").val());
		$("#gsheet1").val($("#gsheet").val());
		$("#pname1").val($("#pname").val());
	});

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

				//student bio page
				//panel
				document.getElementById("fnamebio").value = jsonres.firstname;
				document.getElementById("lnamebio").value = jsonres.lastname;
				document.getElementById("sidbio").value = jsonres.studentid;
				document.getElementById("eidbio").value = jsonres.email;


				//student bio page
				document.getElementById("fnamebiomain").value = jsonres.firstname;
				document.getElementById("lnamebiomain").value = jsonres.lastname;
				document.getElementById("sidbiomain").value = jsonres.studentid;
				document.getElementById("eidbiomain").value = jsonres.email;


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
		if(flag) {

			document.getElementById("eidprofcourse").value = email;
			document.getElementById("eidprof1").value = email;
			document.getElementById("eidpgrade").value = email;
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


						document.getElementById("userpagewelcome").value = res.firstname;

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
						
						//student bio page
						//panel
						document.getElementById("fnamebio").value = res.firstname;
						document.getElementById("lnamebio").value = res.lastname;
						document.getElementById("sidbio").value = res.studentid;
						document.getElementById("eidbio").value = res.email;


						//student bio page
						document.getElementById("fnamebiomain").value = res.firstname;
						document.getElementById("lnamebiomain").value = res.lastname;
						document.getElementById("sidbiomain").value = res.studentid;
						document.getElementById("eidbiomain").value = res.email;


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
		console.log(res);





		localStorage.setItem("homeLocal",Number( $('#homeworks').val() ));
		localStorage.setItem("labLocal",Number( $('#labs').val() ));
		localStorage.setItem("projectLocal",Number( $('#project').val() ));
		localStorage.setItem("presentationLocal",Number( $('#presentation').val() ));
		localStorage.setItem("midtermLocal",Number( $('#midterm').val() ));
		localStorage.setItem("finalLocal",Number( $('#final').val() ));


		var homeworkPercent=(Number( $('#homeworks').val() )*res.sHomeworks)/res.mHomeworks;
		console.log(homeworkPercent);
		var labsPercent=(Number( $('#labs').val() )*res.sLabs)/res.mLabs;
		console.log(labsPercent);
		var projectPercent=(Number( $('#project').val() )*res.sProject)/res.mProject;
		console.log(projectPercent);
		var presentationPercent=(Number( $('#presentation').val() )*res.sPresentation)/res.mPresentation;
		console.log(presentationPercent);
		var midtemPercent=(Number( $('#midterm').val() )*res.sMidterm)/res.mMidterm;
		console.log(midtemPercent);
		var finalPercent=(Number( $('#final').val() )*res.sFinal)/res.mFinal;

		var percent=homeworkPercent+labsPercent+projectPercent+presentationPercent+midtemPercent+finalPercent;
		console.log(percent);
		if(Math.round(percent)>res.sA)
		{
			currentGrade="A";
		}
		else if(Math.round(percent)>res.sB && Math.round(percent)<=res.eB)
		{
			currentGrade="B";
		}
		else if(Math.round(percent)>res.sC && Math.round(percent)<=res.eC)
		{
			currentGrade="C";
		}
		else if(Math.round(percent)>res.sD && Math.round(percent)<=res.eD)
		{
			currentGrade="D";
		}
		else if(Math.round(percent)<=res.F)
		{
			currentGrade="F";
		}
		else {
			currentGrade = "NA";
		}

		$('#finalgrade').text(currentGrade);

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
				eC: $("#eCaddclass").val(),
				sD: $("#sD").val()  ,
				eD: $("#eD").val()  ,
				F:  $("#F").val(),
			});

			record = JSON.stringify(user);

			localStorage.setItem(name, record);
			//alert("The data was saved.");
			//console.log('add class' + user);

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
					eC: $("#eCaddclass").val(),
					sD: $("#sDaddclass").val()  ,
					eD: $("#eDaddclass").val()  ,
					F:  $("#Faddclass").val(),
				}),

				record = JSON.stringify(user);
			//key = $("#email").val();
			localStorage.setItem(name, record);
			//alert("The data was saved.");
			//console.log(user);
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