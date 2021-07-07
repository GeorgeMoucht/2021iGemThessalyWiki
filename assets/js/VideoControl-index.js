/* Video loop control buttons */
var video = videojs("myVideo",{
    plugins: {
        abLoopPlugin: {},
    
    }
    });
    var plus = document.getElementById("loopcounterPlus");
    var minus = document.getElementById("loopcounterMinus");
    var count = 0;
    plus.onclick = function(){
        count += 1;
        if (count == 1) {
        video.ready(function(){
            this.abLoopPlugin.setStart(50).setEnd(52).playLoop();
            });
        };
        if (count == 2) {
            video.ready(function(){
                this.abLoopPlugin.setStart(52).setEnd(56).playLoop();
            });
        };
    
    };
    minus.onclick = function(){
        count -= 1;
        if (count == 0) {
        video.ready(function(){
            this.abLoopPlugin.setStart(0).setEnd(40).playLoop();
            });
        };
    };