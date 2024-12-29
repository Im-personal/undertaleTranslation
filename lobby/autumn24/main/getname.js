var iq = document.getElementById("importantQuestion");

iq.style.display="none"

function getCookie(name) {
   var value = "; " + document.cookie;
   var parts = value.split("; " + name + "=");
   if (parts.length == 2) return parts.pop().split(";").shift();
}

function setCookie(c_name,value,exdays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=value + ((exdays==null)
                                 ? "" : "; expires="+exdate.toUTCString())
                                + "; path=/";
    document.cookie=c_name + "=" + c_value;
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
		document.body.innerHTML=document.body.innerHTML.replace("[$REPLACE-UNAME$]","Вы знаете").replace("[$REPLACE-UNAME$]","говорите").replace("[$REPLACE-UTREAT$]","Корично-ирисковом Пироге").replace("[$REPLACE-UTREAT$]","возле вкуснях")
	}else{
		document.body.innerHTML=document.body.innerHTML.replace("[$REPLACE-UNAME$]",name+", ты знаешь").replace("[$REPLACE-UNAME$]","говоришь, "+name).replace("[$REPLACE-UTREAT$]","пироге, где главный ингридиент - "+utreat).replace("[$REPLACE-UTREAT$]","в комнате, которую "+utreat+" пропитал(а) своим запахом")
	}
	
	
	console.log("inserted!")
	
}