window.onbeforeunload = function () {
    window.scrollTo(2500-window.innerWidth/2,2500-window.innerHeight/2);
};

function randomposition(){
	document.getElementById("randombox").style.left ="" + Math.floor(4000*Math.random())+"px";
	document.getElementById("randombox").style.top = "" + Math.floor(4000*Math.random())+"px";
}

document.onkeydown = keypressed;
document.onkeyup = keydepressed;

wDown=0;
aDown=0;
sDown=0;
dDown=0;
speed=8;

function keypressed(e) {
	e = e || window.event;
	if (e.keyCode == '87'||e.keyCode == '38') {
		// up arrow
    	wDown=1;
    	e.preventDefault();
	}
	else if (e.keyCode == '83'||e.keyCode == '40') {
		// down arrow
    	sDown=1;
    	e.preventDefault();
	}
	else if (e.keyCode == '65'||e.keyCode == '37') {
	   // left arrow
    	aDown=1;
    	e.preventDefault();
	}
	else if (e.keyCode == '68'||e.keyCode == '39') {
	   // right arrow
    	dDown=1;
    	e.preventDefault();
	}
	else if (e.keyCode == '88') {
    	window.scrollTo(2500-window.innerWidth/2,2500-window.innerHeight/2);
    	randomposition();
	}
}

function keydepressed(e) {
	e = e || window.event;
	if (e.keyCode == '87'||e.keyCode == '38') {
		// up arrow
    	wDown=0;
	}
	else if (e.keyCode == '83'||e.keyCode == '40') {
		// down arrow
    	sDown=0;
	}
	else if (e.keyCode == '65'||e.keyCode == '37') {
	   // left arrow
    	aDown=0;
	}
	else if (e.keyCode == '68'||e.keyCode == '39') {
	   // right arrow
    	dDown=0;
	}
}

setInterval(function() {
	if (wDown) {
		window.scrollTo(window.scrollX,window.scrollY-1);
	}

	if (aDown) {
		window.scrollTo(window.scrollX-1,window.scrollY);
	}

	if (sDown) {
		window.scrollTo(window.scrollX,window.scrollY+1);
	}

	if (dDown) {
		window.scrollTo(window.scrollX+1,window.scrollY);
	}

}, 100/speed);