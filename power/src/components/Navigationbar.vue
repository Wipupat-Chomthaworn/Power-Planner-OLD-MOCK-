<template>
    <nav class="navigation-bar">
      <div class="logo">
        <img src="../assets/PP logo.png" alt="Logo">
      </div>
      <div class="links">
        <router-link to="/calendar">Calendar</router-link>
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/power-planner">Power Planner</router-link>
      </div>
    </nav>
  </template>

  <script>
    export default {
      name: 'NavigationBar',
      data() {
        return {
          // data properties here
        }
      },
      methods: {
        // methods here
      }
    }
  </script>

  <style scoped>
    .navigation-bar {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-between;
      padding: 4rem 3rem;
      background-color: #f2f2f2;
    }

    .logo img {
      width: 2rem;
      height: 2rem;
    }

    .links {
      display: flex;
      gap: 1rem;
    }

    .links a {
      color: #333;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.2rem;
    }

    .links a:hover {
      color: #0066cc;
    }
  </style>
