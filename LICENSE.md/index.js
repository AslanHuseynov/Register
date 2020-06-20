var currentTab = 0;
showTab(currentTab);

function showTab(n) 
{
 
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("backBtn").style.display = "none";
  } else {
    document.getElementById("backBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  fixStepIndicator(n)
}

function nextPrev(n) 
{
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length)
  {
    document.querySelector('#summary').style.display = 'block';
    document.querySelector('#tabs-wrapper').style.display = 'none';
    document.querySelector('#summary').style.display = 'block';
    document.querySelector('#summary-firstname').innerHTML = 'First name: ' + document.querySelector('#firstname').value;
    document.querySelector('#summary-lastname').innerHTML = 'Last name: ' + document.querySelector('#lastname').value;
    document.querySelector('#summary-email').innerHTML = 'Email: ' + document.querySelector('#email').value;
    document.querySelector('#summary-phone').innerHTML = 'Phone: ' + document.querySelector('#phone').value;
    document.querySelector('#summary-date').innerHTML = 'Date of birth: ' + document.querySelector('#date').value;
    document.querySelector('#summary-username').innerHTML = 'Username: ' + document.querySelector('#username').value;
    return false;
  }
  showTab(currentTab);
}

function validateForm() 
{
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}
