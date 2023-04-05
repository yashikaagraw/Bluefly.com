// Write code related to Home page here
document.getElementById("create").addEventListener("submit",formdata);
var formarr = JSON.parse(localStorage.getItem("assignments")) || [];

function formdata(event) {
    event.preventDefault();

    var detail = {
        name : document.getElementById("name").value,
        desc : document.getElementById("desc").value,
        type : document.getElementById("type").value,
        course : document.getElementById("course").value,
        sprint : document.getElementById("sprint").value,
        schedule : document.getElementById("schedule").value,

    }
    
    document.getElementById("name").value ="";
    document.getElementById("desc").value ="";
    document.getElementById("schedule").value ="";
    
    formarr.push(detail);
    localStorage.setItem("assignments", JSON.stringyfy(formarr));
}
// formdata();