
 var fun = (function() {    

     var title = (document.getElementById("p1").textContent)
     document.getElementById("p1").textContent = "";

     var author = document.getElementById("p2").textContent;
     document.getElementById("p2").textContent = "";

     var pdf = document.getElementById("p3").textContent;
     document.getElementById("p3").textContent = "";

     var amazon = document.getElementById("p4").textContent;
     document.getElementById("p4").textContent = "";
     
     var titleList = title.split(",");
     var authorList = author.split(",");
     var pdfList = pdf.split(",")
     var amazonList = amazon.split(",");

     var whole = {
         title:titleList,
         author:authorList,
         pdf:pdfList,
         amazon:amazonList
     }

     var table = document.getElementById("insertNew");

     if(pdf.length!==0) {
     whole["title"].forEach((element,index) => {
    var row = table.insertRow(index+1);
     
     var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = whole["title"][index];
    cell2.innerHTML = whole["author"][index];
    cell3.innerHTML = whole["pdf"][index];

    var st = "click to download"
    var res = st.link(whole["pdf"][index])
    cell3.innerHTML = res;

    var str = "Click here";
    var result = str.link(whole["amazon"][index]);
    cell4.innerHTML =  result;

     });
    }
    
})();

var isValid = ()=> {
    return true;
}





