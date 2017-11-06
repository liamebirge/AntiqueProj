function gotoSame(url){
  	var win = window.open(url, '_self');
    win.focus();
}

function gotoNew(url){
    var win = window.open(url, '_blank');
    win.focus();
}

function flipImg(antiqueNum){
	document.getElementById("antiqueImg");
	if (document.getElementByClassNames("antiqueImg").src == "https://liamebirge.github.io/AntiqueProj/Pictures/antique" + antiqueNum + ".jpg") 
        {
            document.getElementByClassNames("antiqueImg").src = "https://liamebirge.github.io/AntiqueProj/Pictures/antique" + antiqueNum + "R.jpg";
        }
        else 
        {
            document.getElementByClassNames("antiqueImg").src = "https://liamebirge.github.io/AntiqueProj/Pictures/antique" + antiqueNum + ".jpg";
        }
}