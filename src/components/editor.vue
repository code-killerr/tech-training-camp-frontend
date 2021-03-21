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
        const editor_text = ref("## this is a test")
        function sendTextData(){
            emit('get_data',editor_text.value)
        }
        function sendFinishMsg(){
            emit('finish_msg',{})
        }
        sendTextData()
        return{
            sendTextData,
            editor_text,
            sendFinishMsg
        }
    },
    watch:{
        editor_text(val){
            this.sendTextData()
        },
        msg(val){
            // console.log(this.msg)
            if(Object.keys(this.msg).length ==0 ){
                return
            }
            // 获取光标位置
            let 光标Position = this.$refs.editor_tag.selectionStart
            // console.log("光标位于"+光标Position)
            // console.log(this.msg.tagid)
            // 根据光标位置进行截断数据
            let startText = this.editor_text.slice(0,光标Position)
            let endText = this.editor_text.slice(光标Position)
            let textareaTag = this.$refs.editor_tag
            // console.log(this.msg)
            if(0 <= this.msg.tagid && this.msg.tagid < 6){
                let 回车位置 = startText.lastIndexOf('\n')+1
                this.editor_text = this.editor_text.slice(0,回车位置) + this.msg.start_value + this.msg.end_value+this.editor_text.slice(回车位置)
            }else{
                console.log(startText + this.msg.start_value+this.msg.end_value + endText)
                this.editor_text = startText + this.msg.start_value+this.msg.end_value + endText
            }
            let index = 光标Position + this.msg.start_value.length
            // console.log("index位于"+index)
            textareaTag.focus()
            this.$nextTick(() => {
                textareaTag.setSelectionRange(index, index)
            })
            // 发送完成信号，清空msg，等待下次调用
            this.sendFinishMsg()
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
  box-sizing:border-box;
}

</style>

