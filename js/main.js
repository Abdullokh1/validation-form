const nameInput = document.querySelector('.name-input');
const form = document.querySelector('.form');
const nameWarning = document.querySelector('.name-warning');
const emailInput  = document.querySelector('.email-input');
const emailWarn = document.querySelector('.email-warning');
const numInput = document.querySelector('.numInput');
const numWarn = document.querySelector('.numberWarn');
const password = document.querySelector('.passowrdInput');
const passwordWarn = document.querySelector('.passwordWarn');
const confirmInput = document.querySelector('.confirm-input');
const confirmWarn = document.querySelector('.confirm-warn');
const AllInput = document.querySelectorAll('.input');


nameInput.addEventListener('keyup', ()=>{
  
  let nameValue = nameInput.value;
  nameValue.trim();

  try{
    if (nameValue == ''){
      nameInput.style.border = '2px solid #ee0004';
      nameWarning.style.opacity = '1';
      throw 'Name required'
    }
    if (nameInput.value.match(/[0-9]/) != null || nameInput.value.match(/[!@#$%^&*()_+]/) != null){
      nameInput.style.border = '2px solid #ee0004';
      nameWarning.style.opacity = '1';
      throw 'Enter string! '
    } 
    else{
      nameInput.style.border = '2px solid #543FD3';
      nameWarning.innerText = '';
    }
  }
    catch (e){
      nameWarning.innerText = e;
    }
})

emailInput.addEventListener('keyup', ()=>{
  let email = emailInput.value;

  try{
    if (email == '') {
      emailInput.style.border = '2px solid #ee0004';
      emailWarn.style.opacity = '1';
      throw 'Email required'
    } 
    else{
      emailInput.style.border = '2px solid #543FD3';
      emailWarn.innerText = '';
    }
    if (emailInput.value.includes('@.com')){
      emailInput.style.border = '2px solid #543FD3';
    }
    if (!emailInput.value.includes('@.com')){
      emailInput.style.border = '2px solid #ee0004';
      emailWarn.style.opacity = '1';
      throw 'Use @.com'
    }
    else{
      emailInput.style.border = '2px solid #543FD3';
    }
  }
  catch(e){
    emailWarn.innerText = e;
  }
})


numInput.addEventListener('keyup', ()=>{
  let numValue = numInput.value;


  try{
    if (numValue == ''){
      numInput.style.border = '2px solid #ee0004';
      numWarn.style.opacity = '1';
      throw 'Empty';      
    }
    else{
      numInput.style.border = '2px solid #543FD3';
      numWarn.innerText = '';
    }
  }
  catch(e){
    numWarn.innerText = e;
  }
  
})
  
password.addEventListener('keyup', ()=>{
  let passVal = password.value;
   
  try{
    if (passVal.length < 8){
      password.style.border = '2px solid #ee0004';
      passwordWarn.style.opacity = '1';
      throw 'Minimum 8 character'
    }
    else{
      passwordWarn.innerText = '';
    }
    if (password.value.match(/[0-9]/) != null && password.value.match(/[a-z]/) != null){
      password.style.border = '2px solid #543FD3';
    }
    else{
     throw 'Weak password'

    }
  }
  catch(e){
   passwordWarn.innerText = e;
  }
})

confirmInput.addEventListener('keyup', ()=>{
  try{
    if (confirmInput.value != password.value){
      confirmInput.style.border = '2px solid #ee0004';
      confirmWarn.style.opacity = '1';
      throw "Password doesn't match"
    }
    else{
      confirmInput.style.border = '2px solid #543FD3';
      confirmWarn.innerText = '';
    }
    if (confirmInput.value == ''){
      confirmInput.style.border = '2px solid #ee0004';
    }
  }
  catch(e){
    confirmWarn.innerText = e;
  }
})

 
