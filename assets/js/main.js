var i=0,text;
text="iGEM Thessaly"



function typing(){
    if(i<text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 40); //50 defines the duration of the effect in millisecs.
    }
}


typing();

var y= 0, textLoad;
textLoad="LOADING"

setTimeout(function typingLoad() {
    if(y<textLoad.length) {
        document.getElementById("textLoad").innerHTML += textLoad.charAt(y);
        y++;
        setTimeout(typingLoad, 80);
    }
},1500);

