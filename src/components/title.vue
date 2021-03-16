<template>
    <div>
        <textarea v-model="editor_text" class="editor_style" ></textarea>
    </div>
</template>

<script>
import {ref, defineComponent} from 'vue'
export default defineComponent({
    name: "editor",
    setup(props,{emit}){ //分解context对象取出emit
        const editor_text = ref("this is a test")
        function childEmit(){
            emit('my-emit',editor_text.value)
        }
        return{
            childEmit,
            editor_text
        }
    },
    watch:{
        editor_text(val){
            this.childEmit()
        }
    }
    // setup(){
    //     const editor_text = ref("this is a test")
    //     return{ 
    //         editor_text,
    //     }
    // }
});
</script>

<style>
.editor_style {
  width: 100%;
  /* 记得变更高度自适应 */
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: black;
  color: #74afeb;
  font-size: 20px;
}
</style>

