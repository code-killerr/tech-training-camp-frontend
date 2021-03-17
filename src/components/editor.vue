<template>
    <div>
        <textarea v-model="editor_text" class="editor_style" v-text="msg" ref="editor_tag"></textarea>
    </div>
</template>

<script>
import {ref, defineComponent} from 'vue'

export default defineComponent({
    name: "editor",
    props: {
        msg:Object
    },
    setup(props,{emit}){ //分解context对象取出emit
        const editor_text = ref("this is a test")
        function childEmit(){
            emit('get_data',editor_text.value)
        }
        return{
            childEmit,
            editor_text
        }
    },
    watch:{
        editor_text(val){
            this.childEmit()
        },
        msg(val){
            console.log(this.msg)
            this.editor_text += this.msg.start_value+this.msg.end_value
            let index = this.editor_text.length - this.msg.end_value.length
            console.log(index)
            this.$refs.editor_tag.focus()
            this.$refs.editor_tag.setSelectionRange(index, index)
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
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: black;
  color: #74afeb;
  font-size: 20px;
  padding: 10px;
  box-sizing:border-box
}
</style>

