window.onload = function() {
    var navSide = document.getElementById("nav-1");
    var secondNavSide = document.getElementById("nav-2");

    document.addEventListener("click", navBehavior);
    document.addEventListener("click", sectionBehavior);


    function navBehavior(e){
        var target = e.target;

        //Открытие и закрытие подспиков в основном списке меню
        var nextElem = target.parentElement.nextElementSibling; 
        if (target.classList.contains("nav__link") && nextElem.tagName === "UL"){
            nextElem.classList.toggle("open");
        }

        //Открытие и закрытие ВТОРОГО меню на широких экранах
        if (target.classList.contains("nav__link") && !secondNavSide.classList.contains("open")){
            secondNavSide.classList.add("open");
            return;
        } 
        if(secondNavSide.classList.contains("open") && !target.closest("#nav-2")){
            secondNavSide.classList.remove("open");
            return
        }

        //Открытие и закрытие меню на маленьких экранах
        if (target.closest(".nav__button-opn")){
            navSide.classList.add("open");
            return;
        }  
        if (target.closest(".nav__button-cls") || !target.closest("#nav-1")){
            navSide.classList.remove("open");
            return;
        }  
        
        return;
    }

    function sectionBehavior(e){
        var target = e.target;
        
        if (!target.closest(".section__header") && !target.closest(".section__img")){
            return
        }
        
        //Выбор в target блока section, по которому совершили клик
        while (!target.classList.contains("section")){
            target = target.parentNode;
        }
        
        //Если блок открыт (не имеет класс close), то он просто закрывается
        var section = target;
        var header = section.querySelector(".section__header");
        var content = section.querySelector(".section__content");
        
        if (!header.classList.contains("close")){
            header.classList.toggle("close");
            content.classList.toggle("close");
            return;
        }
        
        //Если блок закрыт (имеет класс close), то при его открытии остальные закрываются
        var allSections = document.querySelectorAll(".section");
        for (var i=0; i<allSections.length; i++){
            var curSection = allSections[i];
            var curHeader = curSection.querySelector(".section__header");
            var curContent = curSection.querySelector(".section__content");
            
            if((curSection === section) || (!curHeader.classList.contains("close"))){
                curHeader.classList.toggle("close");
                curContent.classList.toggle("close");
            }
        }

    }
}

