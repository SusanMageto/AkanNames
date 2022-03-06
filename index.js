function myFunction() {
  var date = document.getElementById ("date").value;
  var gender = document.getElementById ("gender").value;
  if (gender==="female") {
    var d = new Date(date);
    var s = d.getDay();
    
    if (s==0){
      alert ("Akosua");
    }
  }
}