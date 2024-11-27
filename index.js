var sidenav=document.querySelector(".side-navbar")


function showNavbar()
{
    sidenav.style.left="0"
}
function closeNavbar()
{  
    sidenav.style.left="-60%"

}
document.getElementById("shop-now-button").addEventListener("click", function() {
    window.location.href = "collection.html"; // Change to your desired URL
});