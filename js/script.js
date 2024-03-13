const { createApp } = Vue;


createApp({

  data() {
    return {
 
      todoList: [
        {
          text: 'Finire esercitazione',
          done: true // Indica se l'attività è stata completata
        },
        {
          text: 'Studiare Vue',
          done: false
        },
        {
          text: 'RECAP con Paolo',
          done: false
        },
      ],
      // Variabile per memorizzare il testo della nuova attività
      newTask: '',
      // Messaggio di errore da visualizzare
      errorMsg: ''
    }
  },


  methods: {
    // Metodo per aggiungere una nuova attività alla lista
    addTask() {

      this.errorMsg = '';
      // Memorizza il testo della nuova attività
      const newText = this.newTask;
      // Verifica se il testo della nuova attività ha almeno 4 caratteri
      if (newText.length >= 4) {
        // Aggiunge la nuova attività all'inizio della lista
        this.todoList.unshift({ text: newText, done: false });
      } else {
        // Mostra un messaggio di errore se il testo è troppo breve
        this.errorMsg = 'Attenzione! Il testo deve avere almeno 4 caratteri';
      }
      // Resetta il campo di input per la nuova attività
      this.newTask = '';
    },

    // Metodo per eliminare un'attività dalla lista
    deleteTask(index) {
      // Rimuove l'attività corrispondente all'indice specificato
      this.todoList.splice(index, 1);
    }
  },
}).mount('#app'); 
