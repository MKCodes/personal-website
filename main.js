let toggleNavStatus = false;

let toggleNav = function(){
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");

    if (toggleNavStatus == false){
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity = "0.5";

        toggleNavStatus = true;
    }

    else if (toggleNavStatus == true){
        getSidebarUl.style.visibility = "hidden"
        if (screen.width < 1025){
        getSidebar.style.width = "0px";
        }
        else{
            getSidebar.style.width = "50px";
        }
        getSidebarTitle.style.opacity = "0";
    toggleNavStatus = false;
}}