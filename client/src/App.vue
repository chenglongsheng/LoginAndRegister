<template>
  <div id="app">
    <router-view></router-view>
    <router-link to="/login"><el-button>login</el-button></router-link>
    <router-link to="/register"><el-button>register</el-button></router-link>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    Login,
    Register,
  },
};
</script>

<style>
</style>
