(function () {
    
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
    
    var url;
    if (isPrivate)
        url = "git@github.com:" + user + "/" + repo + ".git";
    else
        url = "git://github.com/" + user + "/" + repo + ".git";
        
    link.href = "https://c9.io/open/git/?url=" + url;
    
    var icon = document.createElement("span");
    
    link.appendChild(icon);
    link.appendChild(document.createTextNode("Clone in Cloud9"));
    
    target.parentNode.appendChild(link);
}


})();
