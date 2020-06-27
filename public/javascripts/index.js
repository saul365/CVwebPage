var desc= document.getElementById('description');

var typewriter =new Typewriter(desc,{loop:true,delay:75});

typewriter.pauseFor(1000)
	.typeString('Saul Badillo: Poliglota').pauseFor(300)
	.deleteChars(9)
	.typeString('Entusiasta de hardware').pauseFor(300)
	.deleteChars(22)
	.typeString('Hoda').pauseFor(300)
	.pauseFor(500).start();
	 
