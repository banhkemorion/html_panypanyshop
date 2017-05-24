// JavaScript Document
var count = 0;
var current_image = 0;
function slide_image() {
	count += 1;
	var jum = 1;
	var left_1 = parseInt(document.getElementById("id1").style.left) + jum;
	var left_2 = parseInt(document.getElementById("id2").style.left) + jum;
	var left_3 = parseInt(document.getElementById("id3").style.left) + jum;
	document.getElementById("id1").style.left= left_1 + "px";
	document.getElementById("id2").style.left= left_2+ "px";
	document.getElementById("id3").style.left= left_3+ "px";
	if (count % 1000 == 0){
		id = "id" + (3 - current_image % 3);
		resetImage(id);
		setTimeout("slide_image()", 4000);
		current_image += 1;
	}
	else{
		setTimeout("slide_image()", 0.01);
	}
}
function resetImage(id) {
	document.getElementById(id).style.left = "-2000px";
}
// slide_image();
// var box = 0;
	// function slidebox1() {
	// var box = 0;
	// var img = new Array();
	// 	img[0] = "images/box/box1/img1.jpg";
	// 	img[1] = "images/box/box1/img2.jpg";
	// 	img[2] = "images/box/box1/img3.jpg";	
	// 	document.slideBox.src = img[box];
	// 		if (box < img.length - 1) box++;
	// 		else box = 0;
	// 	setTimeout("slidebox1()",10);
	// }
var img = new Array(); 
var anh = 0;
function sidleshow(){ 
img[0] = "images/box/box1/img1.jpg"; 
img[1] = "images/box/box1/img2.jpg"; 
img[2] = "images/box/box1/img3.jpg";
document.slide.src = img[anh]; 
if(anh < img.length - 1) anh++; 
else anh = 0; 
setTimeout("sidleshow()",2000); 
}

// var anh2 = 0; 
// var img = new Array(); 
// function sidleshow2(){ 
// img[0] = "images/box/box2/img1.jpg"; 
// img[1] = "images/box/box2/img2.jpg"; 
// img[2] = "images/box/box2/img3.jpg"; 
// document.slide2.src = img[anh]; 
// if(anh2 < img.length - 1) anh2++; 
// else anh2 = 0; 
// setTimeout("sidleshow2()",1000); 
// }