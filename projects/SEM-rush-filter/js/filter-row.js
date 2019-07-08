function FilterRow(type,operation,value){
    
    this.typeList = ["Text field", "Number field"];
    this.opForNumList = ["Equal","Greater than","Less than"];
    this.opForTextList = ["Containing","Exactly matching","Begins with","Ends withText"]

}

FilterRow.prototype.render = function(){
    
    //Создание строоки-обёртки
    var fieldset = document.createElement("div");
    fieldset.className = "filter-row";

    //Создание трёх полей для ввода
    var selectType = document.createElement("select");
    selectType.className = "select-type";
    selectType.addEventListener("change", changeOperations);

    var selectOperation = document.createElement("select");
    selectOperation.className = "select-operation";

    var inputValue = document.createElement("input");
    inputValue.className = "input-value";
    inputValue.setAttribute("type","text");

    //Создание блока с крестиком
    var cross = document.createElement("div");
    cross.className = "cross hidden";
    cross.innerHTML = "X";

    //Заполнение первой выпадашки элементами
    var elem;
    for (var i = 0; i < this.typeList.length; i++){
        elem = document.createElement("option");
        elem.className = "select-type__value";
        elem.innerText = this.typeList[i];
        selectType.appendChild(elem);
    }

    //Заполнение второй выпадашки элементами
    for (var i = 0; i < this.opForTextList.length; i++){
        elem = document.createElement("option");
        elem.className = "select-operation__value text-value";
        elem.innerText = this.opForTextList[i];
        selectOperation.appendChild(elem);
    }

    //Заполнение той же выпадашки элементами из второго массива
    for (var i = 0; i < this.opForNumList.length; i++){
        elem = document.createElement("option");
        elem.className = "select-operation__value num-value hidden";
        elem.innerText = this.opForNumList[i];
        selectOperation.appendChild(elem);
    }

    fieldset.appendChild(selectType);
    fieldset.appendChild(selectOperation);
    fieldset.appendChild(inputValue);
    fieldset.appendChild(cross);

    return fieldset;
}

FilterRow.prototype.getRowObj = function(){
    return {
        operation: this.operation,
        value: this.value
    }
}

function changeOperations(e){
    var target = e.target;
    var selectOperation = target.nextElementSibling;
    
    //Скрытие одних эелементов и открытие других
    var operationList = selectOperation.childNodes;
    var elem;
    for (var i = 0; i < operationList.length; i++){
        elem = operationList[i];
        elem.classList.toggle("hidden");
    }
    
    //Установка значения втоорой выпадашки на значение по умолчанию, соответствующего типа
    var firstSelectValue = target.value;
    var text = "Text field";
    var number = "Number field";
    if (firstSelectValue === text){
        operationList[0].setAttribute("selected","true");
        operationList[4].removeAttribute("selected");
    }
    if (firstSelectValue === number){
        operationList[4].setAttribute("selected","true");
        operationList[0].removeAttribute("selected");
    }


    //Изменение типа поля ввоода
    var input = selectOperation.nextElementSibling;
    var type = input.getAttribute("type");
    if (type === "text"){
        input.setAttribute("type","number");
        input.value = "";
    } else if (type === "number"){
        input.setAttribute("type","text");
        input.value = "";
    }

}