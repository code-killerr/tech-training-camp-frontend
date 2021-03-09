<template>
  <img src="./assets/img/logo.png">
  <div>
    <div id="title"></div>
    <editor id="editor"></editor>
    <div id="show"></div>
  </div>
</template>

<script>

import editor from './components/editor.vue';
export default {
  name: 'markDownApp',
  components: {
    editor
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
