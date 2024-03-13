const { createApp } = Vue;

createApp({
  data(){
    return{
      todoList: [
        {
          text: 'Finire esercitazione',
          done: false
        },
        {
          text: 'Studiare Vue',
          done: false
        },
        {
          text: 'RECAP con Paolo',
          done: false
        },
      ]
    }
  },

  methods: {

  },



}).mount('#app')