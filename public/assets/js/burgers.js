const { response } = require("express");

document.addEventListener('DOMContentLoaded', (event) => {
    if(event) {
        console.info('DOM LOADED');
    }
})

// updating buttons, linked to the burger-blocl.handlebars
const changeDevouredBtns = document.querySelectorAll('.change-devoured');

// set event listeners for the create button - CHANGE, CREATE, POST, DELETE
if(changeDevouredBtns) {
    changeDevouredBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
            // grab id elem (e) - "id"
            const id = e.target.getAttribute('data-id');
            const newDevoured = e.target.getAttribute('data-newDevoured');
            
            const newDevouredState = {
                devoured: newDevoured,
            };

            fetch(`/api/burgers/${id}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                // stringift JSON
                body: JSON.stringify(newDevouredState),
            }).then((response) => {
                if(response.ok) {
                    console.log(`changed devoured to: ${newDevoured}`);
                    location.reload('/');
                } else {
                    alert('something went wrong!');
                }
            });
        });
    });
}



