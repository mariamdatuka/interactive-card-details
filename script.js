'use strict';
 //selectors
 const cardHolder = document.getElementById('holder-name');
 const cardNumber = document.getElementById('card-name');
 const expMonth = document.getElementById('exp-date');
 const expYear = document.getElementById('exp-year');
 const cardCvc = document.getElementById('cvc');
 const form = document.getElementById('main-form')
 //Error messages
 const spanHolder = document.querySelector('.holder-id');
 const cardNum=document.querySelector('.card-id');
 const expNum=document.querySelector('.exp-id');
 const yearNum=document.querySelector('.year-id');
 const cvcNum=document.querySelector('.cvc-id');


 form.addEventListener('submit', function(e){

    checkIfEmpty(cardHolder, spanHolder);
    checkIfLetters(cardHolder, spanHolder);
    checkIfEmpty(cardNumber, cardNum);
    checkIfOnlyNumber (cardNumber, cardNum);
    checkIfEmpty(expMonth, expNum);
    checkIfOnlyNumber(expMonth, expNum);
    checkIfEmpty(expYear, yearNum);
    checkIfOnlyNumber(expYear, yearNum);
    checkIfEmpty(cardCvc, cvcNum);
    checkIfOnlyNumber(cardCvc, cvcNum);
    expLength(expMonth, expNum);
    expLength(expYear, yearNum);
    cvcLength(cardCvc,cvcNum);
    checkIfOnlyNumber(expMonth, expNum);
    checkIfOnlyNumber(expYear, yearNum);
    checkIfOnlyNumber(cardCvc,cvcNum);
    
    //if all the inputs are valid, submit the form
   if(isFormValid()){
    form.onsubmit();
   } else {
    e.preventDefault();
   }
    
 });



 //check  if the card number field contains only numbers
const checkIfOnlyNumber = (int, error)=>{
 if (/^[0-9]+$/.test(int.value) & (int.value)!=='') {
    int.style.border='1.5px solid green';
    error.innerText='';
    return true;
    
} else if (!/^[0-9]+$/.test(int.value) & (int.value)!=='') {
    error.innerText='Number must not contain letters';
    int.style.border='1.5px solid red';
    return false;

}
}

//check if a field is empty
const checkIfEmpty = (input, errorMsg) =>{
    if (input.value === ''){
        errorMsg.innerText='must not be empty';
        input.style.border='1.5px solid red';
        return false;
    }
}

//check if a field contains only letters
const checkIfLetters = (inpt, err) => {
    if (/\d/.test(inpt.value)){
        err.innerText='must contain only letters';
        inpt.style.border='1.5px solid red';
        return false;
       } else  if(!/\d/.test(inpt.value) & (inpt.value)!==''){
        inpt.style.border='1.5px solid green';
        err.innerText='';
        return true;
        }
}


//check if  CVC has three Numbers
const cvcLength = (val, er) =>{
    if (val.value.length>3 || val.value.length<3 & val.value!==''){
        er.innerText = 'must be 3 numbers'
        val.style.border = '1.5px solid red';
        return false;
    } else if (val.value.length===3){
        er.innerText = ''
        val.style.border = '1.5px solid green';
        return true;
    }
}

//check if exp.date has 2 numbers
const expLength = (val, er) =>{
    if (val.value.length>2 || val.value.length<2 & val.value!==''){
        er.innerText = 'must be 2 numbers'
        val.style.border = '1.5px solid red';
        return false;
    } else if (val.value.length===2){
        er.innerText = ''
        val.style.border = '1.5px solid green';
        return true;
    }
}

// check  inputs before submitting the form
function isFormValid(){
    const inputContainers = form.getElementsByTagName('span');
    
    for ( const container of inputContainers){
        if(container.innerText!==''){
            return false;
        } else {
            return true;
        }
    }
}

