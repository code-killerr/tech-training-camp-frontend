<template>
  <div class="container">
  <div class="big_title"><span style="width:100%;font-size:30px"><b>Markdown Editor</b></span></div>
    <div id="title" class="title_area">
      <titlebar @click_button="get_button"></titlebar>
    </div>
    <!-- <editor id="editor" ></editor> -->
    <div class="main_container">
      <div id="editor" class="editor_area">
        <editor :msg="title_msg" @get_data="send_data" @finish_msg="editor_finish"></editor>
      </div>
      
      <div id="show" class="show_area">
        <show :text="translateMd"></show>
        <!-- <div v-html="translateMd" class="show_style"></div> -->
      </div>
    
    </div>
  </div>
</template>

<script>
import marked from './assets/js/translate.js'
import {computed, ref, defineComponent} from 'vue'
import editor from './components/editor.vue';
import titlebar from './components/title.vue';
import show from './components/show.vue'
export default defineComponent({
  name: 'markDownApp',
  components: {
    editor,
    titlebar,
    show
  },
  setup() {
    var text = ref("")
    var title_msg = ref([])
    function send_data(val){
        // alert(val)
        text.value = val
    }

    function get_button(val){
      // console.log(val)
      title_msg.value = val
    }

    function editor_finish(val){
      title_msg.value = {}
      // console.log("清空msg")
      // console.log(val)
    }
    var renderer = new marked.Renderer();
    marked.setOptions({
        renderer: renderer,
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
    });

    const translateMd = computed(()=>{
      return marked(text.value)
    })
    return{
        send_data,
        text,
        translateMd,
        get_button,
        title_msg,
        editor_finish
    }
  }
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
  height: 100%;
  flex-wrap: nowrap;
  flex-grow: 1;
}
.container{
  display:flex;
  height: 100%;
  flex-direction:column;
}
.title_area{
  height:60px;
  width: 100%;
  box-shadow:0px 10px 10px lightblue;
  /* background-color:#efefef; */
}
.editor_area {
  width: 50%;
  height:100%;
  flex-grow: 1;
}
.editor_area div{
  width:100%;
  height: 100%;
}
.show_area{
  width: 50%;
  padding:10px;
  height:100%;
  flex-grow: 1;

}

body{
  height: 100%;
}
html{
  height: 100%;
}
.big_title{
  width: 100%;
  height: 50px;
  text-align: center;
  border-bottom: 1px solid lightblue;
  display:flex;
  align-items: center;
}
</style>
