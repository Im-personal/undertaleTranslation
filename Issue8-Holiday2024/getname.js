var iq = document.getElementById("importantQuestion");

iq.style.display="none"

function getCookie(name) {
   var value = "; " + document.cookie;
   var parts = value.split("; " + name + "=");
   if (parts.length == 2) return parts.pop().split(";").shift();
}

function setCookie(name, value)
{
	document.cookie = name+'='+value;
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
		name = "You" //PLACEHOLDER
		utreat = "PLACEHOLDER" //PLACEHOLDER
	}
	
	document.body.innerHTML=document.body.innerHTML.replaceAll("[$REPLACE-UNAME$]",name)
	document.body.innerHTML=document.body.innerHTML.replaceAll("[$REPLACE-UTREAT$]",utreat)
	console.log("inserted!")
	
}