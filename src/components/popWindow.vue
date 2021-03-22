<template>
    <div class="float_main_window">
        <div class="float_window"> 
            <input v-for="type in popParam" :key="type" :type="type" v-model="input_data[type]" style="input_style"/>
            <span style="correct_button">确认</span>
            <span style="cancle_button">取消</span>
        </div>
    </div>
</template>

<script>

import {ref, defineComponent} from 'vue'
export default defineComponent({
    name: "show",
    props: {
        popParam:Object
    },
    setup(props,{emit}){
        var input_data =ref([])
        function sendInputData(){
            emit('get_input',input_data.value)
        }
        return{
            input_data,
            sendInputData
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

.float_window {
    position:fixed;
    width:400px;
    /* height: content; */
    height: 200px;
    box-shadow: 0 0 20px lightblue;
    background-color:white;
    left: 50%;
    top: 30%;
    margin-left: -200px;
    z-index: 99;
}
.float_main_window{
    position:fixed;
    width:100%;
    height: 100%;
    z-index: 98;
    background-color:gray;
}
</style>