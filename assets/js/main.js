/* 
    To do List:
        //-stampare in pagina un item per ogni elemento contenuto in un array
        //-ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
        //-predisporre un input per aggiungere un nuovo item alla lista: 
            //digitando il tasto invio oppure ciccando su un pulsante 
            //il testo digitato viene aggiunto alla lista 
        se queste regole 
            controllare la lunghezza minima della stringa della newTask (5 caratteri)
            controllare se realmente sono stati digitati caratteri
        non vengono rispettate allora non pusho nulla
        */

/*  Funzionalitá di Base:
        -La nostra todo list avrá alcune tasks di default predefinite
        -L'utente puó inserire nuove tasks
        -Cliccando sulla "X" l'utente puó cancellare una task
        -Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
        -ma vuole anche poter indicare che la task é stata completata (con un icona cliccabile)
        -Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
        -Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri. */
var app = new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: [
            'Fare la spesa',
            'Porta fuori il cane',
            'Studia VueJS',
            'controlla la To Do List'
        ],
        error: false
    },
    methods: {
        addTasks() {
            //added the required control, that is that the newTask must be at least 5 characters long and present otherwise shows an error message
            if (this.newTask != '' && this.newTask.length > 5) {
                this.tasks.push(this.newTask)
                this.error = false
            } else {
                console.log('errore');
                this.error = true
            }
            this.newTask = ''
        },
        removeTasks(i) {
            //control that at the click of the delete button actually erases the task
            /* console.log('remove task' + ' ' + i); */
            //i use the . splice() method as parameter needs the indece of the task to be deleted and the number of items to be deleted from that index.
            this.tasks.splice(i, 1);
        }
    }
})