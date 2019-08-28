// OPEN/CLOSE MODAL ON THE USER BOARD PAGE

// Get modal elements
var MentorModal = document.querySelector('#MentorModal');

// Get open modal buttons
var btn_open_modal = document.querySelectorAll('.btn-open-modal');


// Get close mondal button
var closeMondalButton = document.querySelector('.closeModalButton');


//Function to open the signUp modal
const viewMentor = (e)=> {
     let menta_index =  e.target.getAttribute('data-index');
    document.querySelector('.mentor-index').textContent = menta_index;
    MentorModal.style.display = 'block';
}

// Listen for click to open signUpModal (ONLY ONE BUTTON!!!)
btn_open_modal.forEach((btn,index)=>{
   btn.addEventListener('click', viewMentor);
});

closeMondalButton.addEventListener('click',(e)=>{
    MentorModal.style.display = 'none';
});

