<template>
    <div class="editor p20">
        <code><a class="link-type" href="//github.com/dai-siki/vue-image-crop-upload">Vue-html5-editor</a>是一个Vue的富文本编辑器插件，简洁灵活可扩展，适用于vue2.0以上版本，支持IE11.</code>
        <html5-editor :content="content" @update="updateData"></html5-editor>
    </div>
</template>
<script>
import Html5Editor from '@/components/html5-editor'
export default {
    components: {
      Html5Editor
    },
    data() {
        return {
            content: ''
        }
    },
    methods: {
        updateData (content) {
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


