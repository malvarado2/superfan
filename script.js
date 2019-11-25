var a = document.getElementById("apple")
var b = document.getElementById("android")
var c = document.getElementById("picture1")
var d = document.getElementById("picture2")
var e = document.getElementById("picture3")
var f = document.getElementById("picture4")
var g = document.getElementById("midimg")

function addItems (){
	c.classList.remove ("none")
	d.classList.remove ("none")
	e.classList.remove ("none")
	f.classList.remove ("none")
	g.classList.remove ("middleimg3")
	g.classList.add ("middleimg")
}

function androidClick (){
	c.classList.remove ("none")
	d.classList.remove ("none")
	e.classList.remove ("none")
	f.classList.remove ("none")
	g.classList.remove ("middleimg")
	g.classList.remove ("middleimg2")
	g.classList.add ("middleimg3")
	c.classList.remove ("toprightimg2")
	d.classList.remove ("topleftimg2")
	e.classList.remove ("none")
	f.classList.remove ("none")
}

function resetAll(){
	c.classList.add("none")
	d.classList.add("none")
	e.classList.add("none")
	f.classList.add("none")
	g.classList.add ("middleimg2")
	g.classList.add ("middleimg")
	g.classList.remove ("middleimg3")
}

function addItems1 (){
	document.getElementById("midimg").classList.remove ("middleimg2")
	document.getElementById("midimg").classList.add ("middleimg")
	document.getElementById("picture1").classList.remove ("none")
	document.getElementById("picture2").classList.remove ("none")
	document.getElementById("picture3").classList.remove ("none")
	document.getElementById("picture4").classList.remove ("none")
}