const allSections = document.querySelectorAll('.section');
const sectButtons = document.querySelectorAll('.controls');
const sectButton = document.querySelectorAll('.control');
const sectBody = document.querySelector('.main-content');

function pageTransition() {
    //button selection
    for (let i = 0; i < sectButton.length; i++) {
        sectButton[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn';
        })
    }

    //section activation
    sectBody.addEventListener('click', function(e) {
        const id = e.target.dataset.id;
        const activeElement = document.getElementById(id);
        if(id) {
            //remove the .active class for each section
            allSections.forEach((section) => {
                section.classList.remove("active")
            })
            activeElement.className += (" active");
        }
    })
}

pageTransition();

