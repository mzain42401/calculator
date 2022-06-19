function firstfunction(num){
    var a=document.getElementById('result')
    a.value+=num;
}
function clearresult(){
    var a=document.getElementById('result')
    a.value="";
}
function getresult(){
    var a=document.getElementById('result')
    a.value= eval(a.value)
}

