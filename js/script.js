console.log('js');

// use if structure to check eligibility for diving
document.getElementById('submit').addEventListener('click',function(){
  // alert('submit button clicked');
  // receive and store data in a variable
  var age = document.getElementById('age').value;
  console.log(age);

  if (age >= 16) {
    console.log('eligible');
    document.getElementById('exampleModalLabel').innerHTML = 'Cool!' ;
    document.getElementById('result').innerHTML = 'You can sit for driving license test';
  } else {
    console.log('not eligible');
    document.getElementById('exampleModalLabel').innerHTML = 'Sorry!' ;
    document.getElementById('result').innerHTML = 'You cannot sit for driving license test';
  }

});

//  use if structure to dynamically bring html elements and style
document.getElementById('colorIt').addEventListener('click',function(){
  // alert('submit button clicked');
  // receive and store data in a variable
  var color = document.getElementById('color').value;
  console.log(color);

  if (color == 'red') {
    console.log('red');

    document.getElementById('exampleModal').style.background = 'red' ;
    document.getElementById('result').innerHTML = '<img class="img-thumbnail" src="images/red.jpeg" alt="Red image" >';
  } else if (color == 'blue'){
    console.log('blue');
    // document.getElementById('exampleModalLabel').innerHTML = 'Sorry!' ;
    // document.getElementById('result').innerHTML = 'You cannot sit for driving license test';
  } else if (color == 'yellow') {
    console.log('yellow');
  } else if (color == 'black') {
    console.log('black');
  }

});


// work out the total, average and grade for a student's marks
document.getElementById('showGrade').addEventListener('click', function(){

var result = document.getElementById('result');

var name = document.getElementById('name').value;
var mod1 = parseInt(document.getElementById('mod1').value);
var mod2 = parseInt(document.getElementById('mod2').value);
var mod3 = parseInt(document.getElementById('mod3').value);
var mod4 = parseInt(document.getElementById('mod4').value);
console.log(name, mod1, mod2, mod3, mod4);
console.log(typeof(mod1));
var total = mod1 + mod2 + mod3 + mod4;
var average = total / 4;
console.log(total, average);

result.innerHTML = 'Total: ' + total + '<br>' + 'Average: ' + average + '<br>';

if (average < 50) {
  console.log('it is less than 50');
  document.getElementById('exampleModalLabel').innerHTML = 'Sorry! ' + name;
  result.innerHTML += 'You have failed this programme of study';

} else if (average < 80) {
  console.log('it is between 50 and 79');
  document.getElementById('exampleModalLabel').innerHTML = 'Cool! ' +name;
  result.innerHTML += 'You have passed this programme of study';

} else {
  console.log('it is greater than or equal to 80');
  document.getElementById('exampleModalLabel').innerHTML = 'Congratulations! ' + name;
  result.innerHTML += 'You have passed this programme of study with distinction';

}


});
