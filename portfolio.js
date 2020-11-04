var menuBar = document.querySelectorAll(".menu-bar > li");
var position = document.getElementById("featured").offsetTop;
console.log(position);

function color(num) {
    if(num == 0) {
        menuBar[0].setAttribute("class", "current_page_item");
        menuBar[1].setAttribute("class","");
        scrollTo({top:0,behavior:"smooth"});
    }else{
        menuBar[1].setAttribute("class", "current_page_item");
        menuBar[0].setAttribute("class","");
        scrollTo({top:position,behavior:"smooth"});
    }
}