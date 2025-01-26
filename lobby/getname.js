var iq = document.getElementById("importantQuestion");

iq.style.display="none"

function getCookiepr(name) {
   var value = "; " + document.cookie;
   var parts = value.split("; " + name + "=");
   if (parts.length == 2) return parts.pop().split(";").shift();
}

function getCookie(name){
	a = localStorage.getItem(name);
	if(getCookiepr(name))return getCookiepr(name);
	if(a)return a;
	return undefined;
}

function setCookie(c_name,value,exdays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=value + ((exdays==null)
                                 ? "" : "; expires="+exdate.toUTCString())
                                + "; path=/";
    document.cookie=c_name + "=" + c_value;
	
	localStorage.setItem(c_name, value);
}

name = getCookie("uname")
utreat = getCookie("utreat")

if(name!='undefined'){
	insert();
}else{
	iq.style.display="flex";
}

function saveData(){
	iq.style.display="none";
	fname = document.getElementById("uname").value;
	ftreat = document.getElementById("utreat").value;
	if(fname.length+ftreat.length<=0){
		return;
	}
	
	
	setCookie("uname",fname);
	setCookie("utreat",ftreat);
	
	
	name = fname;
	utreat = ftreat
	insert();
}

function noTxs(){
	iq.style.display="none";
	insert();
}

function change(){
	
	window.setTimeout(function() {
		if(document.getElementById("uname").value.length>0 && document.getElementById("utreat").value.length>0){
			document.getElementById("done").disabled=false;
		}else{
			document.getElementById("done").disabled=true;
		}
	}, 1)
	
	
}

function insert(){
	
	if(name=='undefined' || utreat == 'undefined'){
		console.log("ye")
		name = "Ты знаешь" //PLACEHOLDER
		document.body.innerHTML=document.body.innerHTML.replace("[$REPLACE-UNAME$]",name)
		document.body.innerHTML=document.body.innerHTML.replace("[$REPLACE-UNAME$]",name)
		utreat = "PLACEHOLDER" //PLACEHOLDER
	}else{
	document.getElementById("reset").style.display = "block";
	document.body.innerHTML=document.body.innerHTML.replace("[$REPLACE-UNAME$]",name)
	document.body.innerHTML=document.body.innerHTML.replace("[$REPLACE-UNAME$]",name+" знает")
	document.body.innerHTML=document.body.innerHTML.replaceAll("[$REPLACE-UTREAT$]",utreat)
	}
	console.log("inserted!")
	
	
	
}

function reset(){
	deleteAllCookies() 
	document.body.innerHTML = "File not found. <audio id=\"beep\" loop autoplay> <source src=\"wind.mp3\" type=\"audio/wav\" /></audio>"
	//var audio = new Audio('wind.mp3');
	//audio.play();
}

function deleteAllCookies() {
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
	localStorage.clear();
}