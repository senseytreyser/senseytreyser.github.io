function tabClick(){
    var container = document.getElementById("interesting");
    var btns = contains.querySelectorAll(".interesting__btn");
    var tabs = contains.querySelectorAll(".interesting__tab");

    container.onclick() = function(e){
        var target = e.target;
        if (target.classList.contains(".interesting__btn")){
            target.classList.toggle("checked");
        }
    }
}