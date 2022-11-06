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
	var ease = "ease-in-out";
	var dur = 60;
	element.velocity({
		transform: [ "perspective(100px) translate3d(0.1px, 0.1px, -15px)", "perspective(100px) translate3d(0.1px, 0.1px, 0px)"]
	},{
		
		duration:dur,
		easeing: ease
	})
	.velocity({
		transform: [ "perspective(100px) translate3d(0.1px, 0.1px, 10px)", "perspective(100px) translate3d(0.1px, 0.1px, -15px)"]
	},{
		
		duration:dur - 10,
		easeing: ease
	})
	.velocity({
		transform: [ "perspective(100px) translate3d(0.1px, 0.1px, -10px)", "perspective(100px) translate3d(0.1px, 0.1px, 5px)"]
	},{
		
		duration:dur - 20,
		easeing: ease
	})
	.velocity({
		transform: [ "perspective(100px) translate3d(0.1px, 0.1px, 0px)", "perspective(100px) translate3d(0.1px, 0.1px, 5px)"]},{
			
			duration:dur - 30,
			easeing: ease
		})

}



$btn1.on("mouseover click", ()=>{
	mybounce($btn1);
});



$btn2.on("mouseover click", ()=>{
	mybounce($btn2);
});


$btn3.on("mouseover click", ()=>{
	mybounce($btn3);
});


//queues
//$btn1.velocity({top: "50px",left: "90px"},{duration:1000})
//.velocity("reverse",{duration:1000})
//.velocity({height:"35px",width:"50px"},{duration:1000});
//
//$btn1.velocity({height: "50px"},{duration:1000,queue:false});
//$btn1.velocity({width: "110px"},{duration:1000,queue:false});

//stagger
var cls = document.getElementsByClassName("btn");
var btnlst = cls;


btnlst.velocity({
	transform: ["translateY(100px)","translateY(0px)"],
	width:"100px",
	opacity: 1
}, {
	
	stagger: 300,
	duration: 1000,
	speed: 2,
	easing:[3000,50]
	

	
});

//progress: tweening
var info = document.getElementById("info");
//info.innerHTML="The current tween value is " + tweenValue;
$btn1.velocity({
	tween: [ 0, 1000 ]
}, {
	progress: function(elements, percentComplete, remaining, tweenValue, activeCall) {
		console.log("The current tween value is " + tweenValue)
		//info.innerHTML="The current tween value is " + tweenValue;
	}
});
/*
$btn1.velocity({
	//opacity: 0.5,
	tween: 1000 // Optional
}, {
	progress: function(elements, percentComplete, remaining, tweenValue, activeCall) {
		console.log("Current element:", activeCall.element);
		console.log((percentComplete * 100) + "%");
		console.log("Started at", new Date(Date.now() - activeCall.ellapsedTime));
		console.log(remaining + "ms remaining!");
		console.log("The current tween value is", tweenValue);
	}
});
	*/

/*
var cls2 = document.getElementsByClassName("btn");
var btnlst2 = cls2;

	btnlst2[0].velocity({ height: "100px" },{duration:500, easing:"ease-in-out"});
	btnlst2.velocity({ opacity: 0.5 }, { sync: false });
*/