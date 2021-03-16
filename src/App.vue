<template>
  <img src="./assets/img/logo.png">
  <div>
    <div id="title"></div>
    <!-- <editor id="editor" ></editor> -->
    <div id="editor" class="editor_area">
      <editor @my-emit="parentEmit" ></editor>
    </div>
    
    <div id="show" class="show_area">
      <textarea v-model="a" class="show_style"></textarea>
    </div>
    
  </div>
</template>

<script>
import {ref, defineComponent} from 'vue'
import editor from './components/editor.vue';
export default defineComponent({
  name: 'markDownApp',
  components: {
    editor
  },
  setup() {
    let a = ref("")
    function parentEmit(val){
        // alert(val)
        a.value = val
    }
    return{
        parentEmit,
        a
    }
  },
});
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
.editor_area {
  width: 50%;
  height:500px;
  float: left;

}
.editor_area div{
  width:100%;
  height: 100%;
}
.show_area{
  width: 50%;
  height: 500px;
  float: left;
}
.show_style{
  width:100%;
  height: 100%;
}
</style>
