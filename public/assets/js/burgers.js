document.addEventListener('DOMContentLoaded', (event) => {
    if(event) {
        console.info('DOM LOADED');
    }
})

// updating buttons, linked to the burger-blocl.handlebars
const changeDevouredBtns = document.querySelectorAll('.change-devoured');
