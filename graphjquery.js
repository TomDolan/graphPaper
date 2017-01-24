$(document).ready(function(){
	$("#canvasbox").click(function(){hideinfo()});
	$("#overlay").click(function(){hideinfo()});
	$("#menu").click(function(){showinfo()});
	$("#menu").hover(function(){showinfo()},function(){hideinfo()});
	function showinfo(){
		$("#menu").css({
			"position":"absolute",
			"top":"10px",
			"right":"10px",
			"width":"400px",
			"height":"calc(100% - 20px)",
			"margin":"0px",
			"padding":"0px",
			"background-color":"rgba(255,255,255,0.7)",
			"border": "1px solid #cdf",
			"box-shadow": "2px 2px 5px #abd",
			"overflow-x": "hidden",
			"overflow-y": "auto"
		});
	}

	function hideinfo(){
		$("#menu").css({
			"position":"fixed",
			"top":"10px",
			"right":"10px",
			"width":"60px",
			"height":"50px",
			"margin":"0px",
			"padding":"0px",
			"background-color":"rgba(255,255,255,0.5)",
			"border": "1px solid #cdf",
			"box-shadow": "2px 2px 5px #abd",
			"overflow": "hidden"
		});
	}
});