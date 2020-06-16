var onClickMe = function(id) {
    var data = localStorage.getItem("object_name");
    localStorage.clear(); 
var value1 = JSON.parse(data).key1;
var title = JSON.parse(data).title;
var desc = JSON.parse(data).desc;
let tt = document.getElementById(id); 
alert(title);
var da = {
    'img':value1,
    'title':title,
    'desc':desc
}
  localStorage.setItem("sample",JSON.stringify(da));
  
window.location.href="/commonhtml";
}

var getID= function(id,title,desc) {
let data = {'key1':id,'title':title,'desc':desc};
localStorage.setItem("object_name",JSON.stringify(data));
console.log(id);
onClickMe(id); 
}


var isValid = ()=> {
    return true;
}

document.querySelector('.refreshSubmit').addEventListener("click",(event)=> {
    //event.preventDefault();
})


