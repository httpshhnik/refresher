var doc = "";
var url = location.href;
console.log("SmartRefresher start "+ url);

var interval = setInterval(function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,false);
    xhr.send();
    if(xhr.response.length==0){console.log("Broken "); clearInterval(interval); return;}
    if(doc!=xhr.response.length && doc!=""){
        console.log("Refreshing "+doc+"/"+xhr.response.length);
        location.reload();
    }
    doc = xhr.response.length;
},500);