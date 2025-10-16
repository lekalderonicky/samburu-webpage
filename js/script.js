// document object model for interactivity
// click explore samburu should show a msg 
document.addEventListener('DOMContentLoaded', function() {
    const exploreButton = document.getElementById("explorebtn");
    if (exploreButton) {
        exploreButton.addEventListener("click", function(){
            alert("Welcome, Page under development.");
        });
    }
});