const allSections = document.querySelectorAll('.section');
const sectButtons = document.querySelectorAll('.controls');
const sectButton = document.querySelectorAll('.control');
const mainDoc = document.querySelectorAll('.main-content');

//function to set the section of the page
function pageTransition() {
    for (let i = 0; i < sectButton.length; i++) {
        sectButton[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn';
        })
    }
}

pageTransition();

