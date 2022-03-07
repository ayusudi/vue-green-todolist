// FINAL RESULT
new Vue({
  el: '#app',
  data: {
    page: "Landing Page",
    loginStatus: false,
    todos: [  // ceritanya data ini telah di dapat dari database
      { todo: "Lulus dari Phase 1", isDone: true, deadline: "2022-02-28" },
      { todo: "Semangat di Phase 2", isDone: true, deadline: "2022-03-28" },
      { todo: "Belajar Vue", isDone: false, deadline: "2022-03-28" },
      { todo: "Belajar Vue Dirrective", isDone: false, deadline: "2022-03-28" }
    ],
    statusFCreate: false,
    formCreate: {
      todo: "",
      deadline: ""
    },
    formLogin: {
      batch: "",
      password: "",
      name: ""
    }
  },
  methods: {
    logIn() {
      this.loginStatus = true
      this.changePage("Dashboard")
    },
    changePage(string) {
      this.page = string
    },
    switchFCreate() {
      if (this.statusFCreate) {
        this.statusFCreate = false
      } else {
        this.statusFCreate = true
      }
    },
    createToDo(){
      let newToDo = {
        todo: this.formCreate.todo,
        isDone: false,
        deadline: this.formCreate.deadline
      }
      this.todos.push(newToDo)
      this.resetCreateToDo()
    },
    resetCreateToDo(){
      this.formCreate.todo = ''
      this.formCreate.deadline = ''
    },
    logOut() {
      // menghapus token 
      // menghapus data yang personal dari this
      this.loginStatus = false
      this.changePage('Landing Page')
    },
    deleteToDo(e){
      this.todos.splice(e, 1)
    }
  }
})