(function () {
    
var defaultBgImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAALCAYAAAByF90EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZpJREFUeNp8kr9Lw0AUx5ukTdMfaWvALlKyKKWNGBBxkIjUSagoKbQ4Z01HcayD0MFJcChF7f9Q6lJQQRycpLM4tC4luhVd1Kbn90ojJUYPPlzu7r1vvvfeMYQQ3x9DBPJk/gAvoA+8E6iQByJYKxaLeiAQuGEYZhCNRh/T6fQRUjivHPcGDwSglkolHQJvEDpF8gaEzFAo1Adn/wnR5CWw3mq1dhuNRikYDN5D6AR7i7lcbp7GVavVAsdxtmmaBaznADMtRBcrNDmZTHb8fj9xYFk2jzMJrq4hmsX3ajwe79K4VCp1q6rqMYQ5R2jGsqzNRCLxzPM8mSYcDhuTZuQzmcwydRyLxazpGFEUrxyhWcMw9nEV4kaSpG6tVlMm9hfq9fqeVxxMbY0LrOv6IYpIvBAEgcDtAeI0RVGaXjEoQZmF7U9ZlpvD4fALdfC5wR+f2u12p1KpZHu93rb73LZt32g0evhpH+5eph2hDiKRCEG7x8DNu6ZpF5gHzh6FOqENgZHzX+8IIwsuwevkBf8Ffel3YMfJ/RZgALTrMYKs/GM2AAAAAElFTkSuQmCC)";
  
// new layout     
var target = document.getElementsByClassName("js-clone-url")[0];
newLayout(target);

function newLayout(target) {
    var link = document.createElement("a");
    link.className = "btn btn-sm sidebar-button c9-button";
    link.title = "Open this repository in Cloud9";
    link.rel = "nofollow";
    link.target = "_blank";

    var isPrivate = document.getElementsByClassName("private").length > 0;
    var user = document.querySelectorAll(".author>a>span")[0].textContent;
    var repo = document.querySelectorAll(".entry-title>strong>a")[0].textContent;
    
    if (isPrivate)
        var url = "git@github.com:" + user + "/" + repo + ".git";
    else
        var url = "git://github.com/" + user + "/" + repo + ".git";
        
    link.href = "https://c9.io/open/git/?url=" + url;
    
    var icon = document.createElement("span");
    
    link.appendChild(icon);
    link.appendChild(document.createTextNode("Clone in Cloud9"));
    
    target.parentNode.appendChild(link);
}


})();
