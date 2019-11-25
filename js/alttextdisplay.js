function upDate(previewPic){
 
    var sourceImage = previewPic.getAttribute("src");
    document.getElementById("image").style.backgroundImage = "url('"+sourceImage+"')";
    var sourceText = previewPic.getAttribute("alt");
    document.getElementById("message").innerHTML = sourceText;

}