/* 
    To do List:
        //-stampare in pagina un item per ogni elemento contenuto in un array
        //-ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
        //-predisporre un input per aggiungere un nuovo item alla lista: 
            //digitando il tasto invio oppure ciccando su un pulsante 
            //il testo digitato viene aggiunto alla lista 
        //se queste regole 
            //controllare la lunghezza minima della stringa della newTask (5 caratteri)
            //controllare se realmente sono stati digitati caratteri
        //non vengono rispettate allora mostro un messaggio di errore
        */

/*  Funzionalitá di Base:
        //-La nostra todo list avrá alcune tasks di default predefinite
        //-L'utente puó inserire nuove tasks
        //-Cliccando sulla "X" l'utente puó cancellare una task
        //-Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
        //-ma vuole anche poter indicare che la task é stata completata (con un icona cliccabile)
        //-Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
        //-Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri. */


/* Bonus:
        -L'utente vuole poter modificare una task giá inserita
        //-Quando una task é stata completa allora vuole che venga inserita in un'altra colonna tipo "tasks completate"
        //se una task é stata marcata come completa per sbaglio allora vuole poterla rimettere nella todo list (cliccando su un altra icona)
        //-dice che quando cancella una task non vuole che questa venga subito rimossa, 
        //-ma vuole che resti visibile ma venga spostata in una colonna tipo "cestino"
        -dice infine che vuole poter rimuovere tutte le tasks nel cestino cliccando su un pulsante tipo "svuota cestino"

 */
var app = new Vue({
    el: '#app',
    data: {
        titleTask: 'Todo List',
        titleSave: 'Complete tasks',
        titleTrash: 'Trash',
        logoImage: 'https://www.boolean.careers/images/misc/logo.png',
        placeInput: 'Add a new task',
        errorMessage: 'Enter a new task (minimum 5 characters)',
        completionMessage: 'You got nothing to do today, rest!!',
        newTask: '',
        saves: [],
        deletes: [],
        tasks: [
            'Fare la spesa',
            'Porta fuori il cane',
            'Studia VueJS',
            'controlla la To Do List'
        ],
        error: false,
    },
    methods: {
        addTasks() {
            //added the required control, that is that the newTask must be at least 5 characters long and present otherwise shows an error message
            if (this.newTask != '' && this.newTask.length >= 5) {
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
            this.deletes.push(this.tasks[i])
            this.tasks.splice(i, 1);

        },
        completeTask(i) {
            this.saves.push(this.tasks[i])
            this.tasks.splice(i, 1)
        },
        reundoTask(i) {
            this.tasks.push(this.saves[i])
            this.saves.splice(i, 1)
        },
        returnTask(i) {
            this.tasks.push(this.deletes[i])
            this.deletes.splice(i, 1)
        }
    }
})