const containerComponent = {
    type: 'containerComponent',
    title: '布局设置',
    list: [   
        {
            type: 'Row',
            text: '单列布局',
            background: '#fff',
            span: [24],
            width: 100,
            height: 100,
            heightAuto: true,
            childList: {
                childList1: []
            },
        },
        {
            type: 'Row',
            text: '双列布局',
            background: '#fff',
            span: [12,12],
            width: 100,
            height: 100,
            heightAuto: true,
            childList: {
                childList1: [],
                childList2: [],
            },
        },
        {
            type: 'Row',
            text: '8 4 布局',
            background: '#fff',
            span: [16,8],    
            width: 100,
            height: 100,
            heightAuto: true,
            childList: {
                childList1: [],
                childList2: [],
            },
        },
        {
            type: 'Row',
            text: '2 4 6 布局',
            background: '#fff',
            width: 100,
            height: 100,
            heightAuto: true,
            span: [4,8,12],    
            childList: {
                childList1: [],
                childList2: [],
                childList3: [],
            },
        },
        {
            type: 'Row',
            text: '三列布局',
            background: '#fff',
            span: [8,8,8],
            width: 100,
            height: 100,
            heightAuto: true,
            childList: {
                childList1: [],
                childList2: [],
                childList3: [],
            },
            
        },
        {
            type: 'Row',
            text: '四列布局',
            background: '#fff',
            span: [6,6,6,6],
            width: 100,
            height: 100,
            heightAuto: true,
            childList: {
                childList1: [],
                childList2: [],
                childList3: [],
                childList4: [],
            },
        },
        {
            type: 'RowTab',
            text: 'TAB布局',
            background: '#fff',
            curTab: 'f0',
            width: 100,
            height: 100,
            heightAuto: true,
            tabList: [
                {label: 'Tab0', value: 'f0'},
                {label: 'Tab1', value: 'f1'}
            ],
            childList: {
                childList1: [],
                childList2: [],
            },
        }
    ]
}
export default containerComponent 