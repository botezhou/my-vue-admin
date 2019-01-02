<template>
    <div>
        <!-- bidirectional data binding（双向数据绑定） -->
        <!-- <quill-editor v-model="content"
                        ref="myQuillEditor"
                        :options="editorOption"
                        @blur="onEditorBlur($event)"
                        @focus="onEditorFocus($event)"
                        @ready="onEditorReady($event)">
        </quill-editor> -->
        <!-- Or manually control the data synchronization（或手动控制数据流） -->
        <quill-editor :content="content"
                        :options="editorOption"
                        @change="onEditorChange($event)">
        </quill-editor>
    </div>
</template>

<script>

  // you can also register quill modules in the component
    import Quill from 'quill'
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'

    import { quillEditor } from 'vue-quill-editor'
    export default {
        components: {
            quillEditor
        },
        props: {
            content: {
                type: String,
                default: '<h2>I am Example</h2>'
            }
        },
        data () {
            return {
                editorOption: {
                    // some quill options
                }
            }
        },
        // manually control the data synchronization
        // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
        methods: {
            onEditorChange({ quill, html, text }) {
                this.$emit('editorChange', html)
            }
        }
    }
</script>