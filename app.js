var $ball1 = $("#ball1");
$ball1.velocity({width: "100px", height: "100px", fontSize:"15px", transform: ['rotate(360deg)','rotate(0deg)']},{duration: 1000, easing: "swing", delay: 500,loop:10});

var $ball2 = $("#ball2");
$ball2.velocity({
	transform: [ "rotate(360deg)", "rotate(0deg)"], // Uses "spring"
	width: [ "110px", [ 250, 15 ] ], // Uses custom spring physics
	height: "110px" // Defaults to easeInSine, the call's default easing
}, {
	easing: "easeInSine" // Default easing
});

let el = document.getElementById("ball1");
el.addEventListener("click", function scroller1(){
	$("html").velocity(
		{scrollTop: "500px"},
		{duration: 1000, easing: [50,5]}
	);
});
