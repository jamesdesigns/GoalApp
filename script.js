function addItem(){
    "use strict";
    var ul = document.getElementById("listOfGoals");
    var goal = document.getElementById("goal");
    var li = document.createElement("li");
    li.setAttribute('id',goal.value);
    li.appendChild(document.createTextNode(goal.value));
    ul.appendChild(li);
}

function removeItem(){
    "use strict";
    var ul = document.getElementById("listOfGoals");
    var goal = document.getElementById("goal");
    var item = document.getElementById(goal.value);
    ul.removeChild(item);
}