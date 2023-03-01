<template>
    <div>
        <h2>My To-Do List</h2>
        <form @submit.prevent="addItem">
            <input v-model="newItem.name" placeholder="Add a new item" />
            <input v-model="newItem.dueDate" type="date" placeholder="Due Date" />
            <button>Add Item</button>
        </form>
        <ul>
            <!-- <li v-for="(item, index) in items" :key="index" >
                Task: " {{ item.name }} " <span :class="checkDate(item)"> => Due Date Is : {{ item.dueDate }}</span>
                <button @click="deleteItem(index)">Delete It!</button>
            </li> -->
            <li v-for="(item, index) in items" :key="index">
                Task: "{{ item.name }}" => <p  :class="checkDate(item) ? 'late':'ontime' "> Due Date Is : {{ item.dueDate }} </p>
                <button @click="deleteItem(index)">Delete It!</button>
            </li>

        </ul>
        <button @click="exportData">Save It!!!</button>
        <button @click="importData">Load My ToDoList!!!</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            newItem: {
                name: "",
                dueDate: "",
            },
            items: [],
        };
    },
    methods: {
        addItem() {
            if (this.newItem.name !== "" && this.newItem.dueDate !== "") {
                this.items.push({
                    name: this.newItem.name,
                    dueDate: this.newItem.dueDate,
                });
                this.newItem.name = "";
                this.newItem.dueDate = "";
            }
        },
        deleteItem(index) {
            this.items.splice(index, 1);
        },
        exportData() {
            let myToDo = JSON.stringify(this.items);
            localStorage.setItem("myToDoSt", myToDo);
        },
        importData() {
            let myToDo = localStorage.getItem("myToDoSt");
            if (myToDo) {
                this.items = JSON.parse(myToDo);
            }
        },
        checkDate(item) {
            let date = new Date(item.dueDate);
            console.log("Checking",new Date(date.getFullYear(),date.getMonth(),date.getDate()) < new Date(),"date",new Date(date.getFullYear(),date.getMonth(),date.getDate()), "||| newdate",new Date())
            if (new Date(date.getFullYear(),date.getMonth(),date.getDate()) < new Date()) {
                // return "late";
                return true;
            }
            return false;


        },
    },
};
</script>
<style scoped>
.ontime{
    color: aqua;
}
.late {
    color: red;
}
</style>
