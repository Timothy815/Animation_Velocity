let $ball1 = $("#ball1");
$ball1
.velocity({width: "110px", height: "110px", fontSize:"15px", transform: ['rotate(360deg)','rotate(0deg)']},{duration: 1000, easing: "swing", delay: 500,loop:10});

let $ball2 = $("#ball2");
$ball2
.velocity({opacity: 0},{duration:1000, easing: "swing"},{display:"none"})
.velocity("reverse",{duration: 1000, display: "inline-block", loop:10});




