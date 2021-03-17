<template>
    <div  class="title_style">
        <el-button  v-for="button in editor_button" :key="button" :value=button.name class="button_style" @click="click_button(button)">{{button.name}}</el-button>
    </div>
</template>

<script>

import {ref, defineComponent} from 'vue'
export default defineComponent({
    name: "editor",
    setup(props,{emit}){ //分解context对象取出emit
        const editor_button = ref([
            {start_value:'# ',end_value:'',name:"H1"},
            {start_value:'## ',end_value:'',name:"H2"},
            {start_value:'### ',end_value:'',name:"H3"},
            {start_value:'#### ',end_value:'',name:"H4"},
            {start_value:'##### ',end_value:'',name:"H5"},
            {start_value:'###### ',end_value:'',name:"H6"},
            {start_value:'**',end_value:'**',name:"B"},
            {start_value:'~~',end_value:'~~',name:"S"},
            {start_value:'**',end_value:'**',name:"I"},
            {start_value:'**',end_value:'**',name:"B"},
            {start_value:'> ',end_value:'',name:'“'},
            {start_value:'- ',end_value:'',name:'·...'},
            {start_value:'1. ',end_value:'',name:'1.'},
            {start_value:'[',end_value:']()',name:'link'},
            {start_value:'![',end_value:']()',name:'img'}
        ])
        function click_button(button){
            emit('click_button',button)
        }
        return{
            editor_button,
            click_button
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

.title_style{
    display:flex;
    width: 100%;
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color:white;
    font-size: 20px;
 
}
.button_style{
    flex-grow: 1;
    height: 100%;
    background-color:gray;
    font-size: 20px;
    font-weight:bold;
    font-style: italic
}
.el-button+.el-button, .el-checkbox.is-bordered+.el-checkbox.is-bordered{
    margin-left: 0 !important;
}
</style>

