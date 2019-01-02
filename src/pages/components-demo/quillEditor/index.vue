<template>
    <div class="editor p20">
        <code><a class="link-type" href="https://github.com/surmon-china/vue-quill-editor">Vue-Quill-Editor</a>基于 Quill、适用于 Vue 的富文本编辑器，支持服务端渲染和单页应用。</code>
        <quill-editor :content:="content" @editorChange="editorChange"></quill-editor>
    </div>
</template>
<script>
import QuillEditor from '@/components/quill-editor'
export default {
    components: {
      QuillEditor
    },
    data() {
        return {
            content: ''
        }
    },
    methods: {
        editorChange (content) {
            this.content = content
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


