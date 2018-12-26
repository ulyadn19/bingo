function shuffle() {
    var num = [];
    var numrandom = [];
    for (var i=0; i<25; i++){
        num.push(i+1);
    }
    for (var a = num, i = a.length; i--; ) {
        var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        numrandom.push(random);
        
    }
    return numrandom;
}
function createElement() {
    var number = shuffle();
    var element = document.getElementById("wrapper");
    for (var i=0; i<25; i++) {
        
        var div1 = document.createElement("div");
        div1.setAttribute("class","box");
        div1.setAttribute("id", i+1);
        var span = document.createElement("span");
        span.setAttribute("class", "span");
        
        var span1 = document.createTextNode(number[i]);
        span.appendChild(span1);
        div1.setAttribute("onclick", "clickEvent(this)");
        div1.appendChild(span);
        element.appendChild(div1);
        
    }
}
var bingo = [
    ['1','2','3','4','5'],
    ['6','7','8','9','10'],
    ['11','12','13','14','15'],
    ['16','17','18','19','20'],
    ['21','22','23','24','25'],
    ['1','6','11','16','21'],
    ['2','7','12','17','22'],
    ['3','8','13','18','23'],
    ['4','9','14','19','24'],
    ['5','10','15','20','25'],
    ['1','7','13','19','25'],
    ['5','9','13','17','21']
];
var selected = [];
function clickEvent(elmnt) {
  
    if(elmnt.style.backgroundColor == "yellow"){
        alert("Please click on another box");
    }else{
        elmnt.style.backgroundColor = "yellow";
        selected.push(elmnt.getAttribute("id"));//menyimpan id dari kotak yg dipilih
        

        for(var i = 0; i < bingo.length; i++) {
            var cellExists = 0;//
    
            for(var j = 0; j < 5; j++) {
                if(selected.indexOf(bingo[i][j] ) > -1) {
                    cellExists++;
                }
            }
    
            // If all 5 winner cells exist in selected array alert success message
            if(cellExists == 5) {//jika 5 cell yg dipilih sesuai 
                alert('BINGO!');
                //document.getElementById("wrapper").getElementsByTagName("div").style.backgroundColor="white";
                //selected=[];
            }
        }
    }  
    // for (var index = 0; index < selected.length; index++) {
    //     console.log(selected[index]);
        
        
    // }
    
    
  }