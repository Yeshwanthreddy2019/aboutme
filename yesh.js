function mul(){
    var a = Number(document.getElementById('a').value) 
    var b = Number(document.getElementById('b').value) 
    var res = a * b;
    localStorage.setItem("value1",a);
    localStorage.setItem("value2",b);
    localStorage.setItem("result",res);
 document.getElementById("demo").innerHTML = res;
 }







var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://codepen.io/yeshwanth-reddy/pen/RvzOWY.html');
myRequest.onreadystatechange = function () { 
    
    if (myRequest.readyState === 4) {
        
        document.getElementById('ajax-content').innerHTML = myRequest.responseText;
    }
};

function sendTheAJAX() {
    myRequest.send();
    document.getElementById('reveal').style.display = 'none';
}
function storage(){
    document.getElementById('localstorage').innerHTML = "multiplication of "+localStorage.getItem("value1")+ " and "+localStorage.getItem("value2")+ " is "+localStorage.getItem("result");
}