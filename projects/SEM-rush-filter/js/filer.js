function Filter(myId, myClass){
    this.id = myId;
    this.class = myClass;
    this.content = [];
}

Filter.prototype.addRow = function (row){
    var row = row;
    this.content.push(row)
}

Filter.prototype.getRowNumber = function(){
    var filter = document.getElementById(this.id);
    return filter.querySelectorAll(".filter-row").length;
}

Filter.prototype.render = function(){
    
    //Создание главного блока
    var container = document.createElement("div");
    container.id = this.id; 
    container.className = this.class; 

    var addButtField = document.createElement("div");
    addButtField.className = "button-fieldset";

    var addButton = document.createElement("button");
    addButton.className = "add-button";
    addButton.innerHTML = "Add contribution";

    var actButtField = document.createElement("div");
    actButtField.className = "action-fieldset";

    var applyButton = document.createElement("button");
    applyButton.className = "apply-button";
    applyButton.innerHTML = "Apply";

    var clearButton = document.createElement("button");
    clearButton.className = "clear-button";
    clearButton.innerHTML = "Clear filter";

    addButtField.appendChild(addButton);
    actButtField.appendChild(applyButton);
    actButtField.appendChild(clearButton);
    container.appendChild(addButtField);
    container.appendChild(actButtField);

    return container;
}

Filter.prototype.showInfo = function (){
    
    var rowList = document.querySelectorAll("#"+this.id+" .filter-row");
    var infObj = {
        text:[],
        number:[]
    };

    for (var i = 0; i < rowList.length; i++){
        
        var row = rowList[i];
        var firstSelect = row.firstChild;
        var secondSelect = firstSelect.nextSibling;
        var input = secondSelect.nextSibling;
        
        var rowObj;
        if (firstSelect.value === "Text field"){
            rowObj = {
                operation: secondSelect.value,
                value: input.value
            }
            infObj.text.push(rowObj);
        }

        if (firstSelect.value === "Number field"){
            rowObj = {
                operation: secondSelect.value,
                value: input.value
            }
            infObj.number.push(rowObj);
        }

    }
    
    var content = this.content;
    for (var i = 0; i < content.length; i++){
        var type = content[i].type;
        var rowObj = content[i].getRowObj();
        if (type === "Text field"){
            infObj.text.push(rowObj);
        } else if (type === "Number field"){
            infObj.number.push(rowObj);
        }
    }
    
    console.log(infObj)

}