function Behavior(node, obj){
    
    node.onclick = function(e){
        var target = e.target;
        var targetClass = target.className;
        var rowNumber = obj.getRowNumber();
        
        if (targetClass === "apply-button"){
            obj.showInfo();
        }

        if (targetClass === "clear-button"){
            
            //Удаление всех строк
            var rows = document.querySelectorAll("#"+obj.id+" .filter-row");
            rows.forEach(function(item){
                item.remove();  
            });

            //добавление новой чистой строки
            var row = new FilterRow();
            node.insertBefore(row.render(),node.firstChild);

        }

        if (targetClass === "add-button"){
            
            //Добавление новой строки
            if (rowNumber < MAX_ROW_NUMBER){
                var row = new FilterRow();
                var rowList = document.querySelectorAll("#"+obj.id+" .filter-row");
                var lastRow = rowList[rowList.length-1];
                lastRow.parentNode.insertBefore(row.render(),lastRow.nextSibling);
            }

            //Открытие крестиков в конце строки
            if (rowNumber + 1 > 1){
                var crosses = document.querySelectorAll("#"+obj.id+" .cross");
                for (var i = 0; i < crosses.length; i++){
                    crosses[i].classList.remove("hidden");
                }
            }
            
        }

        if (targetClass === "cross"){
            
            //Удаление строки
            target.parentNode.remove();

            //Скрытие крестиков, если осталась только одна строка
            if (rowNumber - 1 === 1){
                document.querySelector("#"+obj.id+" .cross").classList.add("hidden");;
            }

        }

    }

}
