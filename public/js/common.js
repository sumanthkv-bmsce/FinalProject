var data = localStorage.getItem("sample");
localStorage.clear(); 
var value1 = JSON.parse(data).img;
var title = JSON.parse(data).title;
var desc = JSON.parse(data).desc;
var html =  `<img class = "image_sec" src=${value1} ><h3 style="right:5%" class="text">${title}</h3><p class="para">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${desc}.</p><a href="Ide.cpp" target="_blank" download="newfilename" class="target">Download the pdf</a>`;

document.querySelector('.inflate').innerHTML = html;
