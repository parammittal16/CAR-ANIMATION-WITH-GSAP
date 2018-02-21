$(document).ready(function(){
    init();
    
});
function init(){
    var audioplay = document.createElement('audio');
        audioplay.setAttribute('src', 'sounds/car_start.wav');
    var audioplay2 = document.createElement('audio');
        audioplay2.setAttribute('src', 'sounds/car_pass.wav');
    var toolTimeLine = new TimelineMax();
    TweenMax.set("#wheel",{x:2500,y:800,opacity:0});
    TweenMax.set("#back_wheel1",{x:2500,y:400,opacity:0});
    TweenMax.set("#back_wheel2",{x:2500,y:400,opacity:0});
    TweenMax.set("#A_outer",{x:1000,y:300,scale:0,opacity:0});
    TweenMax.set("#bonnet",{x:-600,y:400,opacity:0});
    TweenMax.set("#A",{scale:10,x:700,y:400,opacity:0});
    TweenMax.set("#E",{x:800,y:400,opacity:0});
    TweenMax.set("#S",{x:900,y:400,opacity:0});
    TweenMax.set("#top",{x:1000,y:-100,opacity:0});
    TweenMax.set("#AKGEC",{x:-1000,y:200,opacity:0});
    toolTimeLine.to('#wheel',1,{opacity:1});
    toolTimeLine.to('#wheel',1,{x:2000,y:-400,rotation:7200,transformOrigin:"50% 55%"});
    toolTimeLine.to('#wheel',1,{x:-100,y:0,rotation:5000,transformOrigin:"50% 55%"});
    toolTimeLine.to('#wheel',1,{x:500,y:800,rotation:7200,transformOrigin:"50% 55%"});
    toolTimeLine.to('#wheel',1,{x:1300,y:300,rotation:3600,transformOrigin:"50% 55%"});
    toolTimeLine.to("#bonnet",1,{x:1280,y:300,opacity:1});
    toolTimeLine.to("#back_wheel1",1,{x:1300,y:300,opacity:1});
    toolTimeLine.to("#back_wheel2",1,{x:1300,y:300,opacity:1});
    toolTimeLine.to("#top",1,{x:1300,y:300,opacity:1});
    toolTimeLine.to("#S",1,{scale:1,x:1300,y:300,opacity:1});
    toolTimeLine.to("#A",1,{scale:1,x:1300,y:300,opacity:1});
    toolTimeLine.to("#E",1,{scale:1,x:1300,y:300,opacity:1});
    toolTimeLine.to("#A_outer",1,{scale:1,x:1300,y:300,opacity:1});
    toolTimeLine.to("#car",4,{delay:2,x:2500,y:200});
    toolTimeLine.to("#car",4,{
        x:2500,y:-100,onStart:function(){audioplay.play();audioplay2.play()}}
    );

       

    //toolTimeLine
    //.to("#car",1,{x:-400,y:-100},"end")
    //.to("#AKGEC",1,{x:700,y:200,opacity:1},"end");
    //toolTimeLine.to("#car",4,{x:-500});
    //toolTimeLine.to("#AKGEC",4,{x:800});
    //toolTimeLine
    //.to("#car",4,{x:-2500},"end")
    //.to("#AKGEC",4,{x:2500},"end")
    //toolTimeLine.to("#imag",10,{x:-2500});
    

    toolTimeLine.to("#car", 2, {x:-300});
    toolTimeLine.to("#AKGEC", 2,{delay:-2,x:800,opacity:1});

    toolTimeLine.to("#car", 4, {x:-400});
    toolTimeLine.to("#AKGEC", 4,{delay:-4,x:900});

    toolTimeLine.to("#car",3 , {x:-2800});
    toolTimeLine.to("#AKGEC", 3,{delay:-3,x:2800});

    
}