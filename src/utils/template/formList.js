

const formComponent = {
    type: 'formComponent',
    title: '表单组件',
    list: [
        {
            type: 'Input',
            label: '输入框',
            text: '单行输入框',
            value: '',
            placeholder: '请输入内容'
        },     
        {
            type: 'Textarea',
            label: '多行输入框',
            text: '多行输入框',
            value: '',
            placeholder: '请输入内容'
        },    
        {
            type: 'Radio',
            label: '单选框',
            text: '单选框',
            value: '',
            placeholder: '请选择',
            options: [
                {
                    label: '默认选项1',
                    value: 1
                },
                {
                    label: '默认选项2',
                    value: 2
                }
                
            ]
        },     
        {
            type: 'Checkbox',
            label: '多选框',
            text: '多选框',
            value: [],
            placeholder: '请选择',
            options: [
                {
                    label: '默认选项1',
                    value: 1
                },
                {
                    label: '默认选项2',
                    value: 2
                }
                
            ]
        },      
        {
            type: 'Select',
            text: '下拉框',
            label: '下拉框',
            value: '',
            placeholder: '请选择',
            options: [
                {
                    label: '默认选项1',
                    value: 1
                },
                {
                    label: '默认选项2',
                    value: 2
                }
                
            ]
        }
    ],
}
export default formComponent 