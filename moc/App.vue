<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col form-inline">
        <b-form-input id="input-2" v-model="newTask" required placeholder="Enter new task"></b-form-input>
        <b-form-datepicker v-model="dueDate" dropright button-only today-button calendar-width="50%"
          ></b-form-datepicker>
        <b-button v-if="dueDate != ''" @click="add" variant="primary" class="ml-3">Add</b-button>
      </div>
      <b-button variant="" @click="exportData">Save It!!!</b-button>
    <b-button class="ml-2" variant="" @click="importData">Load My ToDoList!!!</b-button>
    </div>
    <div class="overflow-y-scroll row mt-5">
      <div class="col-3">
        <div class="p-2 alert alert-secondary">
          <h3>Back Log</h3>
          <!-- Backlog draggable component. Pass arrBackLog to list prop -->
          <draggable class="list-group cursor kanban-column" :list="arrBackLog" :clone="clone" group="tasks">
            <div class="list-group-item user-select-none" v-for="(element, index) in arrBackLog" :key="element.name">
              {{ element.name }}
              <p :class="timeup(arrBackLog, index) ? 'late' : 'ontime'">{{ element.dueDate }}</p>
              <b-button @click="cancel(arrBackLog)" variant="danger" class="ml-0">Delete</b-button>
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-3">
        <div class="p-2 alert alert-primary">
          <h3>In Progress</h3>
          <!-- In Progress draggable component. Pass arrInProgress to list prop -->
          <draggable class="list-group cursor kanban-column" :list="arrInProgress" group="tasks">
            <div class="list-group-item user-select-none" v-for="(element, index) in arrInProgress" :key="element.name">
              {{ element.name }}
              <p :class="timeup(arrInProgress, index) ? 'late' : 'ontime'">{{ element.dueDate }}</p>
              <b-button @click="cancel(arrInProgress)" variant="danger" class="ml-0">Delete</b-button>
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-3">
        <div class="p-2 alert alert-warning">
          <h3>Testing</h3>
          <!-- Testing draggable component. Pass arrTested to list prop -->
          <draggable class="list-group cursor kanban-column" :list="arrTested" group="tasks">
            <div class="list-group-item user-select-none" v-for="(element, index) in arrTested" :key="element.name">
              {{ element.name }}
              <p :class="timeup(arrTested, index) ? 'late' : 'ontime'">{{ element.dueDate }}</p>
              <b-button @click="cancel(arrTested)" variant="danger" class="ml-0">Delete</b-button>
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-3">
        <div class="p-2 alert alert-success">
          <h3>Done</h3>
          <!-- Done draggable component. Pass arrDone to list prop -->
          <draggable class="list-group cursor kanban-column" :list="arrDone" group="tasks">
            <div class="list-group-item user-select-none" v-for="(element, index) in arrDone" :key="element.name">
              {{ element.name }}
              <p :class="timeup(arrDone, index) ? 'late' : 'ontime'">{{ element.dueDate }}</p>
              <b-button @click="cancel(arrDone)" variant="danger" class="ml-0">Delete</b-button>
            </div>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import draggable
import draggable from "vuedraggable";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "kanban-board",
  components: {
    //import draggable as a component
    draggable
  },
  data() {
    return {
      // for new tasks
      newTask: "",
      dueDate: "",
      isShow: false,
      arrBackLog: [],
      arrInProgress: [],
      arrTested: [],
      arrDone: [],
    };
  },
  methods: {
    //add new tasks method
    add: function () {
      this.isShow = true;
      if (this.newTask && this.dueDate !== "") {
        this.arrBackLog.push({ name: this.newTask, dueDate: this.dueDate });
        this.newTask = "";
        this.dueDate = "";
        this.isShow = false;
      }
    },
    cancel: function (arr, index) {
      arr.splice(index, 1);
    },
    clone: (block) => {
      block.uuid = uuidv4();
      return block;
    },
    timeup(array, index) {
      let date = new Date(array[index].dueDate);
      console.log("Checking", new Date(date.getFullYear(), date.getMonth(), date.getDate()) < new Date(), "date", new Date(date.getFullYear(), date.getMonth(), date.getDate()), "||| newdate", new Date())
      if (new Date(date.getFullYear(), date.getMonth(), date.getDate()) < new Date()) {
        return true;
      }
      return false;
    },
    exportData() {
            let myToDo = JSON.stringify(this.arrBackLog);
            let myToDoI = JSON.stringify(this.arrInProgress);
            let myToDoT = JSON.stringify(this.arrTested);
            let myToDoD = JSON.stringify(this.arrDone);
            localStorage.setItem("myToDoB", myToDo);
            localStorage.setItem("myToDoI", myToDoI);
            localStorage.setItem("myToDoT", myToDoT);
            localStorage.setItem("myToDoD", myToDoD);

    },
    importData() {
            let myToDoB = localStorage.getItem("myToDoB");
            let myToDoI = localStorage.getItem("myToDoI");
            let myToDoT = localStorage.getItem("myToDoT");
            let myToDoD = localStorage.getItem("myToDoD");
            if (myToDoB) {
                this.arrBackLog = JSON.parse(myToDoB);
            }
            if (myToDoI) {
                this.arrInProgress = JSON.parse(myToDoI);
            }
            if (myToDoT) {
                this.arrTested = JSON.parse(myToDoT);
            }
            if (myToDoD) {
                this.arrDone = JSON.parse(myToDoD);
            }
    }
  },
};
</script>

<style>
/* light stylings for the kanban columns */
.kanban-column {
  min-height: 300px;
  cursor: move;
}

.list-group-item:hover {
  background-color: #222;
  color: #ffffff;
}

.ontime {
  color: rgb(35, 239, 137);
}

.late {
  color: red;
}
</style>