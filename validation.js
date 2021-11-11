const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const comment = document.getElementById('comment');
const dispComment = document.getElementById('dispComment');

form.addEventListener('submit', (e) => {
    e.preventDefault();
     checkInputs(); 
});

function checkInputs() {
    let isvalid = true;
    //getting the values from the inputs//
   const usernameValue = username.value.trim();
   const useremailValue =email.value.trim();
   const usercommentValue =comment.value.trim();

   if(usernameValue === '') {
        isvalid = false;
       setErrorFor(username, 'Username cannot be blank');
   } else {
       setSuccessFor(username);
   }
   //validation for email
   if(useremailValue === '') {
        isvalid = false;
       setErrorFor(email, 'Email cannot be blank',);
   } else if(!isEmail(useremailValue)) {
    isvalid = false;
     setErrorFor(email, 'Error. You might have used uppercase or unknown symbol');
   }else {
       setSuccessFor(email);
   }
   //validation for comments
   if(usercommentValue === '') {
     isvalid = false;
     setErrorFor(comment, 'The comment section cannot be empty');
} else if(!isEmail(useremailValue)) {
    isvalid = false;
     setErrorFor(comment, 'Email not valid. You might have used uppercase or unknown symbol');
}else {
    setSuccessFor(comment);
} if (isvalid){
    form.submit();
    form.reset();
}
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
   const formControl = input.parentElement;
   formControl.className = 'form-control success';
}

    
function isEmail(email) {
   return /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(email);
}