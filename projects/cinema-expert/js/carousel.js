function carouselClick(){
    var carousel = document.querySelector("#carousel");
    var largeImg = carousel.querySelector(".carousel__window");

    carousel.onclick = function(event){
        var target = event.target; 
        if (target.classList.contains("carousel__img")){
            changeLargeImage(target, largeImg);
            return;
        }
        return false;
    }   
}

function changeLargeImage(target, largeImg){
    var lageImgLink = target.getAttribute("src");
    largeImg.setAttribute("src",lageImgLink);
}