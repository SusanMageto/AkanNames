function myFunction() {
  var date = document.getElementById ("date").value;
  var gender = document.getElementById ("gender").value;
  if (gender==="female") {
    var d = new Date(date);
    var s = d.getDay();

    if (s==0){
      alert ("Akosua");
    }
    else if (s==1) {
      alert ("Adwoa");
    }
    else if (s==2) {
      alert ("Abenaa");
    }
    else if (s==3) {
      alert ("Akua");
    }
    else if (s==4) {
      alert ("Yaa");
    }
    else if (s==5) {
      alert ("Afua");
    }
    else if (s==6) {
      alert ("Ama");
    }
  }
}