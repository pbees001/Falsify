var coll = document.getElementsByClassName("collapsibles");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var contents = this.nextElementSibling;
        if (contents.style.display === "block") {
            contents.style.display = "none";
        } else {
            contents.style.display = "block";
        }
    });
}
