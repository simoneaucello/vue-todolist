const { createApp } = Vue;

createApp({
  data(){
    return{
      todoList: [
        {
          text: 'Finire esercitazione',
          done: true
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
      newTask: '',
      errorMsg: ''
    }
  },

  methods: {
    addTask(){
      const newText = this.newTask
      if(newText.length > 4){
        this.todoList.unshift({text: newText, done: false })
      }else{
        this.errorMsg = 'Attenzione! Il testo deve avere almeno 4 caratteri'
      }
    },

    deleteTask(indice){
      this.todoList.splice(indice, 1)
    }

  },



}).mount('#app')