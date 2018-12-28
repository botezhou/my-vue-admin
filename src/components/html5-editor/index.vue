<template>
    <div class="html5-editor">
        <editor :content="content" :height="300" @change="updateData"></editor> 
    </div>
</template>
<script>
import VueHtml5Editor from 'vue-html5-editor'
import {options} from './utils/editor'
const editor = new VueHtml5Editor(options)
export default {
    name: 'html5-editor',
    components: {
      editor
    },
    props: {
        content: {
            type: String,
            default: null
        },
        height: {
            type: Number,
            default: 300
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        updateData (content) {
            this.$emit('update',content)
        },
    }
}
</script>
<style lang="less" scoped>
    .editor{
        background: #fff;
        padding: 20px;
        height: 100%;
    }
</style>


