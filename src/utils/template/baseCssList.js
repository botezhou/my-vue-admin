

const BaseCssComponent = {
    type: 'BaseCssComponent',
    title: '基础CSS组件',
    list: [
        {
            type: 'Title',
            text: '标题栏',
            value: '这是一套可视化系统',
        },
        {
            type: 'Img',
            text: '图片',
            width: 50,
            value: 'https://b-ssl.duitang.com/uploads/item/201708/02/20170802100608_XWRdS.jpeg',
        },
        {
            type: 'P',
            text: '段落',
            value: 'Git是一个分布式的版本控制系统，最初由Linus Torvalds编写，用作Linux内核代码的管理。在推出后，Git在其它项目中也取得了很大成功，尤其是在Ruby社区中。',
        },
        {
            type: 'Button',
            text: '按钮',
            value: '按钮',
        },
        {
            type: 'Tab',
            text: 'Tab组件',
            value: 0,
            background: '#fff',
            heightAuto: true,
            curTab: 'f0',
            width: 100,
            height: 100,
            tabList: [
                {label: 'Tab0', value: 'f0'},
                {label: 'Tab1', value: 'f1'}
            ],
            childList: {
                childList1: [],
                childList2: [],
            },
        },
    ],
}
export default BaseCssComponent 