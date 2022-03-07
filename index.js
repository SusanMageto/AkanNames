function myFunction() {
  var date = document.getElementById ("date").value;
  var gender = document.getElementById ("gender").value;
  if (gender==="female") {
    var d = new Date(date);
    var s = d.getDay();

    if (s==0){
      alert ("Your Akan name is Akosua");
    }
    else if (s==1) {
      alert ("Your Akan name is Adwoa");
    }
    else if (s==2) {
      alert ("Your Akan name is Abenaa");
    }
    else if (s==3) {
      alert ("Your Akan name is Akua");
    }
    else if (s==4) {
      alert ("Your Akan name is Yaa");
    }
    else if (s==5) {
      alert ("Your Akan name is Afua");
    }
    else if (s==6) {
      alert ("Your Akan name is Ama");
    }
  }
  else {
    var d = new Date(date);
    var s = d.getDay();
    if (s==0){
      alert ("Your Akan name is Kwasi");
    }
    else if (s==1) {
      alert ("Your Akan name is Kwadwo");
    }
    else if (s==2) {
      alert ("Your Akan name is Kwabena");
    }
    else if (s==3) {
      alert ("Your Akan name is Kwaku");
    }
    else if (s==4) {
      alert ("Your Akan name is Yaw");
    }
    else if (s==5) {
      alert ("Your Akan name is Kofi");
    }
    else if (s==6) {
      alert ("Your Akan name is Kwame");
    }
  }
}