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

var span = document.createElement("span");
span.innerHTML = "Edit in Cloud9";

var defaultBgImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAALCAYAAACZIGYHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAeVJREFUeNpi/P//P4OOjg4DOmBkZDQD4hYg0wyI7wPVLQDSU4D0X3S1LFANGAYwMzMf8Pb2fu3n58dy8+ZN4ZkzZ9Z++fJF4+/fv5nohjCh8SWABijy8/PPioiIYGlpaVn/+fPn+NjY2JYFCxZ8BxqczsTEZIDLJYpAPB+I7UGu+vr1K4OCgsImAwODAjY2toM/f/7MvHjxoouiouKNly9fzvn06dMjoLeOAPFEoPa/LPr6+mwcHBx7/v37pwQyAOa1s2fP3gPR9fX1vLdu3VI2NDTcLC4u/vvHjx/GrKysxkD1gUBD3IC0B6O1tbXPr1+/NgOdCjcAFNicnJzP3r9/r3v+/HlLUMAaGRn9Amq+DfQOXA0wfBj+/PnjyWRvb28FkkAPXKCXpIDib4EuUAF665qQkFAzzKUgDNIDshjoCD+mgICAx+zs7GBBGAZJsrCwMKipqTFs3bqVA8g3AxoaDhJHVgfCTk5O3xmBzpJev379g/7+fhaQE5EB0HCgl/91fv/+PRtoOx/IEGTg5eXFUFlZacUI1Zh2//79adOnT2e+ceMGw4cPH8CKgAaAMcz5IBoYLgwaGhoMkZGRDDY2NnONjY1TwAEEDDQQrQXEW4D41X/84CcQHwZiP5A+YHgxAAQYAP+z8zzsaD7sAAAAAElFTkSuQmCC);";

span.style["background-repeat"] = "no-repeat";
span.style["background-position"] = "left 4px";
span.style["padding-left"] = "21px";
span.style["background-image"] = defaultBgImage;
span.style["margin-left"] = "3px";

btn.appendChild(span);

/*
btn.style["background-image"] = "-webkit-gradient(linear, 0% 0%, 0% 100%, from(#15BD3F), to(#1F8739))";
btn.style["color"] = "white";
btn.style["text-shadow"] = "1px 1px 0 #009000";
*/

li.appendChild(btn);

// adjust URL textbox width
document.getElementsByClassName("url-field")[0].style.width = '290px';

// hover state, has to change the background image
btn.addEventListener("mousemove", function () {
	span.style["background-image"] = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAALCAYAAAByF90EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAaBJREFUeNqUkr9LAmEYx+88iSQaLogbGnKwxaIgoiGIoMXAo9AharRBhMIpAlfbWgxyK/8A3YLGEuKGptAhxGgQHaQLRE/PH3envn1f8UTMpB748N77vN/ny/Pc+7LM7zELFvurBmRQBIT5R9DirUQi4dF1PdntdpVarfaezWYvCSHcXwymwDRYi8fjHhjUYHSD4h0YnTYajSK4nWRAi1fBtiiKBz6f77DVar3A6Bq5lWQy6aCiUCjkbbfbnWg06sV2AbDDJnSzQYtlWU4ZhkFMOp2OG2dz6OoJpk58b1YqlRzVFQqF53Q6fQXjwai8IAi75XI5r2kaGaZer59QAUZzZzKZddqxoiifw5pqtfpoGs3HYrFzjEJGKZVKuUAgsNzXLfn9/qNxOnS1Z4FA4Xl+Bq0zo9hsNnskEnlDtxfQCcFg8HicjmVZBzXS8/n8vdVqNTACMwra/3C5XKlwOOy02+3i6DnHcYzFYnkd/HHMfkZvpNlsElVVCa67B7pRJUmKYVXMHAXPoHchiLsfbwBJJ3gAX2RyaEAC+2bttwADAPspjX3615JXAAAAAElFTkSuQmCC);";
});
btn.addEventListener("mouseout", function () {
	span.style["background-image"] = defaultBgImage;
});

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