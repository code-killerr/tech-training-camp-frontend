<template>
    <div  class="title_style">
        <span  v-for="button in editor_button" :key="button" :value=button.name class="button_style" @click="click_button(button)">{{button.name}}</span>
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
            {start_value:'\n```\n',end_value:'\n```\n',name:"CODE"},
            {start_value:'`',end_value:'`',name:"code"},
            {start_value:'~~',end_value:'~~',name:"S"},
            {start_value:'*',end_value:'*',name:"I"},
            {start_value:'**',end_value:'**',name:"B"},
            {start_value:'> ',end_value:'',name:'“'},
            {start_value:'- ',end_value:'',name:'·...'},
            {start_value:'1. ',end_value:'',name:'1.'},
            {start_value:'[',end_value:']()',name:'link'},
            {start_value:'![',end_value:']()',name:'img'}
        ])
        for(let tag in editor_button.value){
            // console.log(tag)
            editor_button.value[tag].tagid=parseInt(tag)
        }
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
    width: 50%;
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color:white;
    font-size: 20px;
    padding: 10px;
    box-sizing:border-box;

}
.button_style{
    flex-grow: 1;
    height: 100%;
    font-size: 20px;
    font-style: italic;
    border: 0px;
    cursor: pointer;
    color:black;
    display:flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    
}
.button_style:hover{
    box-shadow:0 0 5px 3px lightblue;
    /* border: 1px solid lightblue; */
}
.button_style:active{
    /* box-shadow:0 0 -10px -5px lightblue; */
    box-shadow: none;
    /* border: 0px solid lightblue; */
}
.el-button+.el-button, .el-checkbox.is-bordered+.el-checkbox.is-bordered{
    margin-left: 0 !important;
}
</style>

