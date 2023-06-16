// Lista di email

const list = ['w@s.com', 'm@m.it', 't@z.com', 'i@m.com', 'l@s.it']; 
console.log ('Lista di email', list, typeof list);

// Sottomissione del form 

const form = document.getElementById('form');

form.addEventListener('submit',
    
    function (event) {
        
        event.preventDefault();

        const email = document.getElementById('email').value;
        console.log(email, typeof email);

        let check = false; 

    // Ciclo for con la lista delle email da verificare 

        for (let i = 0; i < list.length; i++) {
            console.log (list[i]);
        
        if (email === list[i]) {
            
            check = true;

        } 
        // else {
        //     check = false;
        //     console.log(' non valido', check, typeof chek);
        // }
        // Alert 
        const message = document.getElementById('message');

        if (check) {

           message.innerHTML = 'Email valida';

        } else {

            message.innerHTML = 'Email non valida';
        }
        }
    }
);




