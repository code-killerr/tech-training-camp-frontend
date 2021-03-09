<template>
    <div>
        <textarea v-text="editor_text"></textarea>
    </div>
</template>

<script>
import {ref, defineComponent} from 'vue'
export default defineComponent({
    name: "editor",
    setup(){
        const editor_text = ref("this is a test")
        return{ 
            editor_text,
        }
    }
});
</script>

