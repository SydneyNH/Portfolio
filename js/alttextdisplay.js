function upDate(previewPic){
 
    var sourceImage = previewPic.getAttribute("src");
    document.getElementById("image").src = sourceImage;
	document.getElementById("image").style.visibility = "visible";
    var sourceText = previewPic.getAttribute("alt");
    document.getElementById("message").innerHTML = sourceText;

}