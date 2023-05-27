<!-- <template>
  <div class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
    <p class="text-3xl text-gray-700 font-bold mb-5">
      Welcome!
    </p>
    <p class="text-gray-500 text-lg">
      Vue and Tailwind CSS in action
    </p>
 </div>
</template> -->


<template>

  <!-- <NavigationBar></NavigationBar> -->

<div>
  <to-do-list></to-do-list>
</div>

<div> <FirstPage></FirstPage> </div>
<div>


</div>
</template>

<script>
import ToDoList from './components/ToDoList.vue';
import NavigationBar from './components/Navigationbar.vue';
import FirstPage from './components/FirstPage.vue';



export default {
components: {
  ToDoList,
  NavigationBar,
  FirstPage
},
};
</script>





