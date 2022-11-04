let $ball = $("#animateme");
$ball
.velocity({width: "500px", height: "500px", fontSize:"75px"},{duration: 3000, easing: "easeInQuad", delay: 1000})
.velocity("reverse", {duration: 3000, easing: "easeInQuad"})
.velocity({rotate: "45deg"}, {duration:2000, easing: "easeInQuad"})

