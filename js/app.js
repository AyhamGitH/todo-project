'use strict';
let arr = [];

let name1 = prompt('please enter your name');
function nameInput(name1) {
if (!name1) {
    arr[0] = 'invalid';
} else {
    arr[0] = name1;
}
}
nameInput(name1);

let gender = prompt('please enter your gender, options: male, female');
function genderInput(gender) {
if (gender === 'male') {
    arr[1] = gender;
} else if (gender === 'female') {
    arr[1] = gender;
}else{
    arr[1] = 'invalid';
}
}
genderInput(gender);

let age = parseInt(prompt('please enter your age'));
function ageInput(gender,age) {
if (age<=0) {
    alert('the age is invalid');
    arr[2] = 'invalid';
} else if (!age) {
    alert('the age is invalid');
    arr[2] = 'invalid';
} else if (gender === 'male') {
    arr[2] = age;
}else if (gender === 'female') {
    arr[2] = age;
}else if(age){
    arr[2] = age;
}
}
ageInput(gender,age);

let welcome = confirm("do you want to skip the welcoming message");
function wecomeMessage(welcome,name1,gender) {
if (welcome) {
    console.log('the user skipped the welcoming message');
} else if(name1){
    switch(gender){
        case 'male':
            alert(`welcome Mr ${name1}`)
            break;
        case 'female':
            alert(`welcome Ms ${name1}`)
            break;
        default:
            alert(`welcome ${name1}`)
    }
} else{
    alert('welcome')
}
}
wecomeMessage(welcome,name1,gender);

if (welcome) {
let answer1 = prompt('do you like sports? please answer with a yes or no');
let answer2 = prompt('are you interested in music? please answer with a yes or no');
let answer3 = prompt('did you complete the assignment? please answer with a yes or no');

function questions(answer1, answer2, answer3) {
if (answer1 === 'yes') {
    arr[3] = 'yes';
}else if(answer1 === 'no'){
    arr[3] = 'no';
}else {
    arr[3] = 'invalid';
}


if (answer2 === 'yes') {
    arr[4] = 'yes';
}else if(answer2 === 'no'){
    arr[4] = 'no';
}else {
    arr[4] = 'invalid';
}


if (answer3 === 'yes') {
    arr[5] = 'yes';
}else if(answer3 === 'no'){
    arr[5] = 'no';
}else {
    arr[5] = 'invalid';
}
}
questions(answer1, answer2, answer3);
}

for(let i=0; i< arr.length; i++){
    switch(i){
        case 0:
            console.log(`name: ${arr[i]}`);
            break;
        case 1:
            console.log(`gender: ${arr[i]}`);
            break;
        case 2:
            console.log(`age: ${arr[i]}`);
            break;
        case 3:
            console.log(`answr for question1: ${arr[i]}`);
            break;
        case 4:
            console.log(`answr for question2: ${arr[i]}`);
            break;
        case 5:
            console.log(`answr for question3: ${arr[i]}`);
            break;
    }
    
}
