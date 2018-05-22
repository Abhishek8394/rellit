function addFont(fontUrl){
	var newlink = document.createElement('link');
	newlink.rel = "stylesheet";
	newlink.href = fontUrl;
	document.head.appendChild(newlink);
}

$()(function(){	
	addFont("https://fonts.googleapis.com/css?family=Roboto:300,400");
});
