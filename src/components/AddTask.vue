<template>
<div class="addTask">
<div class="container">
    <div class="row">
        <div class="col s12">
            <h2 class="title center-align">Add New List</h2>
        </div>

        <div class="col s12 center">
            <form @submit.prevent="AddList">
                 <div class="field title">
                    <label for="title">List Title: </label>
                    <input type="text" name="title" v-model="title" />
                 </div>

                 <div v-for="(task, index) in tasks" :key="index" class="field mytask">
                    <label for="mytask">My Task: </label>
                    <input type="text" name="mytask" v-model="tasks[index]" />
                    <i class="material-icons delete" @click="delTask(task)">delete</i>
                </div>

                <div class="field add-task">
                    <label for="task">Task Name: </label>
                    <input type="text" name="task" @keydown.tab.prevent="AddTask" v-model="another" />
                </div>

                <div class="field center-align">
                    <p v-if="feedback" class="red-text">{{ feedback }}</p>
                    <button @click.prevent="AddTask" class="btn green">Add More</button>
                    <button type="submit" class="btn red">Add Task</button>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
    name: 'AddTask',
    data() {
        return {
            title: null,
            another: null,
            tasks: [],
            feedback: null,
            slug: null
        }
    },
    methods: {
        AddTask() {
            if(this.another) {
                this.tasks.push(this.another)
                this.another = null
                this.feedback = null
            } else {
                this.feedback = 'You must enter a value to add a task'
            }
        },
        delTask(taskName) {
            this.tasks = this.tasks.filter(task => {
                return task != taskName
            })
        },
        AddList() {
            if(this.title) {
                this.feedback = null
                //create slug
                this.slug = slugify(this.title, {
                    replacement: '-',
                    remove:  /[$*_+~.()'"!\-:@]/g,
                    lower: true
                })

                //Add Data to database
                db.collection('todos').add({
                    title: this.title,
                    task: this.tasks,
                    slug: this.slug
                }).then(() => {
                    //After Added Data
                    this.$router.push({ name: 'Home' })
                }).catch(err => {
                    console.log(err);
                })
            } else {
                this.feedback = 'You must enter a list title!'
            }
        }
    }
}
</script>

<style scoped>
h2.title {
    font-size: 33px;
    letter-spacing: 0.4px;
    font-weight: 500;
    margin-bottom: 40px;
}

form label {
    font-size: 18px;
    text-transform: uppercase;
}

form input {
    text-align: center;
}

button {
    margin-top: 30px;
}

.title {
    margin-bottom: 10px;
}

.mytask{
    margin: 20px auto;
    position: relative;
}

.mytask .delete {
    position: absolute;
    right: 0;
    bottom: 16px;
    color: #aaa;
    font-size: 1.4em;
    cursor: pointer;
}


</style>