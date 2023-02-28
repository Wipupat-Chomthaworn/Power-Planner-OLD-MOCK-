<template>
    <div>
      <h1>To-Do List</h1>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <input type="checkbox" v-model="item.completed">
          {{ item.text }}
        </li>
      </ul>
      <form @submit.prevent="addItem">
        <input type="text" v-model="newItemText">
        <button>Add Item</button>
      </form>
      <button @click="removeCompletedItems">Remove Completed Items</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { text: 'Example item 1', completed: false },
          { text: 'Example item 2', completed: true },
          { text: 'Example item 3', completed: false },
        ],
        newItemText: '',
      };
    },
    methods: {
      addItem() {
        this.items.push({ text: this.newItemText, completed: false });
        this.newItemText = '';
      },
      removeCompletedItems() {
        this.items = this.items.filter(item => !item.completed);
      },
    },
  };
  </script>
  