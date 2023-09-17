const dueDateVar = new Date(2023,8,17,8);
pastDue = false;
document.getElementById("currentDate").innerHTML = "The current time and date is " + new Date();
document.getElementById("dueDate").innerHTML = "VT Hacks 11 is due " + dueDateVar;
document.getElementById('dueBtn').onclick = function(){
    dueResultText = document.getElementById('due');
    dueResultText.innerHTML = dueDate();
    dueResultText.style.color=dueColorChange();
    dueResultText.style.fontWeight = "bold";
};

function dueDate(){
    date = new Date();
    if(date<dueDateVar){
        pastDue = false;
        return "Before due date";
    } else{
        pastDue = true;
        return "Past due date";
    }
};

function dueColorChange(){
    if(pastDue){
        return "red";
    } else{
        return "green";
    }
}