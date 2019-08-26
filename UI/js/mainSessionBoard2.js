// Get modal elements
const AcceptanceNoticeModalElements = document.getElementById('sessionBoardModalElts2');

//Fucntions to open modals
const openNoticeModal = () =>{
    AcceptanceNoticeModalElements.style.display = 'block';
}

openNoticeModal();

// // Get modal elements
// document.getElementById('sessionBoardModalElts2').style.display = 'block';

const closeAcceptanceNoticeMondalButton = document.querySelector('.closeAcceptanceNotice');

//Fucntions to close modals
const closeNoticeMondal = () => {
    AcceptanceNoticeModalElements.style.display = 'none';
}

closeAcceptanceNoticeMondalButton.addEventListener('click', closeNoticeMondal);
