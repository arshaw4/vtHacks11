document.getElementById('dueBtn').onclick = function(){
    document.getElementById('due').innerHTML = dueDate();
};

function dueDate(){
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth()+1;
    day = date.getDate();
    dueDateVar = new Date(2023,8,17,8);
    if(date<dueDateVar){
        return "Before due date";
    } else{
        return "Past due date";
    }
};