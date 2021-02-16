const { response } = require("express");

document.addEventListener('DOMContentLoaded', (event) => {
    if(event) {
        console.info('DOM LOADED');
    }
})

// UPDATE/CHANGE button, linked to the burger-blocl.handlebars
const changeDevouredBtns = document.querySelectorAll('.change-devoured');

// set event listeners for the create button - UPDATE/CHANGE, CREATE, POST, DELETE
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

// CREATE
const createBurgerBtn = document.getElementById('create-form');

if(createBurgerBtn) {
    createBurgerBtn.addEventListener('submit', (e) => {
        e.preventDefault();

        // grab textarea value
        const newBurger = {
            burger_name: document.getElementById('ca').value.trim(),
            devoured: document.getElementById('devoured').checked,
        };
        //send POST request for new quote
        fetch('api/burgers', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            //json stringify 
            body: JSON.stringify(newBurger),
        }).then(() => {
            // empty form
            document.getElementById('ca').value = '';
            // reload
            console.log('Created new burger!');
            location.reload();
        });
    });
}


