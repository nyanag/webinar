// test run 
// alert('Works')

// To show that getElementsByClassName returns a list
var toggle = document.getElementsByClassName('toggle')
console.log(toggle)

// toggle function

function Toggle(){
  var toToggle = document.getElementById('desc_1');
  if(toToggle.style.display == 'none'){
    toToggle.style.display = "block";
    document.getElementById('toggle').innerHTML = "Less Info";
  } else {
    toToggle.style.display = 'none';
    document.getElementById('toggle').innerHTML = "More Info";
  }
}