<template>
  <div class="home">
    <div class="container row">
      <div v-for="todo in todos" :key="todo.id" class="card col s12">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteTodo(todo.id)">delete</i>
        <h2 class="indigo-text">{{ todo.title }}</h2>
        <ul v-for="(task, index) in todo.task" :key="index" class="ingredients">
          <li>
            <span class="chip">{{ task }}</span>
          </li>
        </ul>
      </div>

      <span class="btn-floating btn-large halfway-fab pink">
        <router-link :to="{ name: 'EditTask', params: { list_slug: todo.slug } }">
        <i class="material-icons edit">edit</i>
        </router-link>
      </span>
      
  </div>
  </div>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'Home',
  data () {
    return {
      todos: []
    }
  },
  methods: {
    deleteTodo(id) {
      //delete todo from firestore
      db.collection('todos').doc(id).delete()
      .then(() => {
        this.todos = this.todos.filter(todo => {
          return todo.id != id
        })
      })
    }
  },
  created() {
    //fetch data from firestore
    db.collection('todos').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        let todo = doc.data()
        todo.id = doc.id
        this.todos.push(todo)
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card:first-child {
  margin-top: 40px;
}

.card-content {
  position: relative;
}

.indigo-text {
  text-align: center;
  font-size: 34px;
  text-transform: uppercase;
}

.delete {
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 30px;
  cursor: pointer;
}

.ingredients {
  text-align: center;
}

.chip {
  text-align: center;
  width: 100%;
  margin-bottom: 8px;
  height: 43px;
  line-height: 43px;
  font-size: 18px;
  letter-spacing: 0.2px;
  transition: all 0.6s;
}

.chip:hover {
  cursor: pointer;
  background-color: #b2ff59 ;
  transition: all 0.6s;
}
</style>
