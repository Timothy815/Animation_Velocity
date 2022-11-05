/*
variables like these can be kept in a style.js file and used like 
library, not unlike css.
*/


var fadeIn ={
	p:{
		opacity:1,
		//top: "50px"
	},
	o:{
		fast:{
			duration:500,
			easing: "ease-in",
			delay:500
		},
		slow:{
			duration:1000,
			easing: "ease-in",
			delay:500
		}
	}
};

var fadeOut ={
	p:{
		opacity:0,
		//top: "50px"
	},
	o:{
		fast:{
			duration:500,
			easing: "ease-in",
			delay:500
		},
		slow:{
			duration:1000,
			easing: "ease-in",
			delay:500
		}
	}
};

//////////////////

var $ball1 = $("#ball1");
$ball1.velocity({width: "100px", height: "100px", fontSize:"15px", transform: ['rotate(360deg)','rotate(0deg)']},{duration: 1000, easing: "swing", delay: 500});

var $ball2 = $("#ball2");
$ball2.velocity(fadeOut.p, fadeOut.o.fast)
.velocity(fadeIn.p, fadeIn.o.fast);
/*.velocity({
	transform: [ 
		"translateX(0px) rotate(360deg)",
		"translateX(0px) rotate(0deg)"
	],
	width: [ "110px", [ 250, 15 ] ], // Uses custom spring physics
	height: ["110px",[ 0.17, 0.67, 0.83, 0.67 ]],
	backgroundColor: [ "rgba(255,255,12,1.0)" ],
	
}, {
	easing: "easeInSine" // Default easing
});*/

let el = document.getElementById("ball1");
el.addEventListener("click", function scroller1(){
	$("html").velocity(
		{scrollTop: "500px"},
		{duration: 1800, easing: "spring"}  //[50,5]
	);
});

//listener with alternative syntax
let el2 = document.getElementById("ball2");
el2.addEventListener("click", function scroller2(){
	$("html").velocity({
		properties: {scrollLeft: "0px",scrollTop: "0px"},
		options: {duration: 300, easing: "easeInSine"}
	});
});



///using velocity utils////// 




var $btn1 = $("#btn1");
var $btn2 = $("#btn2");
var $btn3 = $("#btn3");



//$btn1.velocity({transform: ["translateY(30px)","translateY(0px)"]},{duration:1000, delay:1000});



	//	transform: ["translate3d(0,0px,0)", "easeOutCubic"]


function mybounce(element){
	element.velocity({
		transform: [ "perspective(100px) translate3d(0.1px, 0.1px, -50px)", "perspective(100px) translate3d(0.1px, 0.1px, 0px)"]
	},{
		
		duration:200,
		easeing: "spring"
	})
	.velocity({
		transform: [ "perspective(100px) translate3d(0.1px, 0.1px, 30px)", "perspective(100px) translate3d(0.1px, 0.1px, -50px)"]
	},{
		
		duration:100,
		easeing: "spring"
	})
	.velocity({
		transform: [ "perspective(100px) translate3d(0.1px, 0.1px, -10px)", "perspective(100px) translate3d(0.1px, 0.1px, 30px)"]
	},{
		
		duration:100,
		easeing: "spring"
	})
	.velocity({
		transform: [ "perspective(100px) translate3d(0.1px, 0.1px, 0px)", "perspective(100px) translate3d(0.1px, 0.1px, -10px)"]},{
			
			duration:50,
			easeing: "spring"
		})

}

var btn1 = document.getElementById("btn1")

btn1.addEventListener("click", ()=>{
	mybounce($btn1);
});

var btn2 = document.getElementById("btn2")

btn2.addEventListener("click", ()=>{
	mybounce($btn2);
});

var btn3 = document.getElementById("btn3")

btn3.addEventListener("click", ()=>{
	mybounce($btn3);
});


//$btn1.velocity({
//	transform: [ "perspective(100px) translate3d(0.1px, 0.1px, -110px)", "perspective(100px) translate3d(0.1px, 0.1px, 0px)"]
//},{
//	
//	duration:200,
//	easeing: "spring"
//})
//.velocity({
//	transform: [ "perspective(100px) translate3d(0.1px, 0.1px, 30px)", "perspective(100px) translate3d(0.1px, 0.1px, -110px)"]
//},{
//	
//	duration:100,
//	easeing: "spring"
//})
//.velocity({
//	transform: [ "perspective(100px) translate3d(0.1px, 0.1px, -10px)", "perspective(100px) translate3d(0.1px, 0.1px, 30px)"]
//},{
//	
//	duration:100,
//	easeing: "spring"
//})
//.velocity({
//	transform: [ "perspective(100px) translate3d(0.1px, 0.1px, 0px)", "perspective(100px) translate3d(0.1px, 0.1px, -10px)"]},{
//	
//	duration:50,
//	easeing: "spring"
//})

//velocity({ transform: [ "perspective(100px) translate3d(0.1px, 0.1px, -110px)", "perspective(100px) translate3d(0.1px, 0.1px, 0px)"] });