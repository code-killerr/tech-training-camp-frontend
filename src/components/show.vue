<template>
    <div v-html="text" class="show_style">
    </div>
</template>

<script>

import {ref, defineComponent} from 'vue'
export default defineComponent({
    name: "show",
    props: {
        text:String
    },
    setup(){
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
pre{
    background-color:black;
    color: #74afeb;
    font-size: 20px;
    padding:10px;
    border-radius: 10px;
}

pre code{
    background-color: black;
    color:lightblue;
}

.show_style{
  width:100%;
  height: 100%;
}

code{
    background-color:lightblue;
    font-size: 20px;
    padding: 5px;
    color: rgb(245, 20, 20);
    border-radius: 5px;
}

</style>