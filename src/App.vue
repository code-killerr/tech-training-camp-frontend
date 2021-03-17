<template>
  <div class="container">
    <div id="title" class="title_area"></div>
    <!-- <editor id="editor" ></editor> -->
    <div class="main_container">
      <div id="editor" class="editor_area">
        <editor @my-emit="parentEmit" ></editor>
      </div>
      
      <div id="show" class="show_area">
        <div v-text="a" class="show_style"></div>
      </div>
    
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
  height:100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
.main_container{
  display:flex;
  flex-grow: 10;
}
.container{
  display:flex;
  height: 100%;
  flex-direction:column;
}
.title_area{
  flex-grow: 1;
  width: 100%;
  background-color: pink;
}
.editor_area {
  height:100%;
  float: left;
  flex-grow: 1;
}
.editor_area div{
  width:100%;
  height: 100%;
}
.show_area{
  height:100%;
  flex-grow: 1;
  /* height: 500px; */
  float: left;

}
.show_style{
  width:100%;
  height: 100%;
}
body{
  height: 100%;
}
html{
  height: 100%;
}
</style>
