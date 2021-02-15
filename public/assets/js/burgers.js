document.addEventListener('DOMContentLoaded', (event) => {
    if(event) {
        console.info('DOM LOADED');
    }
})

// updating buttons, linked to the burger-blocl.handlebars
const changeDevouredBtns = document.querySelectorAll('.change-devoured');

// set event listeners for the create button - CREATE, POST, DELETE
if(changeDevouredBtns) {
    changeDevouredBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
            // grab id elem (e) - "id"
            const id = e.target.getAttribute('data-id');
            const newDevoured = e.target.getAttribute('data-newDevoured');
            const newDevouredState = {
                devoured: newDevoured,
            };
        })
    })
}



