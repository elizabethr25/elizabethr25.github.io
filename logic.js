function openNav() {
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("side-nav").style.width = "25%";
    document.getElementById("side-nav").style.display = "block";
    document.getElementById("close-nav").style.display = 'none';

};

function closeNav() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("side-nav").style.display = "none";
    document.getElementById("close-nav").style.display = "inline-block";
};

$(document).ready(function(){

    // open nav on click
    $("#open-nav").on("click", function(){
        openNav();
    });

    // close nav on click
    $("#close-nav").on("click", function(){
        closeNav();
    });
});



