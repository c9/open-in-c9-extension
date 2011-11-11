(function () {
// this is just github!
if (!document.getElementsByClassName("native-clones").length || !document.getElementsByClassName("public_clone_url").length) {
	return;	
}

// find the target element
var target = document.getElementsByClassName("native-clones")[0].getElementsByTagName("li")[0];

// create a new element
var li = document.createElement("li");
var btn = document.createElement("a");
btn.className = "minibutton";
btn.href = "#";
btn.target = "_blank";
btn.innerHTML = "<span>Edit in Cloud9</span>";

btn.style["background-image"] = "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#15BD3F), to(#1F8739))";
btn.style["color"] = "white";
btn.style["text-shadow"] = "1px 1px 0 #009000";

li.appendChild(btn);

// adjust URL textbox width
document.getElementsByClassName("url-field")[0].style.width = '300px';

btn.addEventListener("click", function () {
	// what's the clone URL?
	var cloneUrl = document.getElementsByClassName("public_clone_url")[0].getElementsByTagName("a")[0].href;

	var fileMatch = document.location.href.match(/\bblob\b\/(?:[^\/]+)\/(.*)/);
	if (fileMatch) {
    	cloneUrl += "&file=" + fileMatch[1];
	}
	
	btn.href = "http://c9.io/open/git/?url=" + cloneUrl;
	
	return true;
});

// and add it to the DOM
target.parentNode.insertBefore(li, target);

})();