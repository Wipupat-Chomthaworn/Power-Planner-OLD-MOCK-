import Vue from 'vue';

export default Vue.component('to-do-list', {
  data() {
    return {
      newItem: '',
      items: [],
    };
  },
  methods: {
    addItem() {
      if (this.newItem !== '') {
        this.items.push(this.newItem);
        this.newItem = '';
      }
    },
    deleteItem(index) {
      this.items.splice(index, 1);
    },
  },
  template: `
    <div>
      <h2>My To-Do List</h2>
      <form @submit.prevent="addItem">
        <input v-model="newItem" placeholder="Add a new item" />
        <button>Add Item</button>
      </form>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          {{ item }}
          <button @click="deleteItem(index)">X</button>
        </li>
      </ul>
    </div>
  `,
});
