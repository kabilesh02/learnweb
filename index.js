let count=0;
document.getElementById("increase").onclick =function(){
    document.getElementById("countlbl").innerHTML=count++;
}
document.getElementById("decrease").onclick =function(){
    document.getElementById("countlbl").innerHTML=count--;
}
document.getElementById("reset").onclick =function(){
    document.getElementById("countlbl").innerHTML=0;
    
}