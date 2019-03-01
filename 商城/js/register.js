// JavaScript Document
/*用户名验证*/	
function checkUser(){
	var user=document.getElementById("user").value;
	var userId=document.getElementById("user_prompt");
	var reguser=/^[a-zA-Z]+\w{3,15}$/;
	if(reguser.test(user)==false){
		userId.innerHTML="用户名不正确，请重新输入";
		return false;
	}
		userId.innerHTML="";
		return true;
	
	}
	

	
/*密码验证*/	
function checkPwd(){
  var pwd=document.getElementById("pwd").value;
  var pwdId=document.getElementById("pwd_prompt");
   if(pwd==""){
	  pwdId.innerHTML="密码不能为空";
	  return false;
	  }
	    if(pwd.length<6){
	  pwdId.innerHTML="密码必须等于或大于6个字符";
	  return false;
	  } 
	pwdId.innerHTML="";
		return true;
}
	
function checkRepwd(){
	var repwd=document.getElementById("repwd").value;
	var repwdId=document.getElementById("repwd_prompt");
	var pwd=document.getElementById("pwd").value;
	if(repwd!=pwd){
		repwdId.innerHTML="两次密码输入不一致";
		return false;
		}
	else{
		repwdId.innerHTML="";
		return true;
	}}

/*验证邮箱*/
function checkEmail(){
	var email=document.getElementById("email").value;
	var emailId=document.getElementById("email_prompt");
	var regemail=/^\w+@\w+.[a-zA-Z]{2,3}(.[a-zA-Z]{2,3})?$/;
	if(regemail.test(email)==false){
		emailId.innerHTML="电子邮箱不正确，请重新输入";
		return false;
	}
		emailId.innerHTML="";
		return true;
}

/*验证手机号码*/

function checkMobile(){
	var mobile=document.getElementById("mobile").value;
	var mobileId=document.getElementById("mobile_prompt");
	var regMobile=/^1\d{10}$/;
	if(regMobile.test(mobile)==false){
		mobileId.innerHTML="手机号码不正确，请重新输入";
		return false;
		}
		mobileId.innerHTML="";
		return true;
	}
